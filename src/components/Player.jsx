import React, { useState } from 'react'

function Player({name, symbol, isActive}) {
    const [isEditable, setisEditable] = useState(false);
    const [username, setUserName] = useState(name);
    return (
        <>
        
                <li className={isActive ? 'active' : undefined}>
                 <span className='player'>
                    { isEditable ? <input value={username} onChange={ (e) => setUserName(e.target.value)}/> : <span className='player-name'>{username}</span> }
                    </span>   
                      <span className='player-symbol'>{symbol}</span>
                      <button onClick={() => setisEditable(!isEditable)}> { isEditable ? 'Save' : 'Edit' }</button>
                </li>
            </>
    );
}

export default Player
