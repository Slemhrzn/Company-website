import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Homepage from './Homepage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Navbar is rendered directly */}
      <Navbar />
      <Homepage/>
    </div>
  );
}

export default App;
