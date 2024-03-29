$(document).ready(function() {

    // hide the solution section untill the user hits solve
    $('#solution').hide();

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




    $('#solve').click(function() {

        // delete all the previous data in the solution sccreen
        $('#solutionScreen').empty();

        // put the row back
        $('#solutionScreen').append('<div class="row"></div>');
        // $

        function fillArray(id) {

            var matrix;
            var matrix = Array.from($(`#${id} tr`));

            var matrix_type; // this variable would define if the matrix is row or column or 2D


            // if there are many rows the loop through every row and grab the inputs value
            for (let i = 0; i < matrix.length; i++) {



                matrix[i] = Array.from($(matrix[i]).find('input'));

                // intialise the matrix_info object
                matrix_info = {};

                // if the matrix is 2D loop through all the rows
                for (let j = 0; j < matrix[i].length; j++) {

                    matrix[i][j] = parseFloat($(matrix[i][j]).val());

                } // end for

            } // end for

            matrix_info = {
                'matrix_type': '2D',
                'matrix_content': matrix,
            }

            // handle the matrix if it is 1D (one row)
            if (matrix.length === 1) {

                var matrix1Row = matrix;
                matrix = [];

                for (var i = 0; i < matrix1Row[0].length; i++) {

                    matrix[i] = matrix1Row[0][i];



                }

                var matrix_info = {
                    'matrix_type': 'row',
                    'matrix_content': matrix,
                };

                return matrix_info;

            }

            // handle the matrix if it is 1D (one column)
            if (matrix[0].length === 1) {

                var matrix1Col = matrix;
                matrix = [];

                for (var i = 0; i < matrix1Col.length; i++) {

                    matrix[i] = matrix1Col[i][0];
                }

                // 
                var matrix_info = {
                    'matrix_type': 'col',
                    'matrix_content': matrix,
                };

                return matrix_info;
            }

            return matrix_info;

        } // end function definition



        var matrixA_info = fillArray('matrixA');
        var matrixB_info = fillArray('matrixB');

        console.log(matrixA_info);
        console.log(matrixB_info);

        var data = {
            operation: 'multiplication',
            matrixA_info: matrixA_info,
            matrixB_info: matrixB_info,
        }


        var url = '/index.php?p=solution';
        // send data to the server
        var request = $.ajax({
            url: url,
            data: data,
            dataType: 'json',
            type: 'get',
            error: function(jqXHR, exception) {
                console.log('there is an error');
                console.log(jqXHR);
            }
        });

        // stop the script to test
        request.done(function(response) {


            // var data = JSON.parse(response);

            // display the solution screen
            $('#solution').show();

            // define a printMatrix array 
            /**
             * 
             * @param {array} matrix  it define the matrix to print
             * @param {string} matrix_id  the name matrix string to pring
             * @param {string} type  the type of the matrix [row, col, 2D, number]
             * @param {boolean} is_schema define if the matrix result is a schema of not
             */
            function printMatrix(matrix, matrix_id, type, is_schema) {

                var place = $(`#solutionScreen #${matrix_id}`);

                switch (type) {
                    case 'col':

                        // print all the rows
                        for (var i = 0; i < matrix.length; i++) {

                            $(place).append('<tr></tr>');

                        }

                        // grab all the rows
                        var rows = $(place).find('tr');

                        // print the columns in each row
                        for (var i = 0; i < rows.length; i++) {

                            // check if the matrix is the schema
                            if (is_schema) {

                                $(rows[i]).append(`<td>C<span class="index">${i}</span></td>`);

                            } else {
                                $(rows[i]).append(`<td>${matrix[i]}</td>`);
                            }
                        }

                        break;


                    case 'row':

                        // append the row to the screen
                        $(place).append('<tr></tr>');

                        console.log('this is a row');
                        for (var i = 0; i < matrix.length; i++) {

                            // check if the matrix is the schema matrix
                            if (is_schema) {

                                $(place).append(`<td>C<span class="index">${i}</span></td>`);

                            } else {

                                $(place).append(`<td>${matrix[i]}</td>`);

                            }
                        }

                        break;


                    case 'number':

                        // print the number 
                        console.log('the case is a number');
                        break;

                    case '2D':

                        // print this if the matrix is 2D
                        for (var i = 0; i < matrix.length; i++) {

                            $(place).append('<tr></tr>');
                        }

                        // grab the rows
                        var rows = $(place).find('tr');

                        // insert column
                        for (var i = 0; i < matrix.length; i++) {

                            for (var j = 0; j < matrix[0].length; j++) {

                                if (is_schema) {

                                    $(rows[i]).append(`<td>C<span class="index">${i}, ${j}</span></td>`);

                                } else {

                                    $(rows[i]).append(`<td>${matrix[i][j]}</td>`);

                                }
                            }
                        }

                        break;


                } // end switch


            } // end printMatrix function defintion



            // grab the result data from the response
            var result = response['result'];
            var result_type = response['result_type'];
            var steps = response['steps'];
            var l = steps.length;


            $('#solutionScreen').append('<div class="row"><b>A = </b><table class="" id="matrixAResult"></table></div>');
            $('#solutionScreen').append('<div class="row"><b>B = </b><table class="" id="matrixBResult"></table></div>');

            // print the matrixA 
            printMatrix(matrixA_info['matrix_content'], 'matrixAResult', matrixA_info['matrix_type'], false);

            // print the matrixB
            printMatrix(matrixB_info['matrix_content'], 'matrixBResult', matrixB_info['matrix_type'], false);
            // print the description of the solution, schema and final result
            switch (result_type) {
                case 'number':

                    // print the description message  
                    $('#solutionScreen').append(`<div class="row"> the result C is a number: </div>`);

                    // print the schema
                    $('#solutionScreen').append(`<div class="row">C</div>`);

                    // print the final result
                    $('#solutionScreen').append(`<div class="row">${result}</div>`);
                    break;

                case 'row':

                    // print the message description 
                    $('#solutionScreen').append(`<div class="row">the result is a matrix <b class="mx-1"> C </b> row with ${(result).length}</div>`);

                    // print the matrix schema
                    $('#solutionScreen').append('<div class="row"><table id="schema"><tr></tr></table></div>');
                    for (var i = 0; i < result.length; i++) {

                        // console.log(result.length);
                        $('#solutionScreen  #schema tr').append(`<td>C<span class="index">${i+1}</span></td>`);

                    }

                    // print the steps:
                    for (var i = 0; i < steps.length; i++) {
                        $('#solutionScreen').append(`<div class="row steps"><b>C<span class="index mr-1">${i+1}</span></b>= ${steps[i]}</div>`);


                    }
                    // print the final result 
                    $('#solutionScreen').append('<div class="row"><table id="finalResult"><b class="mx-1">C = </b><tr></tr></table></div>');

                    for (var i = 0; i < result.length; i++) {

                        $('#solutionScreen div #finalResult tbody tr').append(`<td>${result[i]}</td>`);

                    }


                    break;

                case 'col':

                    // print the decription message
                    $('#solutionScreen').append(`<div class="row">the result is a matrix <b class="mx-1"> C </b> with  with ${result.length}</div>`);

                    // print the schema
                    $('#solutionScreen').append('<div class="row"><b>C = </b><table id="schema"></table></div>');
                    for (var i = 0; i < result.length; i++) {

                        $('#solutionScreen #schema').append('<tr></tr>');

                    }

                    // grab all the rows
                    var rows = $('#solutionScreen #schema tr');

                    for (i = 0; i < rows.length; i++) {


                        // for (var j = 0; j < result.length; j++) {

                        $(rows[i]).append(`<td>C<span class="index">${i+1}</span></td>`);
                        // }
                    }

                    // print the steps
                    for (var i = 0; i < steps.length; i++) {
                        $('#solutionScreen').append(`<div class="row steps"><b>C<span class="index mr-1">${i+1}</span></b> = ${steps[i]}</div>`);


                    }

                    // print the final result

                    $('#solutionScreen').append('<div class="row"><table id="finalResult"><b class="mx-1">C = </b></table></div>')

                    for (var i = 0; i < result.length; i++) {

                        $('#solutionScreen #finalResult').append('<tr></tr>');

                    }
                    // grab all the rows
                    var rows = $('#solutionScreen #finalResult').find('tr');

                    for (var j = 0; j < result.length; j++) {
                        $(rows[j]).append(`<td>${result[j]}<td>`);
                    }
                    break;

                case '2D':

                    // print the description message
                    $('#solutionScreen').append(`<div class="row">the result is a matrix <b class="mx-1">C</b> with ${result.length} rows, and ${result[0].length} columns </div>`);

                    // print the schema
                    $('#solutionScreen').append('<div class="row"><b>C = </b><table id="schema"></table></div>');
                    for (var i = 0; i < result.length; i++) {

                        $('#solutionScreen #schema').append('<tr></tr>');

                    }

                    // grab all the rows
                    var rows = $('#solutionScreen #schema tr');

                    for (var i = 0; i < result.length; i++) {


                        for (var j = 0; j < result[0].length; j++) {
                            $(rows[i]).append(`<td>C<span class="index">${i+1}${j+1}</span></td>`);
                        }
                    }

                    // print the steps
                    for (var i = 0; i < result.length; i++) {

                        for (var j = 0; j < result[0].length; j++) {

                            $('#solutionScreen').append(`<div class="row steps"><b>C<span class="index mr-1">${i+1}${j+1} </span></b>= ${steps[i+j]}</div>`);

                        }

                    }

                    // print the final result
                    $('#solutionScreen').append("<div class='row'><table id='finalResult'><b class'mx-1'>C = </b></table></div>");


                    for (var i = 0; i < result.length; i++) {


                        $('#solutionScreen div #finalResult').append('<tr></tr>');
                    }
                    // grab all the rows
                    var rows = $('#solutionScreen #finalResult').find('tr');

                    for (var i = 0; i < result.length; i++) {
                        for (j = 0; j < result[0].length; j++) {
                            $(rows[i]).append(`<td>${result[i][j]}</td>`);
                        }
                    }
                    break;
            } // end switch



            // add prenthesis for each matrix
            var matrices = $('#solutionScreen table');
            var length = matrices.length;
            var height = $(matrices[0]).find('td').height();

            for (var i = 0; i < length; i++) {

                // get how man rows we have
                let rowsNum = $(matrices[i]).find('tr').length;
                let tableHeight = $(matrices[i]).height();
                let numScales = tableHeight / 16;
                console.log(tableHeight);

                // console.log(rowsNum);

                // add parenthesis
                $(matrices[i]).before(`<b class="parenthesis" style="transform-origin: top; margin-right: .3rem; transform: translateY(${-tableHeight/2.4}px)  scaleX(1.8) scaleY(${numScales+1})">[</b>`);
                $(matrices[i]).after(`<b class="parenthesis" style="transform-origin: top; margin-left: .3rem; transform: translateY(${-tableHeight/2.4}px)  scaleX(1.8) scaleY(${numScales+1})">]</b>`);


            }


        }); // end request.done funtion

    }); // end solve.click funcion

}); // end document.ready() function