module.exports = () => {
  const fs = require("fs");
  const electron = require("electron");
  const confDir = "/Users/tnixc/.config/discocss";
  const cssFile = "/Users/tnixc/.config/discocss/custom.css";

  let lastStyleID;
  function reload() {
    if (lastStyleID) electron.webFrame.removeInsertedCSS(lastStyleID);
    const css = fs.readFileSync(cssFile, { encoding: "utf-8" });
    lastStyleID = electron.webFrame.insertCSS(css);
  }

  reload();
  fs.watch(confDir, {}, () => reload());
};

module.exports.mw = (mainWindow) => {
  mainWindow.setBackgroundColor("#00000000");
};

module.exports.mo = (options) => {
  options.transparent = true;
  if (process.platform === "linux") {
    options.frame = true;
  }
};
