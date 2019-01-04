import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

import useAsync from './hooks/use-async';
import useToggle from './hooks/use-toggle';

let getData = () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json());

const App = () => {
	let [value, toggle] = useToggle()
	let result = useAsync(getData, {watch: [value]});

	return (
		<div className="app">
			<button onClick={toggle}>Click</button>
			<p>I am {value ? 'on' : 'off'}.</p>
			<p>Random title: {result ? result.title : '[fetching_data]'}</p>
		</div>
	);
};

ReactDOM.render(<App />, document.getElementById('root'));

