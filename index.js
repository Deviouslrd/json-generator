const electron = require('electron'); 
const path = require('path'); 
const fs = require('fs'); 
// Importing dialog module using remote 
const dialog = electron.remote.dialog; 

var save = document.getElementById('save'); 

save.addEventListener('click', (event) => { 
	// Resolves to a Promise<Object> 
	dialog.showSaveDialog({ 
		title: 'Select the File Path to save', 
		defaultPath: path.join(__dirname, '../assets/sample.txt'), 
		// defaultPath: path.join(__dirname, '../assets/'), 
		buttonLabel: 'Save', 
		properties: ['openDirectory'] 
	}).then(file => { 
		// Stating whether dialog operation was cancelled or not. 
		console.log(file.canceled); 
		if (!file.canceled) { 
			console.log(file.filePath.toString()); 
			
			// Creating and Writing to the sample.txt file 
			fs.writeFile(file.filePath.toString(), 
						'This is a Sample File', function (err) { 
				if (err) throw err; 
				console.log('Saved!'); 
			}); 
		} 
	}).catch(err => { 
		console.log(err);
	}); 
}); 
