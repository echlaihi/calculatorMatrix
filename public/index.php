<?php 
// include the config file





// include the controllers
require '../controllers/MatrixController.php';
require '../controllers/PageController.php';

$matrixController = new MatrixController;
$pageController = new PageController('title');


// iinclude the app file make a new app instance
require '../main_app/app.class.php';
$app = new App($matrixController, $pageController);

// include the route file
require '../routes/main.route.php';

