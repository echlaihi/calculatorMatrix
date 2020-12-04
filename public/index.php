<?php 
// include the config file
require '../config/config.php';



// include the traits
require '../traits/MatrixValidator.php';
// include the controllers
require '../controllers/MatrixController.php';
require '../controllers/PageController.php';

$matrixController = new MatrixController;
$pageController = new PageController('title');


// include the route file
require '../routes/main.route.php';

