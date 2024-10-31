import { useState } from "react";
import Player from "./components/PLayer";
import Log from "./components/Log";
import Gameboard from "./components/Gameboard"
import { WINING_COMBINATIONS } from "./App";
export{WINING_COMBINATIONS} from"./components/wining-combination"
import Gameover from "./components/Gameover";
const initialGameBorad=[
  [null ,null ,null],
  [null ,null ,null],
  [null ,null ,null]
];


function deriveActivePlayer(gameTurns){
  let currentPlayer='x';
      if(gameTurns.length>0&&gameTurns[0].player==='x')
      {
        currentPlayer='o';
      }
      return currentPlayer;
}
function deriveWinner(gameboard,players)
{
  let winner=null;
  for(const combination of WINING_COMBINATIONS)
  {
    const firstSquareSymbol=gameboard[combination[0].row][combination[0].col];
    const secondSquareSymbol=gameboard[combination[1].row][combination[1].col];
    const thirdSquareSymbol=gameboard[combination[2].row][combination[2].col];

    if(firstSquareSymbol && firstSquareSymbol===secondSquareSymbol && secondSquareSymbol ===thirdSquareSymbol )
    {
      winner=players[firstSquareSymbol];
    }
  }
  return winner
}
function deriveGameBoard(gameTurns)
{
  let gameboard=[...initialGameBorad.map((arr)=>[...arr])];
  for(const turn of gameTurns){
      const {square,player}=turn;
      const {row,col} =square;
      gameboard[row][col]=player;
  }
  return gameboard;
}
function App() {
  const [players,setPlayers]=useState({
    x:"player1",
    o:'player2'
  })
  const [gameTurns,setGameTurns]=useState([]);
  // const [activePlayer,setActivePlayer]=useState('x');
  const activePlayer =  deriveActivePlayer(gameTurns);

  const gameboard= deriveGameBoard(gameTurns);
  const winner = deriveWinner(gameboard,players);
  const hasDraw= (gameTurns.length===9 &&!winner)

  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((cur)=>  cur==='x' ? 'o':'x'  );
    setGameTurns(prevTurns => {
      
      const currentPlayer =  deriveActivePlayer(prevTurns);
      const updatedTurns=[
        {square : {row: rowIndex , col: colIndex} , player: currentPlayer }
        ,...prevTurns
      ]
      console.log(updatedTurns);
      return updatedTurns;
    })


  }
  function reset(){
    setGameTurns([]);
    console.log(winner)
  }

  function handlePlayerNameChanged(symbol,newName){
    console.log(symbol + newName)
    setPlayers(prev => {
      return{
        ...prev,
        [symbol]:newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player1" symbol="x" isActive={activePlayer==='x' ? true:false} onChngeName={handlePlayerNameChanged}/>
          <Player name="Player2" symbol="o" isActive={activePlayer==='o' ? true:false} onChngeName={handlePlayerNameChanged}/>
        </ol>
        {(winner || hasDraw)&& <Gameover winner={winner}  onSelect={reset}/>}
        <Gameboard onSelectSquare={handleSelectSquare} 
        board={gameboard}/>
      </div>
      <Log turns={gameTurns} names={players}/>
    </main>
  );
}

export default App;
