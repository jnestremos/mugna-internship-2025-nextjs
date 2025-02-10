// "use server";

// import { cookies } from "next/headers";
import client from "../axios";

export const login = async (email: string, password: string) => {
	try {
		const { data } = await client.post("/login", { email, password });
		return data;
		// const cookieStore = await cookies();
		// cookieStore.set("access_token", data.access_token);
		// cookieStore.set("refresh_token", data.refresh_token);
	} catch (err) {
		console.log(err);
	}
};
