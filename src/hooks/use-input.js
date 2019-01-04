import {useState, useCallback} from 'react';

export default (initialState = '') => {
	let [value, setValue] = useState(initialState);

	return {
		value,
		onChange: useCallback(({target}) => setValue(target.value), [])
	}
};