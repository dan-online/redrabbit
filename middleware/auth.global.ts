import { doc, getDoc } from "firebase/firestore";

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

		const db = useFirestore(useFirebaseApp().name);
		const userDoc = await getDoc(doc(db, "users", user.uid));

		// console.log(userDoc.data());

		// if (!userDoc.exists()) {
		// 	return navigateTo({
		// 		path: "/profile/setup",
		// 		query: {
		// 			redirect: to.fullPath,
		// 		},
		// 	});
		// }
	}
});
