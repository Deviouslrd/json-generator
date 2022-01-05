let fs = window.__TAURI__.fs;

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

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
    localStorage.checkTemplate = document.getElementById("template").checked;

    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().replace(/ +/g, '_');
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().trim().replace(/ +/g, '_');

    fs.createDir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true });

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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${finalBlock}_slab.json`}, {}, (err) => {
              if (err) {
                  document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                  throw err;
              }
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${finalBlock}_stairs.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${finalBlock}_wall.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${finalBlock}_pillar.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\chiseled_${finalBlock}.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\cut_${finalBlock}.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\polished_${finalBlock}.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\mossy_${finalBlock}.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
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

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\crafting_table_recipe_template.json`}, {}, (err) => {
				if (err) {
					document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
					throw err;
				}
			});
        }

        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};