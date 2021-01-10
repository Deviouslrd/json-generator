const { app, BrowserWindow, dialog, Menu, MenuItem } = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 820,
        height: 600,
        webPreferences: {
            nodeIntegration: true
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
        },
        /*{
            label: 'Save Dialog',
            accelerator: process.platform === 'darwin' ? 'cmd+s' : 'ctrl+s',
            click: () => {
                dialog.showOpenDialog( { properties: ['openDirectory'] } ).then(data => {
                    console.log(data.filePaths);
                    module.exports.filePath = data.filePaths;
                });

            }
        }*/
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

Menu.setApplicationMenu(menu);
