import axios from "axios";
import { convertTokenToDays, getCookie, setCookie } from ".";

const client = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	headers: {
		"Content-Type": "application/json",
	},
});

client.interceptors.request.use(async (config) => {
	const access_token = getCookie("access_token");
	const refresh_token = getCookie("refresh_token");
	if (access_token) {
		config.headers.Authorization = `Bearer ${access_token}`;
	} else {
		const { data } = await client.post("/refresh", {
			refresh: refresh_token,
		});
		if (data.access_token) {
			setCookie(
				"access_token",
				data.access_token,
				convertTokenToDays(data.access_token)
			);
			config.headers.Authorization = `Bearer ${data.access_token}`;
		}
	}
	return config;
});

export default client;
