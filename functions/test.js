let btnValue = 0;
import brickSlice from './slicers';

document.getElementById("test").onsubmit = form => {
    form.preventDefault();

    const filepath = localStorage.path;

    var blockName = document.getElementById("blockName").value;
    var modName = document.getElementById("modName").value;

    localStorage.modName = modName;
    localStorage.blockName = blockName;
    
    blockName = blockName.toLowerCase().split(/ +/).join('_');
    modName = modName.toLowerCase().split(/ +/).join('_');

    const blockLength = blockName.length;
    const blockLengthStart = blockLength - 6;
    const blockSubStr = blockName.substring(blockLengthStart);
    
    if (blockSubStr === 'bricks') {
        var finalBlock = blockName.substring(0, blockName.length - 1);
    }
};

document.getElementById("test1").addEventListener('click', () => {
    brickSlice();
});

function newButton () {
    var node = document.createElement("INPUT");
    node.setAttribute("type", "radio");
    node.setAttribute("id", `button${btnValue}`);
    btnValue += 1;
    var labelnode = document.createTextNode("Item 1");
    node.appendChild(labelnode);
    document.getElementById("modNameBox").appendChild(node);
}

function removeButton () {
    var btns = document.getElementById(`button${btnValue}`);
    document.getElementById("modNameBox").removeChild(btns.removeChild);
    btnValue -= 1;
}

function test () {
    console.log(document.getElementById("dropdownTwo").children);
}