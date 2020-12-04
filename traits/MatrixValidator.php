<?php 
trait MatrixValidator
{
    public function canMuliply($matrixA, $matrixB)
    {
        if (count($matrixA) !== count($matrixB[0])){

            return false;
        } else {
            return true;
        }

    }
}