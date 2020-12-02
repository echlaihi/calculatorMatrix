$(document).ready(function() {

    // 1- handle the rows
    const numRowsMatrixA = $('[name="matrixARows"]');

    $(numRowsMatrixA).on('keyup', function() {

        // grub the number of rows
        var numRowsMA = $(numRowsMatrixA).val();

        console.log(numRowsMA);
        if (numRowsMA == 0) return;

        // grab the first row
        var rowToAdd = Array.from($('#matrixA tbody tr'))[0];


        console.log($(rowToAdd).html());
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

        console.log(rows);

        // clean all the rows
        var j = 0;
        while (j < rows.length) {
            $(rows[j]).empty();

            console.log('hello world');
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
            console.log(i);
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

        console.log(rows);

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



});