const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var modName = document.getElementById("modName").value;
    var ingredient = document.getElementById("blockName").value;
    var textureNamespace = document.getElementById("textureNamespace");

    localStorage.modName = modName;
    localStorage.blockName = ingredient;
    localStorage.textureNamespace = textureNamespace;
    
    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().split(/ +/).join('_');
    modName = modName.toLowerCase().trim().split(/ +/).join('_');
    // Readd texturenamespace tolowercase, was erroring

    let finalBlock = ingredient;

    function brickSlice () {
        const blockLength = ingredient.length - 6;
        const blockSubStr = ingredient.substring(blockLength);
        
        if (blockSubStr === 'bricks') {
            var finalBlock = ingredient.substring(0, ingredient.length - 1);
        }
    }

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the recipe folder structure.');
        });
    }

    setTimeout(() => {
        if (document.getElementById("slab").checked === true) {
            brickSlice();

            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "   ",
                  "XXX"
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}` }
                },
                result: {
                  item: `${textureNamespace}:${finalBlock}_slab`,
                  count: 6
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_slab_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made slab table recipe');
            });
        }

        if (document.getElementById("stairs").checked === true) {
            brickSlice();
            
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "X  ",
                  "XX ",
                  "XXX"
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}` }
                },
                result: {
                  item: `${textureNamespace}:${finalBlock}_stairs`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_stairs_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made stair table recipe');
            });
        }

        if (document.getElementById("wall").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "XXX",
                  "XXX"
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}` }
                },
                result: {
                  item: `${textureNamespace}:${finalBlock}_wall`,
                  count: 6
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_wall_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made wall table recipe');
            });
        }

        if (document.getElementById("pillar").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  " X ",
                  " X "
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}_slab` }
                },
                result: {
                  item: `${textureNamespace}:${finalBlock}_pillar`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_pillar_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made pillar table recipe');
            });
        }

        if (document.getElementById("chiseled").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  " X ",
                  " X "
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}_slab` }
                },
                result: {
                  item: `${textureNamespace}:chiseled_${finalBlock}`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\chiseled_${finalBlock}_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made slab table recipe');
            });
        }

        if (document.getElementById("cut").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "XX ",
                  "XX "
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}` }
                },
                result: {
                  item: `${textureNamespace}:cut_${finalBlock}`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\cut_${finalBlock}_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made cut table recipe');
            });
        }

        if (document.getElementById("polished").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "XX ",
                  "XX "
                ],
                key: {
                  X: { item: `${textureNamespace}:${ingredient}` }
                },
                result: {
                  item: `${textureNamespace}:polished_${finalBlock}`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\polished_${finalBlock}_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made polished table recipe');
            });
        }

        if (document.getElementById("mossy").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shapeless",
                ingredients: [
                  { item: `${textureNamespace}:${ingredient}` },
                  { item: "minecraft:vine" }
                ],
                result: {
                  item: `${textureNamespace}:mossy_${ingredient}`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\mossy_${finalBlock}_table.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made mossy table recipe');
            });
        }
            
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};