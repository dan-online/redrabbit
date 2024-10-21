import {
	GithubAuthProvider,
	GoogleAuthProvider,
	OAuthProvider,
} from "firebase/auth";
import type { FunctionalComponent } from "vue";
import MdiApple from "~icons/mdi/apple";
import MdiGithub from "~icons/mdi/github";
import MdiGoogle from "~icons/mdi/google";

export const useFirebaseAuthProviders = () => {
	const providerInstances = {
		google: new GoogleAuthProvider(),
		github: new GithubAuthProvider(),
		apple: new OAuthProvider("apple.com"),
	};

	const providers: {
		id: keyof typeof providerInstances;
		name: string;
		icon: FunctionalComponent;
	}[] = [
		{ id: "google", name: "Google", icon: MdiGoogle },
		{ id: "github", name: "GitHub", icon: MdiGithub },
		{ id: "apple", name: "Apple", icon: MdiApple },
	];

	providerInstances.google.addScope("profile");
	providerInstances.google.addScope("email");
	providerInstances.github.addScope("read:user");

	return [providers, providerInstances] as const;
};
