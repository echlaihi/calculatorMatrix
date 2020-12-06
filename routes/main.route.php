<?php
 #script this script is for edentifying route and bind the necessary controller for each route

 $page = isset($_GET['p']) ?  trim($_GET['p']) : '/';

 




switch ($page) {

    // pages route
    case 'description':
        $pageController->description();
    break;

    case 'solution':
    //    grab the operation
        $operation = $_GET['operation'];

    //    grab the matrices
       $matrixA_info = $_GET['matrixA_info'];
       $matrixB_info = $_GET['matrixB_info'];

       $matrixController->solve($operation, $matrixA_info, $matrixB_info); 


    break;
        
    default:
        $pageController->index();
}