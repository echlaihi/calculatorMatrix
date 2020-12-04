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

        $('#solve').remove();

        function fillArray(id) {

            var matrix = $(`#${id} tr`);

            for (let i = 0; i < matrix.length; i++) {

                matrix[i] = Array.from($(matrix[i]).find('input'));

                for (let j = 0; j < matrix.length; j++) {

                    matrix[i][j] = parseFloat($(matrix[i][j]).val());

                } // end for

            } // end for

            return matrix;

        } // end function definition


        var matrixA = Array.from(fillArray('matrixA'));
        var matrixB = Array.from(fillArray('matrixB'));


        var data = {
            operation: 'multiplication',
            matrixA: matrixA,
            matrixB: matrixB,
        }


        url = '/index.php?p=solution';
        // send data to the server
        var request = $.ajax({
            url: url,
            data: data,
            dataType: 'json',
            type: 'get',
            error: function(jqXHR, exception) {
                console.log(jqXHR);
            }
        });


        request.done(function(response) {

            // $('#solutionScreen').show();
            console.log(response);

            var matrixA = response['matrixA'];
            var matrixB = response['matrixB'];
            var result = response['result'];
            var steps = response['steps'];





            // 1 print matrices in the solution

            function printMatrix(matrix, matrix_id, name) {

                // insert an new row
                $('#solutionScreen > div').append(`<div class="col-6 border"><table id="${matrix_id}"><tbody></tbody></table></div>`);

                for (let i = 0; i < matrix.length; i++) {
                    $(`#solutionScreen #${matrix_id}`).find('tbody').append('<tr class=""></tr>');

                }

                var rows = $(`#solutionScreen #${matrix_id} tr`);
                console.log('hello world');

                for (let j = 0; j < matrix.length; j++) {

                    // console.log(rows[j]);
                    for (let k = 0; k < matrix[0].length; k++) {

                        $(rows[j]).append(`<td class="text-center px-3">${matrix[j][k]}</td>`);
                    }
                }
            }


            // print matrixA and matrixB
            printMatrix(matrixA, 'matrixA', 'A');
            printMatrix(matrixB, 'matrixB', 'B');

            // print the matrix result dimentions
            var description = '<div class="row p-4"><b>C = A . B where C has ' + result.length + ' row(s), and ' + result[0].length + 'columns(s).</b></div>';
            $('#solutionScreen').append(description);



            // print the matrix result scheme
            $('#solutionScreen').append('<div class="row p-4" id="resultSchema"><b>C = </b></div>');
            $('#solutionScreen #resultSchema').append('<table id="matrixC" class="d-block"></table>');

            for (let i = 0; i < result.length; i++) {

                $('#solutionScreen #resultSchema #matrixC').append('<tr></tr>');
            }

            var k;

            var rows = $('#solutionScreen #resultSchema tr');

            for (let i = 0; i < result.length; i++) {

                for (let j = 0; j < result[0].length; j++, k++) {

                    $(rows[j]).append(`<td>C <span class="index">${j+1}${i+1}</span></td>`);


                }

            }


            // print the steps
            for (let i = 0, k = 0; i < result.length; i++, k++) {


                for (let j = 0; j < result[0].length; j++, k++) {

                    $('#solutionScreen').append(`<div class="row ml-5"><b>C</b><span class="index mx-1 mt-2" style="">${i+1},${j+1}</span> = ${steps[i+j]}</div>`);


                }

            } //


            // print the final result
            var row = $('#solutionScreen #resultSchema tr');
            $('#solutionScreen').append(`<div class="row ml-5 mt-5" id="finalResult"><b>The final result is: C = </b><table></table></b></div>`);

            for (let i = 0; i < result.length; i++) {

                row = $('#solutionScreen #finalResult table').append('<tr></tr>');


            } //

            for (let i = 0; i < result.length; i++) {

                let rows = $('#solutionScreen #finalResult tr');
                for (let j = 0; j < result[0].length; j++) {

                    $(rows[j]).append(`<td>${result[i][j]}</td>`);

                }

            }


        });



    });

    // $('#solutionScreen').hide();


});