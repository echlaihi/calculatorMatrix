<?php 
define('user', 'root');
define('password', 'secert');
define('email', 'root@email.com');
define('dbname', 'matrixCalculator');

// define function to handle error
function errors_handler($errno, $errstr, $errfile, $errline, $errcontext)
{

    $host = $_SERVER['HTTP_HOST'];
    
    $host =  substr($host, 0, 5);

    if ($host == 'local' or $host === '127.'){

       // we can debug
       // dispay the error message:
    //    $message = 'an Error occured in script: ' . $e_line . 'in script: '. $e_file;
    //    $message .= $e_message;
    $message = '</b><br><b>Error onccured in script:</b> ' . $errfile .'<br/>
                <b>on line: </b> ' . $errline . 
                '<br/><b>error: </b>' . $errstr . '<br/><b>in context: </b><br/>';
      echo $message;
       print_r($errcontext);
       exit();


    } else {
       echo 'an error has eccured we appologize for the unconvinience';
    }
    exit();
    
}

// set the error handler
set_error_handler('errors_handler', E_ALL);

// sdf
