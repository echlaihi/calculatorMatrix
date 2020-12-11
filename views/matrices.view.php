<!-- matrix A ========================== -->
<div class="card p-0 m-0">
    <div class="card-header bg-info text-light">
        <h4 class="card-title ">Matrix A : </h4>

        <form class="form-inline">
            <fieldset class="form-group mx-auto">
                <label for="" class="mx-2">select dimentions : </label>
                rows: <input type="number" name="matrixARows"  value="4" class="w-25 mr-2">
               columns:  <input type="number" name="matrixAColumns"  value="3" class="w-25">
            </fieldset>

        </form>

    </div>

    <div class="card-body">


    <table class="matrix mx-auto" id="matrixA">

            <tbody>
                    <tr>
                        <td><input name=""></td>
                        <td><input name=""></td>
                        <td><input name=""></td>
                        
                    </tr>
                    <tr>
                        
                        <td><input name=""></td>
                        <td><input name=""></td>
                        <td><input name=""></td>
                    </tr>   
                    <tr>
                        
                        <td><input name=""></td>
                        <td><input name=""></td>
                        <td><input name=""></td>
                    </tr>           
                    <tr>
                        
                        <td><input name=""></td>
                        <td><input name=""></td>
                        <td><input name=""></td>
                    </tr>   
            </tbody>
    </table>


    </div>
</div>
  <!-- end matrix A=============================== -->


            

<!-- matrix B =================== -->
<div class="card p-0 m-0 mt-4">
    <div class="card-header bg-info text-light">
        <h4 class="card-title ">Matrix B : </h4>

        <form class="form-inline">
            <fieldset class="form-group mx-auto">
                <label for="" class="mx-2">select dimentions : </label>
                Rows: <input type="number" name="matrixBRows" value="4" class="w-25 mr-2">
                Columns: <input type="number" name="matrixBColumns" value="3" class="w-25">
            </fieldset>

        </form>

    </div>

    <div class="card-body">


    <table class="matrix mx-auto" id="matrixB">

            <tbody>
                    <tr>
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                        
                    </tr>
                    <tr>
                        
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                    </tr>                        <tr>
                        
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                    </tr>                        <tr>
                        
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                        <td><input type="text" name=""></td>
                    </tr>   
            </tbody>
    </table>


    </div>
</div><!-- end matrix B=============================== -->

<div class="col-12 my-3 d-flex justify-content-center">
    <button class="btn btn-info px-5" id="solve">Solve</button>
</div>