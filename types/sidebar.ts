import type { Component } from "vue";

export interface NavItem {
	label: string;
	icon: Component;
	selectedIcon: Component;
	to: string;
}
