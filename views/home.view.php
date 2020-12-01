<?php include '../views/header.view.php'; ?>

<main class="container-fluid">

    <div class="row">
        <!-- selection operation==================================================================== -->
                <?php require '../views/selectOperation.view.php'; ?>
        <!-- end selection operation==================================================================== -->

    </div>   

    <div class="row">
            <!-- ============================================ matrix section =================================================================== -->
            <div class="col-lg-8 border">
                <?php require '../views/matrices.view.php'; ?>
            </div>
            <!-- end matrix section============================================================================================================= -->


            <!-- adds section ================================================================================================================== -->
            <div class="col-lg-4">
                <?php require '../views/add.view.php'; ?>
            </div>
            <!-- end adds section =============================================================================================================== -->

    </div>
</main>

<?php include '../views/footer.view.php'; ?>