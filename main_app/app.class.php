<?php 

#script 1 the main app class
class App 
{
    public $MatrixController;
    public $PageController;
    // bind into the app
    public function __construct(MatrixController $MatrixController, PageController $PageController)
    {
        $this->MatrixController = $MatrixController;
        $this->PageController = $PageController;
    }
}