import { useState } from 'react';
import Header from './components/header';
import "./App.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
    <div className="gcse-search"></div>
    </div>
  )
}

export default App
