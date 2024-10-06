import React from "react";  

function Result({SecretNumber,number}){

    let Result=0;
    
    if(number==0){
        Result=""
        
        
    } 
    else if(number){
        if (number>SecretNumber) {
            Result='Higher';
        }
        else if(number<SecretNumber)
        {
            Result='Lower';
        }
        else if(number==SecretNumber){
            Result='Congrats !, You are Correct.'
        }
        else{
            Result='Enter Valid Input.'
        }
    }


    return<h3>Your Guess : {Result}</h3>

}

export default Result;