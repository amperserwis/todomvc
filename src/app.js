import "../node_modules/todomvc-common/base.css";
import "../node_modules/todomvc-app-css/index.css";
import "../node_modules/todomvc-common/base.js";

import Controller from "./controller";
import { $on } from "./helpers";
import Template from "./template";
import Store from "./store";
import View from "./view";

const store = new Store("todos-vanilla-es6", () => {
	const template = new Template();
	const view = new View(template);
	view.setLoaderVisibility(false);

	/**
	 * @type {Controller}
	 */
	const controller = new Controller(store, view);

	const setView = () => controller.setView(document.location.hash);

	setView();
	$on(window, "load", setView);
	$on(window, "hashchange", setView);
});
