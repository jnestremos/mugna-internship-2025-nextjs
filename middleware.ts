import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import client from "./lib/axios";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const access_token = request.cookies.get("access_token");
	const refresh_token = request.cookies.get("refresh_token");

	const response = NextResponse.next();
	const AUTH_ROUTES = ["/", "/profile", "/chat"];
	const GUEST_ROUTES = ["/login", "register"];

	const isAuthRoute = AUTH_ROUTES.some(
		(route) => request.nextUrl.pathname === route
	);
	const isGuestRoute = GUEST_ROUTES.some(
		(route) => request.nextUrl.pathname === route
	);

	if (!access_token && !refresh_token) {
		return NextResponse.redirect(new URL("/login", request.url));
	} else if (!access_token && refresh_token) {
		const { data } = await client.post("/refresh", {
			refresh: refresh_token,
		});
		if (data.access_token) {
			response.cookies.set("access_token", data.access_token, {
				path: "/",
				httpOnly: true,
				secure: true,
				sameSite: "strict",
				maxAge: 60 * 60 * 24,
			});
		}
	}

	if (isAuthRoute && !access_token) {
		return NextResponse.redirect(new URL("/login", request.url));
	}

	if (isGuestRoute && access_token) {
		return NextResponse.redirect(new URL("/profile", request.url));
	}
	return NextResponse.next();
	//   return NextResponse.redirect(new URL('/home', request.url))
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: "/:path*",
};

export default middleware;
