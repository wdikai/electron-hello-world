"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
electron_1.app.on("ready", () => {
  // Create the browser window.
  const win = new electron_1.BrowserWindow({
    width: 800,
    height: 600,
    title: "test"
  });
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);
});
//# sourceMappingURL=main.js.map
