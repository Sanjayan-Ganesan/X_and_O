import React, { useState } from 'react'
import './TicTacToe.css';
const TicTacToe = () => {

  const[turn,setTurn] = useState(`X`);
  const[cell,setCells] = useState(Array(9).fill(''));
const[winner,setWinner] = useState();
  const winners = (square)=>{
const combos = {
  across:[
    [0,1,2],
    [3,4,5],
    [6,7,8],
  ],
  down:[
    [0,3,6],
    [1,4,7],
    [2,5,8],
  ],
  diagnal:[
    [0,4,8],
    [2,4,6],
  ],
};


for( let combo in combos ){
  combos[combo].forEach((pattern) => {
if(
  square[pattern[0]] === '' ||
  square[pattern[1]] === '' ||
  square[pattern[2]] === ''
) {

}else if (
  square[pattern[0]] === square[pattern[1]]  && square[pattern[1]] === square[pattern[2]]
){
setWinner(square[pattern[0]]);
}

  });
}



  };



  const handleClick = (num)=>{
if(cell[num] != ``){
  alert(`Already Clicked`);
  return;
}

    let square = [...cell];
    if(turn == `X`){
      square[num] = `X` ;
      setTurn(`O`);
    }else{
      square[num] = `O` ;
      setTurn(`X`);
    }
    winners(square);
    setCells(square);
    //console.log(square);
  
  }


  const handleRestart = () => {
    setWinner(null);
    setCells(Array(9).fill(''));

  }
  const Cell = ({num})=>{
    return (
      <td onClick={()=>handleClick(num)}>{cell[num]}</td>
    )
  }
  return (
    <div id='wrapper'>
    <table>
      <h2>Turn:{turn}</h2>
      <tbody>
        <tr>
          <Cell num={0}/>
          <Cell num={1}/>
          <Cell num={2}/>
        </tr>
        <tr>
          <Cell num={3}/>
          <Cell num={4}/>
          <Cell num={5}/>
        </tr>
        <tr>
          <Cell num={6}/>
          <Cell num={7}/>
          <Cell num={8}/>
        </tr>
      </tbody>
    </table>
    {winner && (
      <>
      <h3 >{winner} is the winner</h3>
      <button onClick={()=>handleRestart()}>Play Again</button>
      </>
    )
    }
    </div>
  )
}

export default TicTacToe