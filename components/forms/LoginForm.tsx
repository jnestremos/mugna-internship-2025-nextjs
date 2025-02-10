"use client";

import { setCookie, convertTokenToDays } from "@/lib";
import { login } from "@/lib/services/auth";
import React, { useState } from "react";

const LoginForm = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { access_token, refresh_token } = await login(email, password);
		setCookie("access_token", access_token, convertTokenToDays(access_token));
		setCookie(
			"refresh_token",
			refresh_token,
			convertTokenToDays(refresh_token)
		);
	};
	return (
		<form onSubmit={handleSubmit} className="inline-flex space-y-2 flex-col">
			<input
				name="email"
				value={email}
				onChange={(e) => setEmail(e.currentTarget.value)}
				type="text"
			/>
			<input
				name="password"
				value={password}
				onChange={(e) => setPassword(e.currentTarget.value)}
				type="password"
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default LoginForm;
