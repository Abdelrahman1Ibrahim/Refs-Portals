import {useState , useRef} from 'react'
 



export default function Player() {
  const [playerName , setPlayerName] = useState("") ;
  const inputRef = useRef() ;
  function handelClick(){
    setPlayerName(inputRef.current.value) ;
    inputRef.current.value = "" ;
  }
  return (
    <section id="player">
      <h2>Welcome {playerName == "" ? "unknown entity" : playerName }</h2>
      <p>
        <input type="text" ref={inputRef}/>
        <button onClick={handelClick}>Set Name</button>
      </p>
    </section>
  );
}
