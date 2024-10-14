import { getAuth as getAdminAuth } from "firebase-admin/auth";
import { ensureAdminApp } from "vuefire/server";

export default defineEventHandler(async (event) => {
	const runtimeConfig = useRuntimeConfig();
	// assertMethod(event, "POST");

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

	const verifiedIdToken = await adminAuth.verifySessionCookie(token, true);

	return {
		verifiedIdToken,
	};
});
