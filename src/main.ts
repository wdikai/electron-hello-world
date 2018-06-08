import { app, BrowserWindow } from "electron";

app.on("ready", () => {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "test"
  });
  // and load the index.html of the app.
  win.loadURL(`file://${__dirname}/index.html`);
});
