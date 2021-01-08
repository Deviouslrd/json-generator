const { app, BrowserWindow, /*Menu, MenuItem */} = require('electron');

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
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

/*const menu = new Menu();
menu.append(new MenuItem({
    label: 'File',
    submenu: [
        {
            role: 'exit',
            accelerator: process.platform === 'darwin' ? 'Esc' : 'Esc',
            click: () => { app.quit(); }
        }

    ]
}));

menu.append(new MenuItem({
    label: 'Electron',
    submenu: [{
        role: 'help',
        accelerator: process.platform === 'darwin' ? 'Alt+Cmd+I' : 'Alt+Shift+I',
        click: () => { console.log('woot woot!'); }
    }]
}));

Menu.setApplicationMenu(menu);*/