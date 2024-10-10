export default defineNuxtRouteMiddleware(async (to, from) => {
	if (to.meta.layout === "dashboard") {
		const user = await getCurrentUser();

		if (!user) {
			return navigateTo({
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			});
		}
	}
});
