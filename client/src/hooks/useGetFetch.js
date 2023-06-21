import { useState, useEffect } from 'react';
import axios from 'axios';

const useGetFetch = (url) => {
	const [data, setData] = useState(null);
	const [isPending, setIsPending] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const source = axios.CancelToken.source();

		setTimeout(() => {
			axios.get(url, { cancelToken: source.token })
				.then(res => {
					setIsPending(false);
					setData(res.data);
					setError(null);
				})
				.catch(err => {
					if (axios.isCancel(err)) {
						console.log('Request canceled:', err.message);
					} else {
						setIsPending(false);
						setError(err.message);
					}
				});
		}, 1000);

		return () => {
			source.cancel('Component unmounted or request cancelled');
		};
	}, [url]);

	return { data, isPending, error };
};

export default useGetFetch;