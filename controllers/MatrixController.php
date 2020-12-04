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

        // render an error if multiplication cannot be done
     //    if (!$this->canMuliply()){
     //        return 'error';
     //    }

          // diapgonolize the matriceA if it is 2d 

         
          echo 'the origin is ';
          print_r($matrixA);
         
          //////////////////  transfrom matrix A into 1D

          if (is_array($matrixA[0])){
               

               $i = 0;
               $j = 0;
              
               $matrixA1D = [];

             foreach ($matrixA as $rows) {
                  
               foreach ($rows as $element){

                    array_push($matrixA1D, $element);

               }
             }
          
             // transform 1D array into 2D
             $matrixADiag = [];
             for ($i=0; $i < count($matrixA) ; $i++) { 
                  

               $matrixADiag[$i] = [];
               for ($j=$i; $j <count($matrixA1D) ; $j+=count($matrixA)) { 
                    
                     array_push($matrixADiag[$i], $matrixA1D[$j]);

               }
             }
             $results = [];

             // do the mutiplication operation
             for ($i=0; $i < count($matrixADiag); $i++){

               for($j=0; $j < count($matrixB); $j++){

                    for($k=0; $k < count($matrixB[0]); $k++){

                         $matrixADiag[$i][$k] = (float) $matrixADiag[$i][$k];
                         $matrixB[$i][$k] = (float) $matrixB[$j][$k];
                         $results[$i][$j] += $matrixADiag[$i][$k]*$matrixB[$j][$k];
                         

                    }
               }
             }

             echo 'the result is: ';
             print_r($results);


          

          //    for($i=0, $j=0; $i < count($matrixA1D); $i++, $j+=count()){
               
               // echo $matrixA1D[$j];
               // echo 'hello world';

          //    }
          
               

             

              
               
               // // convert matrixA into a string
               // $matrixAElement = '';
               //  foreach ($matrixA as $row){
               //       foreach ($row as $e){

               //           $matrixAElement .= (string) ' '. $e;
               //       }
               //  }

               //  // convert the string into 1D array
               //  $matrixAElement = explode(' ', $matrixAElement);

               //  // remove the first item
               //  $matrixAElement = array_slice($matrixAElement, 1, count($matrixAElement) - 1);


          }// end coversion 

          //




          // 1 - get the dimentions of the net matrix
          $cols = count($matrixB[0]);
          $rows = count($matrixA);

          // 2- 

          
     }// end multiplication function

}// end class defintion
