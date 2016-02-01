<?php
class LandingPageTracker {
    private $dblink;
    private $marketSourceEventId;
    private $salesPersonId;
    private $leadSourceId;
    private $leadStatusId;
    private $marketId;
    private $marketExpertiseId;
    private $tradeShowSourceId;
    private $isQualified;
    private $title;

    /**
     * Contructor. Default values are "Unknown Salesperson", "Web" lead source, "Cold" lead status and "N.A." trade show source
     *
     * @param int $marketSourceEventId
     * @param int $marketId
     * @param int $marketExpertiseId
     * @param string $title
     * @param int $salesPersonId
     * @param int $leadSourceId
     * @param int $leadStatusId
     * @param int $tradeShowSourceId
     * @param boolean $isQualified
     */
    public function __construct($marketSourceEventId, $marketId, $marketExpertiseId, $title, $salesPersonId = 1,
            $leadSourceId = 2, $leadStatusId = 3, $tradeShowSourceId = 1, $isQualified = false) {
        $this->dblink = mysql_connect('mysql.officite.com', 'off_drportal',  'off_912');
        mysql_select_db('officite_sm2', $this->dblink);
        $this->marketSourceEventId = $marketSourceEventId;
        $this->marketId = $marketId;
        $this->marketExpertiseId = $marketExpertiseId;
        $this->salesPersonId = $salesPersonId;
        $this->leadSourceId = $leadSourceId;
        $this->leadStatusId = $leadStatusId;
        $this->tradeShowSourceId = $tradeShowSourceId;
        $this->title = $title;
        if($isQualified) {
            $this->isQualified = 'Yes';
        } else {
            $this->isQualified = 'No';
        }
    }

    function __destruct() {
        mysql_close($this->dblink);
    }

    /**
     * Activate\deactivate dev mode, records to a different db
     *
     * @param boolean $mode
     */
    public function setDevMode($mode = true) {
        if($mode) {
            mysql_close($this->dblink);
            $this->dblink = mysql_connect('ofcdev01.officite.com', 'dev',  '0fficite');
            mysql_select_db('officite_sm_dev', $this->dblink);
        } else {
            mysql_close($this->dblink);
            $this->dblink = mysql_connect('mysql.officite.com', 'off_drportal',  'off_912');
            mysql_select_db('officite_sm2', $this->dblink);
        }
    }

    /**
     * Create a lead based on the class properties. If a lead already exists a history note will be created
     *
     * @param string $notes
     */
    public function track($mailTo = null, $notes = '') {
        if(isset($_GET['token'])) {
            $token = $_GET['token'];
            $result = mysql_query("SELECT * FROM account WHERE md5(concat('key58827',account.id)) = '" . $token . "'", $this->dblink);
            $element = mysql_fetch_array($result);
            if($element !== false) {
                $aid = $element['id'];
                $result2 = mysql_query("SELECT * FROM lead WHERE account_id = " . $aid .
                    " AND marketing_source_event_id = " . $this->marketSourceEventId . " AND lead_status_id NOT IN (4,5)", $this->dblink);
                $element2 = mysql_fetch_array($result2);
                if($element2 === false) {
                    $result4 = mysql_query("SELECT * FROM website WHERE account_id = " . $aid);
                    $element4 = mysql_fetch_array($result4);
                    if($element4 !== false) {
                      $this->marketId = $element4['market_id'];
                      $this->marketExpertiseId = $element4['market_expertise_id'];
                    }
                    $fn = $element['billing_first_name'];
                    $ln = $element['billing_last_name'];
                    $phone = $element['billing_phone'];
                    $email = $element['billing_email'];
                    $fax = $element['billing_fax'];
                    mysql_query("INSERT INTO lead (account_id, sales_person_id, lead_source_id, lead_status_id,
                        marketing_source_event_id, created_at, updated_at, market_id, market_expertise_id,
                        trade_show_source_id, notes, first_name, last_name, phone, email, fax, is_qualified, is_imported)
                        VALUES (" . $aid . "," . $this->salesPersonId . "," . $this->leadSourceId . "," .
                        $this->leadStatusId . "," . $this->marketSourceEventId . ",'" . date('Y-m-d H:i:s') . 
                        "','" . date('Y-m-d H:i:s') . "'," . $this->marketId . "," . $this->marketExpertiseId . "," .
                        $this->tradeShowSourceId . ",'" . $notes . "','" . $fn . "','" . $ln . "','" .
                        $phone . "','" . $email . "','" . $fax . "','" . $this->isQualified . "','No')");
                    $result3 = mysql_query("SELECT * FROM lead WHERE account_id = " . $aid .
                        " AND marketing_source_event_id = " . $this->marketSourceEventId, $this->dblink);
                    $element3 = mysql_fetch_array($result3);
                    if($element3 !== false) {
                        $lid = $element3['id'];
                        mysql_query("INSERT INTO history (author, subject, body, created_at, account_id, lead_id, type)
                            VALUES ('Landing Page','Initial Visit','Initial landing page visit " . $this->title . ", new lead created','" .
                            date('Y-m-d H:i:s') . "'," . $aid . "," . $lid . ",'Landing Page')");
                        if($mailTo != null) {
                            $subject = "Landing page visit to " . $this->title . ", from " . $fn . " " . $ln . " (" . $aid . ")";
                            $body = "Account ID: " . $aid . "\n";
                            $body .= "Lead ID: " . $lid . "\n";
                            $headers = 'From: webmail@officite.com';
                            mail($mailTo, $subject, $body, $headers);
                        }
                    }
                } else {
                    $lid = $element2['id'];
                    mysql_query("INSERT INTO history (author, subject, body, created_at, lead_id, type)
                        VALUES ('Landing Page','Return Visit','Return visit to landing page " . $this->title . "','" .
                        date('Y-m-d H:i:s') . "'," . $lid . ",'Landing Page')");
                }
            }
        }
    }
}
?>
