<?php
#script this script for identifying the page controller class

class PageController
{

    private $title;
    public function __construct($title)
    {
        $this->title = $title;
    }

    public function index()
    {
        include '../views/home.view.php';
    }

    public function description()
    {
        // echo 'this is the description page';
    }
}