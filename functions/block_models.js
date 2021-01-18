const fs = require('fs');


document.getElementById("blockModelForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    
    if (document.getElementById("saveLocation").value === 'No location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');

    if (!fs.existsSync(`${filepath}\\assets\\${modName}\\models\\block`)) {
        fs.mkdir(`${filepath}\\assets\\${modName}\\models\\block`, {recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the model/block/ folder.');
        });
    }

    setTimeout(() => {
        // Block Creator
        if (document.getElementById("block").checked === true) {
            const jsonProduct = {
                parent: `minecraft:block/cube_all`, textures: { all: `${modName}:block/${blockName}`}  
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made block file');
            });
        }

        // Slab Creator
        if (document.getElementById("slab").checked === true) {
            const jsonProduct1 = {
                parent: `minecraft:block/slab`,
                textures: {
                    bottom: `${modName}:block/${blockName}`,
                    top: `${modName}:block/${blockName}`,
                    side: `${modName}:block/${blockName}`
                }
            };

            const jsonProduct2 = {
                parent: `minecraft:block/slab_top`,
                textures: {
                    bottom: `${modName}:block/${blockName}`,
                    top: `${modName}:block/${blockName}`,
                    side: `${modName}:block/${blockName}`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_slab.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made slab file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_slab_top.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made slab_top file.');
            });
        }

        // Stair Creator
        if (document.getElementById("stairs").checked === true) {
            const jsonProduct1 = {
                parent: "minecraft:block/stairs",
                textures: {
                bottom: `${modName}:block/${blockName}`,
                top: `${modName}:block/${blockName}`,
                side: `${modName}:block/${blockName}`
                }
            };

            const jsonProduct2 = {
                parent: "minecraft:block/inner_stairs",
                textures: {
                bottom: `${modName}:block/${blockName}`,
                top: `${modName}:block/${blockName}`,
                side: `${modName}:block/${blockName}`
                }
            };

            const jsonProduct3 = {
                parent: "minecraft:block/outer_stairs",
                textures: {
                bottom: `${modName}:block/${blockName}`,
                top: `${modName}:block/${blockName}`,
                side: `${modName}:block/${blockName}`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made stairs file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs_inner.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made inner stairs file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_stairs_outer.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made outer stairs file.');
            });
        }
        
        // Wall Creator
        if (document.getElementById("wall").checked === true) {
            const jsonProduct1 = {
                parent: `minecraft:block/template_wall_post`,
                textures: {
                    wall: `${modName}:block/${blockName}`
                }
            };

            const jsonProduct2 = {
                parent: `minecraft:block/template_wall_side`,
                textures: {
                    wall: `${modName}:block/${blockName}`
                }
            };

            const jsonProduct3 = {
                parent: `minecraft:block/template_wall_side_tall`,
                textures: {
                    wall: `${modName}:block/${blockName}`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);
            const jsonContent3 = JSON.stringify(jsonProduct3, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_post.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall post file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_side.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall side file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_wall_side_tall.json`, jsonContent3, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the wall side top file.');
            });
        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            const jsonProduct1 = {
                parent: "minecraft:block/cube_column",
                textures: {
                end: `${modName}:block/${blockName}_pillar_top`,
                side: `${modName}"block/${blockName}_pillar`
                }
            };

            const jsonProduct2 = {
                parent: "minecraft:block/cube_column_horizontal",
                textures: {
                end: `${modName}:block/${blockName}_pillar_top`,
                side: `${modName}:block/${blockName}_pillar`
                }
            };
            
            const jsonContent1 = JSON.stringify(jsonProduct1, null, 4);
            const jsonContent2 = JSON.stringify(jsonProduct2, null, 4);

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_pillar.json`, jsonContent1, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made pillar file.');
            });

            fs.writeFile(`${filepath}\\assets\\${modName}\\models\\block\\${blockName}_pillar_horizontal.json`, jsonContent2, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made pillar horizontal file.');
            });

        }

        if (document.getElementById("block").checked === false &&
            document.getElementById("slab").checked === false &&
            document.getElementById("stairs").checked === false &&
            document.getElementById("wall").checked === false &&
            document.getElementById("pillar").checked === false) {
                return document.getElementById("errorholder").innerHTML = "Error: No boxes were selected!";
        }  
                    
        document.getElementById("errorholder").innerHTML = "";
        document.getElementById("generateBtn").value = "Generated!";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};
