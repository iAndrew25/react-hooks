import {useState} from 'react';

export default state => {
	let [value, setValue] = useState(state),
		toggle = () => value ? setValue(false) : setValue(true);

	return [value, toggle]
};