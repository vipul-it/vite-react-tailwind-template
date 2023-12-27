import { useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-500">Vite + React + Tailwind</h1>
      <p className="read-the-docs">
        Vite and React logos to learn more
      </p>
      
    </>
  );
}

export default App;
