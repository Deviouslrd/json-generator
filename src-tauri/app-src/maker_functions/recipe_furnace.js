let fs = window.__TAURI__.fs;

const observer = new MutationObserver(function(mutationList, observer) { for (const mutation of mutationList) { if (mutation.type === 'childList') document.getElementById("error").classList.add("errortransition"); }});
observer.observe(document.getElementById("error"), {childList: true});

document.getElementById("recipeForm").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var ingredient = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;
    var result = document.getElementById("result").value;
    var xp = parseFloat(document.getElementById("xpAmount").value);
    var cookTime = parseFloat(document.getElementById("cookTime").value);
    var itemNamespace;

    if (document.getElementById("namespace").value === ``) {
        itemNamespace = document.getElementById("modName").value;
    } else {
        itemNamespace = document.getElementById("namespace").value;
    }

    localStorage.modName = modName;
    localStorage.blockName = ingredient;
    localStorage.result = result;
    localStorage.xp = xp;
    localStorage.cookTime = cookTime;
    localStorage.namespace = itemNamespace;
    localStorage.checkTemplate = document.getElementById("template").checked;
    
    if (document.getElementById("saveLocation").value === 'No Location' || !localStorage.path) {
        return document.getElementById("error").innerHTML = `Error: No save location given!`;
    }

    ingredient = ingredient.toLowerCase().trim().replace(/ +/g, '_');
    modName = modName.toLowerCase().trim().replace(/ +/g, '_');
    result = result.toLowerCase().trim().replace(/ +/g, '_');
    itemNamespace = itemNamespace.toLowerCase().trim().replace(/ +/g, '_');

    const blockLength = ingredient.length - 6;
    const blockSubStr = ingredient.substring(blockLength);
    
    if (blockSubStr === 'bricks') {
        ingredient = ingredient.substring(0, ingredient.length - 1);
    }

    fs.createDir(`${filepath}\\data\\${modName}\\recipes`, { recursive: true });

    setTimeout(() => {
        const jsonProduct = {
            type: "minecraft:smelting",
            ingredient: {
                item: `${itemNamespace}:${ingredient}`
            },
            result: `${modName}:${result}`,
            experience: xp,
            cooking_time: cookTime
        };
        
        const jsonContent = JSON.stringify(jsonProduct, null, 4);

        if (document.getElementById("template").checked === true) {
            const jsonProduct = {
                type: "minecraft:smelting",
                ingredient: {
                    item: `[example_namespace]:[ingredient_name]`
                },
                result: `[example_namespace]:[result_name]`,
                experience: "0.1",
                cooking_time: "200"
            };
            
            const jsonContent = JSON.stringify(jsonProduct, null, 4);

            fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\furnace_recipe_template.json`}, {}, (err) => {
                if (err) {
                    document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                    throw err;
                }
            });
        }

        fs.writeFile({contents: jsonContent, path: `${filepath}\\data\\${modName}\\recipes\\${result}_furnace.json`}, {}, (err) => {
            if (err) {
                document.getElementById("error").innerHTML = `An error has occured!\nError: ${err}`;                    
                throw err;
            }
        });

        document.getElementById("error").classList.remove("errortransition");
        document.getElementById("generateBtn").value = "Generated!";
        document.getElementById("error").innerHTML = "";

        setTimeout(() => {
            document.getElementById("generateBtn").value ="Generate!";
        }, 1000);

    }, 10);
};