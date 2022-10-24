import { useEffect } from 'react';
import './App.css';
import Palatte from './compo/Palatte';
import {init} from './socketApi'

function App() {

  useEffect(()=> {
    init()
  }, [])

  return (
    <div className="App">
     <Palatte/>
    </div>
  );
}

export default App;
