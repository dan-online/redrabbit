import { doc } from "firebase/firestore";

export default defineNuxtRouteMiddleware(async (to, from) => {
	if (
		["dashboard"].includes((to.meta.layout as string | undefined) || "default")
	) {
		const user = await getCurrentUser();

		if (!user) {
			return navigateTo({
				path: "/login",
				query: {
					redirect: to.fullPath,
				},
			});
		}

		const db = useFirestore();

		// get user from firebase
		const userDoc = useDocument(doc(db, "users", user.uid));

		await userDoc.promise.value;

		console.log(userDoc.data.value);
	}
});
