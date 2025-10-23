import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 425,
    height: 550,
    show: false,
    resizable: false, // Evita que la ventana sea redimensionable
    autoHideMenuBar: true, // Oculta la barra de menú
    titleBarStyle: 'hidden', // Oculta la barra de título, (esto me permite usar el drag en CSS)
    transparent: true, // Hace que la ventana sea transparente
    roundedCorners: true, // Habilita las esquinas redondeadas
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }

  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  // HMR for renderer base on electron-vite cli.
  // Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}


app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.electron')

  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

ipcMain.on('accion', (event, accion) => {

  console.log("accion = " + accion);

  const window = BrowserWindow.getFocusedWindow();

  switch (accion) {
    case 'cerrar-ventana':
      if (window) window.close(); // cierra la ventana enfocada
      break;
    case 'minimizar-ventana':
      if (window) window.minimize(); // minimiza la ventana enfocada
      break;
    default:
      break;
  }

})
