$(document).ready(function() {

    // 1- handle the rows
    const numRowsMatrixA = $('[name="matrixARows"]');

    $(numRowsMatrixA).on('keyup', function() {

        // grub the number of rows
        var numRowsMA = $(numRowsMatrixA).val();

        if (numRowsMA == 0) return;

        // grab the first row
        var rowToAdd = Array.from($('#matrixA tbody tr'))[0];


        // empty the table rows
        $('#matrixA  tbody').empty();

        var i = 0;
        while (i < numRowsMA) {

            $('#matrixA > tbody').append('<tr>' + $(rowToAdd).html() + '</tr>');
            i++;
        }

    });


    // handle the columns
    // grab the input tag 
    var columsMA = $('[name="matrixAColumns"]');
    $(columsMA).on('keyup', function() {

        // get the number of columns from the input
        numColsMA = $(columsMA).val();

        if (numColsMA == 0) return;

        // get all the rows
        var rows = Array.from($('#matrixA tr'));


        // clean all the rows
        var j = 0;
        while (j < rows.length) {
            $(rows[j]).empty();

            // print all the columns in the row again
            var k = 0;
            while (k < numColsMA) {

                $(rows[j]).append('<td><input></td>');
                k++;
            }

            j++;
        }



    });

    /***************** handle matrix B */

    // // 1- handle the rows
    const numRowsMatrixB = $('[name="matrixBRows"]');

    $(numRowsMatrixB).on('keyup', function() {

        // grub the number of rows
        var numRowsMB = $(numRowsMatrixB).val();

        if (numRowsMB == 0) return;

        // grab the first row
        var rowToAppend = Array.from($('#matrixB  tbody  tr'))[0];


        // empty the table rows
        $('#matrixB tbody').empty();

        var i = 0;
        while (i < numRowsMB) {
            $('#matrixB  tbody').append('<tr>' + $(rowToAppend).html() + '</tr>');
            i++;
        }

    });


    // handle the columns
    // grab the input tag 
    var columsMB = $('[name="matrixBColumns"]');
    $(columsMB).on('keyup', function() {

        // get the number of columns from the input
        var numColsMB = $(columsMB).val();

        if (numColsMB == 0) return;

        // get all the rows
        var rows = Array.from($('#matrixB tr'));


        // clean all the rows
        var j = 0;
        while (j < rows.length) {
            $(rows[j]).empty();

            // print all the columns in the row again
            var k = 0;
            while (k < numColsMB) {

                $(rows[j]).append('<td><input></td>');
                k++;

            }

            j++;
        }



    });


    ////////////////////// get data from matrices

    var matrixA = [];
    var matrixB = [];




    // get number of row
    $('#solve').click(function() {


        function fillArray(id) {

            var matrix = $(`#${id} tr`);

            for (let i = 0; i < matrix.length; i++) {

                matrix[i] = $(matrix[i]).find('input');

                for (let j = 0; j < matrix.length; j++) {

                    matrix[i][j] = parseFloat($(matrix[i][j]).val());

                } // end for

            } // end for

            return matrix;

        } // end function definition


        // var matrixA = fillArray('matrixA');
        // var matrixB = fillArray('matrixB');


        // var data = {
        //     operation: 'multiplication',
        //     matrixA: matrixA,
        //     matrixB: matrixB,
        // }

        // var options = {
        //     // dataType: 'json',
        //     // data: data,
        //     success: function() {
        //         console.log('success');
        //     }

        // }

        url = 'home.php';
        // send data to the server
        $.ajax('/home.php', {
            error: function() {
                console.log('there is an error');
            },
        });

    });

});