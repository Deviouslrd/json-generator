let value = 0;
const fs = require('fs');

test.onsubmit = form => {
    console.log(document.getElementById("blockName").value);
    
    form.preventDefault();
    const status = document.getElementById("status");
    status.style.color = "green";
    status.innerHTML = 'Status: Complete!';
};

function modify () {
    if (value === 0) {
        document.getElementById("body").style.color = "black";
        value += 1;
    } else if (value === 1) {
        document.getElementById("body").style.color = "white";
        value -= 1;
    }
}

function makeBlockModel () {
    
}