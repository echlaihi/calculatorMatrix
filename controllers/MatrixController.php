<?php 
class MatrixController 
{
   public function solve($operation, $matrixA_info, $matrixB_info)
   {


     //    get the operations
        switch($operation){
          
            case 'multiplication':
                $this->multiply($matrixA_info, $matrixB_info);
            break;

        }


   }


   /**
    * this function calculate the transpose for a given matrix
    * @param array  $matrix
    * @return array $matrixTr
    */
   public function transpose($matrix)
   {


     // extract the content from the matrix_info
     // $matrix = $matrix_info['matrix_content'];
     $matrix1D = array();

     // check that the matrix is 2D
     if (is_array($matrix[0])){

          // transform the 2D matrix into 1D
          for ($i=0; $i <count($matrix) ; $i++) { 
          
               for($j=0; $j < count($matrix[$i]); $j++){
                    array_push($matrix1D, $matrix[$i][$j]);
               }
     
          }

     } else {

       // if the matrix is already 1D do not do any thing
       $matrixTr = $matrix;

       // return the transpose matrix
       return $matrixTr;
          
     }


     // initialise the matrix Transpose
     $matrixTr = array();


     // transpose the matrix1D
     for($i = 0; $i < count($matrix[0]) ; $i++){
          
           for($j=$i, $k=0; $j< count($matrix1D) ; $j += count($matrix[0]), $k++){

               $matrixTr[$i][$k] = $matrix1D[$j];

          }
     }

     return $matrixTr;
     // !!!!! the matrix type is not included it would be included later


   } // end transpose function definiont
  

     protected function multiply($matrixA_info, $matrixB_info)
     {


               // get the matrixA and the matrixB content
               $matrixA = $matrixA_info['matrix_content'];
               $matrixB = $matrixB_info['matrix_content'];

               ##################################
               ### step 1: transpose matrixB ####
               ##################################
               $matrixBTr = $this->transpose($matrixB);
             

               ###########################################
               ### do the multiplication operations and ## 
               ###########################################

               $steps = array();
               $results = array();

               #################################################
               ### case 1 if matrixA is 1D and matrixB is 1D ###
               #################################################
               if(!is_array($matrixA[0]) and !is_array($matrixBTr[0])){

                    // initialise the steps and results variables
                    $step = '';
                    $results[0] = 0;
                    for($i=0; $i < count($matrixA); $i++){

                         $matrixA[$i] = (float) $matrixA[$i];
                         $matrixBTr[$i] = (float) $matrixBTr[$i];

                         $results[0] += $matrixA[$i] * $matrixBTr[$i];
                         $step       .= $matrixA[$i] . ' . ' . $matrixBTr[$i] . '  +  ';

                         if($i === count($matrixB) - 1){

                              $step = substr($step, 0, strlen($step) - 3);
                              array_push($steps, $step);

                             
                         }
                    }

                    // define the result type
                    $result_type = 'number';
               }


           

               ###################################################
               ### case 1 if matrixA is 1D and matrixBTr is 2D ###
               ###################################################
               if(!is_array($matrixA[0]) and is_array($matrixBTr[0])){

                    for($i=0; $i < count($matrixBTr); $i++){

                         $step = '';
                         $results[$i] = 0;
                         for($j=0; $j < count($matrixA); $j++){


                              $results[$i] += $matrixA[$j]*$matrixBTr[$i][$j];
                              $step        .= $matrixA[$j] . ' . ' . $matrixBTr[$i][$j] . '  +  ';

                              if($j === count($matrixA) - 1){

                                   $step = substr($step, 0, strlen($step) - 3);

                                   array_push($steps, $step);
                              }

                         }
                    }

                    // define the result type
                    $result_type = 'row';
               }
               

               #################################################
               ### case 1 if matrixA is 2D and matrixB is 1D ###
               #################################################
               if(is_array($matrixA[0]) and !is_array($matrixBTr[0])){


                    for($i=0; $i < count($matrixA); $i++){

                         $step     = '';
                         $results[$i]  = 0;
                         for($j=0; $j < count($matrixBTr); $j++){
                              
                            $results[$i] = $matrixA[$i][$j] * $matrixBTr[$j];
                            $step       .= $matrixA[$i][$j] . ' . ' . $matrixBTr[$j] . '  +  ';

                            if($j == count($matrixBTr) - 1){

                              $step = substr($step, 0, -3);
                              array_push($steps, $step);
                            }
                              
                         }
                         
                    }

                    // define the result type
                    $result_type = 'col';
               }
               

               #################################################
               ### case 4 if matrixA is 2D and matrixB is 2D ###
               #################################################
               if(is_array($matrixA[0]) and is_array($matrixBTr[0])){



                 for($i=0; $i < count($matrixA); $i++){

                    for($j=0; $j < count($matrixBTr); $j++){

                         $step = '';
                         $results[$i][$j] = 0;

                         for($k=0; $k < count($matrixA[0]); $k++){

                              $results[$i][$j] += $matrixBTr[$j][$k] * $matrixA[$i][$k];
                              $step            .= $matrixBTr[$j][$k] . ' . ' . $matrixA[$i][$k] . '  +  ';
                              
                         }

                         // record the steps
                         $step = substr($step, 0, strlen($step)-4);
                         array_push($steps, $step);

                         
                    }
                 }
     
                  // define the result type
                  $result_type = '2D';

             
               }
          

               ########################################
               ##### send the result to the browser ###
               ########################################

               $solution = [
                   'steps' => $steps,
                   'result'=> $results,
                   'result_type'=> $result_type,
               ];

               echo json_encode($solution);

                    
                    
     }// end multiplication function

}// end class defintion
