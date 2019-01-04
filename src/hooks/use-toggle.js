import {useState} from 'react';

export default (initialState = false) => {
	let [value, setValue] = useState(initialState),
		toggle = () => value ? setValue(false) : setValue(true);

	return [value, toggle]
};