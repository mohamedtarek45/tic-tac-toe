import {useState} from "react";

export default function Gameboard({onSelectSquare,board}){

    // const [gameboard,setGameboard]=useState(initialGameBorad);
    // function handleSelectSquare(rowIndex,colIndex,symbol){
    //     console.log("h");
    //     setGameboard((previous)=>{
    //         const updated=[...previous.map(rowd=>[...rowd])]
    //         updated[rowIndex][colIndex]=activePlayerSymbol;
    //         return updated;
    //     })
    //     onSelectSquare();
    // }
    return(
        <ol id="game-board">
            {board.map((row,rowIndex) => ( 
                <li key = {rowIndex}> 
                    <ol>
                    {row.map((col,colIndex)=>(
                       <li key={colIndex}>
                            <button onClick={()=>onSelectSquare(rowIndex,colIndex)}
                                disabled={col===null ? false:true}>{col}</button>
                       </li> 
                    ))}
                    </ol>
                </li>
            ))}     
        </ol>
    )
}