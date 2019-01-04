import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import useAsync from './hooks/use-async';
import useToggle from './hooks/use-toggle';
import useInput from './hooks/use-input';

let getData = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

const App = () => {
	let testingFn = () => console.log("emailInput", emailInput),
		[value, toggle] = useToggle(),
		result = useAsync(getData, {watch: [value]}),
		emailInput = useInput();

	return (
		<div className="app">
			<button onClick={toggle}>Click</button>
			<p>I am {value ? 'on' : 'off'}.</p>
			<p>Random title: {result ? result.title : '[fetching_data]'}</p>
			<label htmlFor="use-input">Look, a label:</label>
			<input type="text" id="use-input" {...emailInput} placeholder="Email..." />
			<p><button onClick={testingFn}>Testing</button></p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

