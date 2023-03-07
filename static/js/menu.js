import { createHtmlElement } from "./utils.js";

export class Menu {
  constructor(menu) {
    this.menu = menu;
    console.log(this.menu);
    this.menu.style.cssText = `display: flex;justifyContent: center;alignItems: center;flexDirection: column;`;
    this.start = null;
    this.setting = null;
    this.about = null;
  }

  createMenu() {
    // const menu = createHtmlElement("div", "menu");
    const title = createHtmlElement("div", "title");
    const start = createHtmlElement("div", "start");
    const setting = createHtmlElement("div", "setting");
    const about = createHtmlElement("div", "about");
    title.innerHTML = "五子棋";
    start.innerHTML = "开始游戏";
    setting.innerHTML = "游戏设置";
    about.innerHTML = "关于";
    this.start = start;
    this.setting = setting;
    this.about = about;
    this.menu.appendChild(title);
    this.menu.appendChild(start);
    this.menu.appendChild(setting);
    this.menu.appendChild(about);
    // return menu;
  }
}