<?php
 #script this script is for edentifying route and bind the necessary controller for each route

 $page = isset($_GET['p']) ?  (string) trim(htmlspecialchars($_GET['p'])) : '/';
$operation = isset($_GET['operation']) ? (string) trim(htmlspecialchars($_GET['operation'])) : '';
$matrix_data  = isset($_GET['matrix_data']) ? (array) trim(htmlspecialchars($_GET['matrix_data'])) : '';

switch ($page) {

    // pages route
   
        case 'description':
           $pageController->description();
        break;

    case 'solutions':
        // get the operation
        $matrixController->solve($matrix_data, $operation);

    break;
        
    default:
        $pageController->index();
    exit;
}