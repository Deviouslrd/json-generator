const fs = require('fs');

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var modName = document.getElementById("modName").value;
    var ingredient = document.getElementById("blockName").value;
    var itemNamespace;

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = ingredient;
    localStorage.namespace = itemNamespace;

    if (document.getElementById("saveLocation").value === 'No Location') {
        return document.getElementById("errorholder").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().replace(/ +/g, '_');
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().trim().replace(/ +/g, '_');

    if (!fs.existsSync(`${filepath}\\data\\${modName}\\recipes`)) {
        fs.mkdir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true}, (err) => {
            if (err) throw err;
            console.log('Made the recipe folder structure.');
        });
    }

    setTimeout(() => {
        if (document.getElementById("slab").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "   ",
                  "XXX"
                ],
                key: {
                  X: { item: `${itemNamespace}:${ingredient}` }
                },
                result: {
                  item: `${itemNamespace}:${finalBlock}_slab`,
                  count: 6
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_slab.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made slab table recipe');
            });
        }

        if (document.getElementById("stairs").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "X  ",
                  "XX ",
                  "XXX"
                ],
                key: {
                  X: { item: `${itemNamespace}:${ingredient}` }
                },
                result: {
                  item: `${itemNamespace}:${finalBlock}_stairs`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_stairs.json`, jsonContent, 'utf8', (err) => {
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
                  X: { item: `${itemNamespace}:${ingredient}` }
                },
                result: {
                  item: `${itemNamespace}:${finalBlock}_wall`,
                  count: 6
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_wall.json`, jsonContent, 'utf8', (err) => {
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
                  X: { item: `${itemNamespace}:${ingredient}_slab` }
                },
                result: {
                  item: `${itemNamespace}:${finalBlock}_pillar`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\${finalBlock}_pillar.json`, jsonContent, 'utf8', (err) => {
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
                  X: { item: `${itemNamespace}:${ingredient}_slab` }
                },
                result: {
                  item: `${itemNamespace}:chiseled_${finalBlock}`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\chiseled_${finalBlock}.json`, jsonContent, 'utf8', (err) => {
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
                  X: { item: `${itemNamespace}:${ingredient}` }
                },
                result: {
                  item: `${itemNamespace}:cut_${finalBlock}`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\cut_${finalBlock}.json`, jsonContent, 'utf8', (err) => {
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
                  X: { item: `${itemNamespace}:${ingredient}` }
                },
                result: {
                  item: `${itemNamespace}:polished_${finalBlock}`,
                  count: 4
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\polished_${finalBlock}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made polished table recipe');
            });
        }

        if (document.getElementById("mossy").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shapeless",
                ingredients: [
                  { item: `${itemNamespace}:${ingredient}` },
                  { item: "minecraft:vine" }
                ],
                result: {
                  item: `${itemNamespace}:mossy_${ingredient}`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            // Note, when writing to a file, include \\assets\\${modName} or \\data\\${modName} to do it correctly
            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\mossy_${finalBlock}.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made mossy table recipe');
            });
        }

        if (document.getElementById("template").checked === true) {
            const jsonProduct = {
                type: "minecraft:crafting_shaped",
                pattern: [
                  "   ",
                  "   ",
                  "   "
                ],
                key: {
                  X: { item: `[example_namespace]:[ingredient_name]` },
                  Y: { item: `[example_namespace]:[ingredient_name]` }
                },
                result: {
                  item: `[example_namespace]:[result_name]`,
                  count: 1
                }
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile(`${filepath}\\data\\${modName}\\recipes\\crafting_table_recipe_template.json`, jsonContent, 'utf8', (err) => {
                if (err) throw err;
                console.log('Made the crafting table recipe template.');
            });
        }
            
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("errorholder").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};