import { useRef, useState } from "react";

export default function Player() {
  const [name, setName] = useState('')
  const userName = useRef();

  const handleClick = () => {
    setName(userName.current.value)
  }

  return (
    <section id="player">
      <h2>Welcome {name !== '' ? name : 'unknown entity'}</h2>
      <p>
        <input ref={userName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
