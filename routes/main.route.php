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
       $matrixA = $_GET['matrixA'];
       $matrixB = $_GET['matrixB'];
       $matrixController->solve($operation, $matrixA, $matrixB); 


    break;
        
    default:
        $pageController->index();
}