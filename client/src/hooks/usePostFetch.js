import { useState, useEffect } from 'react';
import axios from 'axios';

const usePostFetch = () => {
	const [input, setInput] = useState({
		data: null,
		url: null,
		callback: null,
	});

	useEffect(() => {
		const source = axios.CancelToken.source();

		const postData = async () => {
			try {
				const response = await axios.post(input.url, input.data, {
					cancelToken: source.token,
				});
				const responseData = response.data;

				input.callback(responseData);
			} catch (err) {
				if (axios.isCancel(err)) {
					console.log('Request cancelled:', err.message);
				} else {
					console.error(err);
				}
			}
		};

		if (input.data && input.url && input.callback) {
			postData();
		} else {
			console.log('Invalid arguments provided to post method');
		}

		return () => {
			source.cancel('Component unmounted or request cancelled');
		};
	}, [input]);

	const post = (url, data, callback) => {
		setInput({ url, data, callback });
	};

	return post;
};

export default usePostFetch;
