import Controller from "./controller";
import { $on } from "./helpers";
import Template from "./template";
import Store from "./store";
import View from "./view";

const template = new Template();
const view = new View(template);

view.setLoaderVisiblity(true);

const store = new Store("todos-vanilla-es6", () => {
	/**
	 * @type {Controller}
	 */
	const controller = new Controller(store, view);
	const setView = () => controller.setView(document.location.hash);

	setView();
	$on(window, "load", setView);
	$on(window, "hashchange", setView);
	view.setLoaderVisiblity(false);
});
