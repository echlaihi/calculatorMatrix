<?php 
// include the config file





// include the controllers
require '../controllers/MatrixController.php';
require '../controllers/PageController.php';

$matrixController = new MatrixController;
$pageController = new PageController('title');


// include the route file
require '../routes/main.route.php';

