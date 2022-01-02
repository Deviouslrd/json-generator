document.getElementById("savebutton").addEventListener('click', () => {
    import { open } from "@tauri-apps/api/dialog";
    let defaultPath = null;
    let filter = null;
    let directory = false;

    let filePath = open({
        defaultPath,
        filters: filter
        ? [
            {
            name: "Tauri Example",
            extensions: filter.split(",").map((f) => f.trim()),
            },
        ]
        : [],
        directory
    }).then(console.log(filePath));
    
    //document.getElementById("saveLocation").value = await localStorage.path;
});