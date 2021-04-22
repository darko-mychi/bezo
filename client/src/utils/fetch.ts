import axios from "axios";
import { toast } from "react-toastify";
import { API_URL } from "../config/constants";

const FetchErrors = {
	offline: "No network detected! This feature requires an internet connection!",
};

export const $request = (data: any) => {
	// eslint-disable-next-line no-param-reassign
	if (!data.method) data.method = "GET";

	// const authHeaders = hasAuth() ? {
	// 	Authorization: `Bearer ${getToken()}`,
	// } : null;

	const headers = {
		...data.headers || null,
		// ...authHeaders,
	};

	const request = {
		url: `${API_URL}/${data.url}`,
		method: data.method,
		data: data.params,
		headers,
		withCredentials: false,
	};

	return new Promise(async (resolve, reject) => {
		if (!window.navigator.onLine) {
			toast.error(FetchErrors.offline);

			return reject(FetchErrors.offline);
		}

		try {
			const res = await axios(request);

			if (res.data.error && res.data.error.down) {
				return reject(res.data.error.text);
			}

			return resolve(res);
		} catch (err) {
			if (err.response) {
				if (err.response.status !== 200) {
					// if (hasAuth() && err.response.status === 401) {
					// 	// window.localStorage.clear();
					// 	// window.location.reload();
					// }

					return resolve(err.response);
				}
			} else if (err.request) {
				return reject(err.request);
			} else {
				return reject(err.message);
			}

			const errors = String(err).split(" ");
			let errorString = "";

			for (let index = 0; index < errors.length; index + 1) {
				const error = errors[index];
				if (index > 0) {
					errorString = `${errorString} ${error} `;
				}
			}

			return reject(errorString);
		}
	});
}

/**
 * Make a get request
 *
 * @param {String} url The url to access
 * @param {Object} headers The request headers
 */
export const $get = (url: string, headers: any = null) => {
	return new Promise((resolve, reject) => (
		$request({
			url, headers, method: "GET",
		})
		.then(res => resolve(res))
		.catch(err => reject(err))
	));
}

/**
 * Make a post request
 *
 * @param {String} url The url to access
 * @param {Object} params The data to pass in request
 * @param {Object} headers The request headers
 */
export const $post = (url: string, params: any = null, headers: any = null) => {
	return new Promise((resolve, reject) => (
		$request({
			url, params, headers, method: "POST",
		})
		.then(res => resolve(res))
		.catch(err => reject(err))
	));
}
