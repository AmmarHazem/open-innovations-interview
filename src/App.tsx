import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount((val) => val + 1)}>{count}</button>;
}

export default App;
