import { cert, getApps, initializeApp } from "firebase-admin/app";

export default function useFirebaseServer() {
	if (getApps().length === 0)
		return initializeApp({
			credential: cert(process.env.GOOGLE_APPLICATION_CREDENTIALS!), // path to service account credentials file
		});

	return getApps()[0];
}
