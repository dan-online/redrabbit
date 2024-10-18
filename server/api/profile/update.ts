export default defineEventHandler(async (event) => {
	// assertMethod(event, "POST");

	return {
		user: event.context.firebaseUser,
	};
});
