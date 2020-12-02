$(document).ready(function() {
    // grab number of columns and rows for matrix A

    var numCol = 3;
    var numRow = 4;


    // 1- handle the rows

    const numRowsMatrixA = $('[name="matrixARows"]');
    $(numRowsMatrixA).on('focusout', function() {

        // grub the number of rows
        var numRowsMA = $(numRowsMatrixA).val();


        // empty the table rows
        $('tbody').empty();

        // print the rows
        var i = 0;
        while (i < numRowsMA) {

            var rowToAdd = '<tr><td><input name=""></td> <td><input name=""></td> <td><input name=""></td></tr>';

            // insert the rows into the table body
            $('tbody').append(rowToAdd);

            i++;
        }

    });




    // grab numbers of columns and rows for matrix B
});