const {app, BrowserWindow} = require('electron')

const createWindow = (file,sizex,sizey) => {
    const win = new BrowserWindow({
        width: sizex,
        height: sizey
    })
    win.loadFile(file)
    return win
}


app.whenReady().then(() => {

    
    const main = createWindow("main/logwait.html")
    main.title = "Bakalari - Čekání na přihlášení"

    const login = createWindow("login/index.html", 300,300)
    login.title = "Přihlášení"
    login.on("closed", (event) => {
        main.loadFile("main/index.html")
    })

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') app.quit()
    })
    
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })


    
})