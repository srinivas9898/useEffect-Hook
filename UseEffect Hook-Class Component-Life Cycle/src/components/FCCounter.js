import React, { useEffect } from 'react'
import { useState } from 'react'

function FCCounter() {

     let [score,setScore] = useState(0);
     
     let [age,setAge] = useState(0);

     useEffect(()=>{
        console.log("FCCounter - loaded");
     },[]);

     useEffect(()=>{

        console.log("Score SV Changed");

     },[score]);

     useEffect(()=>{
        console.log(`Age SV Changed`);
     },[age]);

     useEffect(()=>{
        console.log(`Score or Age SV Changed`);
     },[score,age]);

     useEffect(()=>{
        console.log(`Any SV Changed`);
     });

     useEffect(()=>{

        return()=>{
            console.log("FCCounter - will unloded");
        }
     },[]);


  return (
    <div className="score">
        <h1>FC Counter</h1>
        <h1> Score:{score}</h1>
        <button onClick={()=>{
            setScore(score+1);
        }}>Increment Score</button>
        <button onClick={()=>{
            setScore(score-1);
        }}>Decrement Score</button>

<h1>Age:{age}</h1>
        <button onClick={()=>{
            setAge(age+1);
        }}>Increment Age</button>
        <button onClick={()=>{
            setAge(age-1);
        }}>Decrement Age</button>
    </div>
  )
}

export default FCCounter