export default function Log({turns,names})
{

    return (
        <ol id="log">
            {turns.map((turn)=> <li key={`${turn.square.row} ${turn.square.col}`}>
                {names[turn.player]} select {turn.square.row} {turn.square.col}
                </li>   )}
        </ol>
    )
}