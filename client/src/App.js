import { useEffect, useState } from 'react';
import './App.css';
import Palatte from './compo/Palatte';
import {init, subscribe} from './socketApi'

function App() {
	const [activeColor, setActiveColor] = useState("#282c34");

	useEffect(() => {
		init();

		subscribe((color) => {
			setActiveColor(color);
		});
	}, []);

  return (
    <div className="flex justify-center h-screen items-center" style={{ backgroundColor: activeColor }}>
     <Palatte activeColor={activeColor} />
    </div>
  );
}

export default App;
