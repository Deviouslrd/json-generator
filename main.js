const { app, BrowserWindow, Menu, MenuItem, autoUpdater, dialog } = require("electron");
require('update-electron-app')({
    updateInterval: '1 hour'
});

autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
    const dialogOpts = {
        type: 'info',
        buttons: ['Restart', 'Later'],
        title: 'Generator Update',
        message: process.platform === 'win32' ? releaseNotes : releaseName,
        detail: 'A new version has been downloaded. Restart the application to apply the updates.'
    };
  
    dialog.showMessageBox(dialogOpts).then((returnValue) => {
        if (returnValue.response === 0) autoUpdater.quitAndInstall();
    });
});

autoUpdater.on('error', message => {
    console.error('There was a problem updating the application');
    console.error(message);
});

function createWindow () {
    const win = new BrowserWindow({
        show: false,
        width: 850,
        height: 600,
        title: `Mod JSON Generator ${app.getVersion()}`,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    
    win.loadFile('pages/main.html');

    win.once('ready-to-show', () => {
        win.show();
    });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});

const menu = new Menu();
menu.append(new MenuItem({
    label: 'File',
    submenu: [
        {
            label: 'Exit',
            accelerator: process.platform === 'darwin' ? 'esc' : 'esc',
            click: () => { app.quit(); }
        }
    ]
}));

menu.append(new MenuItem({
    label: 'Dev Tools',
    submenu: [
        {
            role: 'toggleDevTools',
            accelerator: process.platform === 'darwin' ? 'cmd+shift+i' : 'ctrl+shift+i',
            click: () => {
                openDevTools();
            }
        },
        {
            role: 'reload',
            accelerator: process.platform === 'darwin' ? 'cmd+r' : 'ctrl+r',
            click: () => { app.relaunch(); }
        }
    ]
}));

menu.append(new MenuItem({
    label: 'Help',
    submenu: [
        {
            role: 'help',
            accelerator: process.platform === 'darwin' ? 'cmd+h' : 'ctrl+h',
            click: () => {
                const win = new BrowserWindow({ 
                    width: 850, 
                    height: 600,
                    title: "Generator Help",
                    webPreferences: {
                        nodeIntegration: true
                    }
                });

                win.loadFile('./pages/help.html');
            }
        }
    ]
}));

Menu.setApplicationMenu(menu);