export default function Gameover({winner,onSelect})
{
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} is Win!</p>}
            {!winner && <p>It's Draw</p>}
            <p><button onClick={onSelect}>Restart</button></p>
        </div>
    )
}