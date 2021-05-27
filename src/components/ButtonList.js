import React from 'react';

const ButtonList = ({setCarregando, setList, url, text}) => {
    
    async function handleClick(){
    
        setCarregando(true);

        // const response = await fetch(url);
        // const json = await response.json();

        setList(url);

        setCarregando(false);

      }


    return <button onClick={handleClick} className="margin">{text}</button>

}

export default ButtonList;