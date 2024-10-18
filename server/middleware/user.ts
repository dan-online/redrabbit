import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { ensureAdminApp } from "vuefire/server";

export default defineEventHandler(async (event) => {
	if (event.path.startsWith("/api") && event.path !== "/api/__session") {
		const runtimeConfig = useRuntimeConfig();
		const token = getCookie(event, "__session");

		if (!token) {
			setResponseStatus(event, 403);

			return {
				error: "no token",
			};
		}

		const adminApp = ensureAdminApp(
			{
				projectId: runtimeConfig.public.vuefire!.config!.projectId,
			},
			"session-verification",
		);
		const adminAuth = getAdminAuth(adminApp);

		try {
			const verifiedIdToken = await adminAuth.verifySessionCookie(token, true);

			event.context.firebaseUser = verifiedIdToken;
			event.context.adminApp = adminApp;
			event.context.adminAuth = adminAuth;
		} catch {
			setResponseStatus(event, 403);

			return {
				error: "invalid token",
			};
		}
	}
});
