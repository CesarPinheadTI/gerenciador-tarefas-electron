const { app, BrowserWindow } = require('electron')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: "assets/add.png",
  })

  win.loadFile('src/pages/index.html')
}

app.whenReady().then(() => {
  createWindow()
})