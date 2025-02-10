export const setCookie = (name: string, value: string, days: number) => {
	const expires = new Date();
	expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
	document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
};

export const convertTokenToDays = (token: string): number => {
	const decodedToken = JSON.parse(atob(token.split(".")[1]));
	const exp = decodedToken.exp;
	const now = Date.now() / 1000;
	const timeLeft = exp - now;
	const days = Math.floor(timeLeft / (60 * 60 * 24));
	return days;
};

export const getCookie = (name: string) => {
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return (parts.pop() ?? []).split(";").shift();
};
