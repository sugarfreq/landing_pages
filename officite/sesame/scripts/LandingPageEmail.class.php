<?php

/*
 * This class is meant to be used with a landing page. It will use 
 * and open the template in the editor.
 */

/**
 * This class is meant to be used with a landing page. It will mail account
 * information to a comma delimited list of email addresses of anyoe landing with 
 * an entry in the Prospect table and an account in SiteManager.
 *
 * @author bcorrie
 * @version 1.0 12/05/2011
 * 
 */
class LandingPageEmail
{

    private $dblink;

    /**
     * This is the constructor. It handles creating the DB connection.
     * 
     * @author bcorrie
     * @since Version 1.0
     */
    public function __construct()
    {
        $this->dblink = mysql_connect('mysql.officite.com', 'off_drportal', 'off_912');
        mysql_select_db('officite_sm2', $this->dblink);
    }

    /**
     * The destructor cloases the db connection.
     * 
     * @author bcorrie
     * @since Version 1.0
     * 
     */
    function __destruct()
    {
        mysql_close($this->dblink);
    }

    /**
     * This method handles querying the DB and sending the result via email to a
     * list of emails that are passed in.
     * 
     * @param $token This is the url variable corresponding to the username in the prospect table.
     * @param $mailTo Comma delimited list of email addresses to mail the notification to.
     * @param $title The title of the landing page as it will be displayed in the notification email.
     * 
     * @author bcorrie
     * @since Version 1.0
     * 
     */
    public function notifyByEmail($token, $mailTo, $title)
    {
        $customerEmail = '';
        $customerPhone = '';
        $customerFirstName = '';
        $customerLastName = '';
        $customerAccountId = '';

        if (isset($token))
        {
            $result = mysql_query("SELECT * FROM prospect WHERE user_name = '" . $token . "'", $this->dblink);
            $element = mysql_fetch_array($result);
            if ($element !== false)
            {
                $aid = $element['account_id'];
                $result2 = mysql_query("SELECT a.id,a.billing_email,a.billing_phone,a.billing_first_name,a.billing_last_name FROM account a 
                    left join sales_person sp on a.sales_person_id=sp.id
                    WHERE a.id = " . $aid, $this->dblink);
                $element2 = mysql_fetch_array($result2);

                if ($element2 !== false)
                {
                    $customerEmail = $element2['billing_email'];
                    $customerPhone = $element2['billing_phone'];
                    $customerFirstName = $element2['billing_first_name'];
                    $customerLastName = $element2['billing_last_name'];
                    $customerAccountId = $element2['id'];
                } else
                {
                    error_log("LandingPageEmail::notifyByEmail - Unable to retrive the account information.", 0);
                    return FALSE;
                }

                $subject = "Landing Page : " . $title . " visit from " . $customerFirstName . " " . $customerLastName . " (a" . $customerAccountId . ")";
                $body = "Account ID: " . $customerAccountId . "\n";
                $body .= "This is a message from the Landing Page System, landing page title: $title. " . $customerFirstName . " " . $customerLastName . " just visited our landing page.\nPhone: ". $customerPhone .
                        "\nEmail: " . $customerEmail . "\nThis customer should already exist in our system. If they do not please contact the IT department.\n";
                $headers = 'From: webmail@officite.com';
                mail($mailTo, $subject, $body, $headers);
            } else
            {
                error_log("LandingPageEmail::notifyByEmail - SQL select for account information failed.", 0);
                return FALSE;
            }
        } else
        {
            error_log("LandingPageEmail::notifyByEmail - Token was missing on the Landing Page.", 0);
            return FALSE;
        }

        return true;
    }

}

?>
