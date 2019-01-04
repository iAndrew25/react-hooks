import {useEffect, useState} from 'react';

export default (fn, {watch = []} = {}) => {
	const [data, setData] = useState();

	useEffect(async () => setData(await fn()), watch);

	return data;
};