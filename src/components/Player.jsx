import { useState } from "react";
export default function Player({name,symbol,isActive,onChngeName}) {
    const [p_name,setP_name]=useState(name); 
    const [isEditing,setIsEditing]= useState(false)
    function handle()
    {
        setIsEditing((edit)=>!edit);
        if(isEditing){
          onChngeName(symbol,p_name);
        }

    }
    function nameHandle(e){
      setP_name(e.target.value);
    }

    let item= <span className="player-name">{p_name}</span>;
    
    if(isEditing) {
        item= <input id="hih" placeholder="Enter Your Name" required value={p_name} onChange={nameHandle} ></input>;
    }
    return (
    <li className={isActive ? 'active':''}>
      <span className="player">
        {item }
        
        <span className="player-symbol">{symbol}</span>
      </span>

      <button onClick={handle}>{isEditing ? 'Save':'Edit'}</button>
    </li>
  );
}
