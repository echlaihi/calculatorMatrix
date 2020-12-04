<?php 
class MatrixController 
{
   public function solve($operation, $matrixA, $matrixB)
   {


     //    get the operations
        switch($operation){
          
            case 'multiplication':
                $this->multiply($matrixA, $matrixB);
            break;

        }


   }

  

   protected function multiply($matrixA, $matrixB)
   {


          if (is_array($matrixB[0])){
               

               $matrixB1D = [];

             foreach ($matrixB as $rows) {
                  
               foreach ($rows as $element){

                    array_push($matrixB1D, $element);

               }
             }

              //    transform 1D array into 2D
             $matrixBDiag = [];
             for ($i=0; $i < count($matrixA) ; $i++) { 
                  

               $matrixBDiag[$i] = [];
               for ($j=$i; $j <count($matrixB1D) ; $j+=count($matrixB)) { 
                    
                     array_push($matrixBDiag[$i], $matrixB1D[$j]);

               }
             }
             
             
          } else {
               $matrixBDiag = $matrixB;
          }

          


             $steps = [];
             $results = [];
             
             // do the mutiplication operation
             for ($i=0; $i < count($matrixA); $i++){
                  
                  for($j=0; $j < count($matrixB); $j++){
                       

                         $step = '';

                         if(count($matrixBDiag[0]) == 1 ){

                              // $results += $M

                              

                         } else {


                              for($k=0; $k < count($matrixB[0]); $k++){
                            
                                   $matrixAD[$i][$k] = (float) $matrixA[$i][$k];
                                   $matrixBDiag[$i][$k] = (float) $matrixBDiag[$j][$k];
                                   @$results[$i][$j] += $matrixA[$i][$k] * $matrixBDiag[$j][$k];
          
                                   // print the step when solving each element
                                   @$step .=  $matrixA[$i][$k] . ' . ' . $matrixBDiag[$j][$k] . ' + ';
                                   
                                   if (count($matrixB[0]) === $k + 1){
          
                                        $step = substr($step, 0, -2);
                                        array_push($steps, $step);
                                   }
                                 
          
                              }


                         }
                      
               }
             }

        

          
          // 1 - get the dimentions of the net matrix
          $cols = count($matrixB[0]);
          $rows = count($matrixA);

          $solution = [
               'result'  => $results,
               'steps'   => $steps,
               'matrixA' => $matrixA,
               'matrixB'=> $matrixB,
          ];

          echo json_encode($solution);

          
          

          
     }// end multiplication function

}// end class defintion
