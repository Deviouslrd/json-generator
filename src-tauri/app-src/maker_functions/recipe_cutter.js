let fs = window.__TAURI__.fs;

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var ingredient = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;
    var itemNamespace;
    var count = parseFloat(document.getElementById("count").value);

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = ingredient;
    localStorage.result = result;
    localStorage.namespace = itemNamespace;
    localStorage.count = count;
    localStorage.checkTemplate = document.getElementById("template").checked;
    
    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    result = result.toLowerCase().trim().replace(/ +/g, '_');
    ingredient = ingredient.toLowerCase().trim().replace(/ +/g, '_');
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().replace(/ +/g, '_');

    fs.createDir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true });

    setTimeout(() => {
        // Slab Creator
        if (document.getElementById("slab").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_slab`,
                count: 2
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_slab_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_slab_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${filename}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        // Stairs Creator
        if (document.getElementById("stairs").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_stairs`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_stairs_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_stairs_stonecutting`;
                localStorage.namingConvention = "custom";
            }


            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${filename}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        // Pillar Creator
        if (document.getElementById("pillar").checked === true) {
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_pillar`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_pillar_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_pillar_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${filename}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        // Wall Creator
        if (document.getElementById("wall").checked === true) {   
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `${itemNamespace}:${ingredient}`
                },
                result: `${modName}:${result}_wall`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            let filename;

            if (document.getElementById("mojang").checked === true) {
                filename = `${result}_wall_from_${ingredient}_stonecutting`;
                localStorage.namingConvention = "mojang";
            }
        
            if (document.getElementById("custom").checked === true) {
                filename = `${result}_wall_stonecutting`;
                localStorage.namingConvention = "custom";
            }

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${filename}.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        // Template Creator
        if (document.getElementById("wall").checked === true) {   
            const jsonProduct = {
                type: "minecraft:stonecutting",
                ingredient: {
                    item: `[example_namespace]:[ingredient_name]`
                },
                result: `[example_namespace]:[result_name]`,
                count: count
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\stonecutter_recipe_template.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        if (//document.getElementById("block").checked === false &&
        document.getElementById("slab").checked === false &&
        document.getElementById("stairs").checked === false &&
        document.getElementById("wall").checked === false &&
        document.getElementById("pillar").checked === false &&
        document.getElementById("template").checked === false) {
            document.getElementById("error").classList.add("errortransition");
            return document.getElementById("error").innerHTML = "Error: No boxes were selected!";
        }

        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);
        
    }, 10);
};