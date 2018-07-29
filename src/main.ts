import { app, BrowserWindow } from "electron"
import { initialState } from "./modules"
import { Store, createStoreMain, replayActionMain } from "./store"

let window: BrowserWindow | null = null
let store: Store | null = null

const createWindow = () => {
  window = new BrowserWindow({
    width: 800,
    height: 600,
  })

  window.loadFile("index.html")
  window.webContents.openDevTools()

  window.on("closed", () => {
    window = null
  })
}

app.on("ready", () => {
  store = createStoreMain(initialState)
  replayActionMain(store)
  
  createWindow()
})

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit()
  }
})

app.on("activate", () => {
  if (window === null) {
    createWindow()
  }
})
