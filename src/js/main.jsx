import React from 'react'
import ReactDOM from 'react-dom/client'

//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';
import SecondCounter from './components/SecondCounter';
import Clock from './components/Clock';

	const root = ReactDOM.createRoot(document.getElementById("root"));
	let seconds = 0;

	setInterval(() => {
		seconds++;
		root.render(
    <div className="container">
      <Clock />
      <SecondCounter  seconds={Math.floor((seconds % 100000) / 10000)} />
      <SecondCounter  seconds={Math.floor((seconds % 10000) / 1000)} />
      <SecondCounter  seconds={Math.floor((seconds % 1000) / 100)} />
      <SecondCounter  seconds={Math.floor((seconds % 100) / 10)} />
      <SecondCounter  seconds={Math.floor((seconds % 10) / 1)} />  
    </div>
    );
	}, 1000);