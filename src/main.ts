import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

function toggleMobileView() {
	this.app.emulateMobile(!this.app.isMobile);
}

export default class MyPlugin extends Plugin {
	async onload() {
		// await this.loadSettings();

		// This creates an icon in the left ribbon.
		const toggleMobile = this.addRibbonIcon("smartphone", "toggle mobile", function() {
			toggleMobileView();
		});
		
		// Perform additional things with the ribbon
		toggleMobile.addClass('my-plugin-ribbon-class');


		// This adds a simple command that can be triggered anywhere
		this.addCommand({
			id: 'toggle-mobile-view',
			name: 'Toggle mobile view',
			callback: function() {
				toggleMobileView();
			}
		});
	}

	onunload() {

	}
}
