function graphics(config, rule){

grand = document.querySelector("#header");
header = document.createElement("h1");
header.style.padding = "10px"
header.style.textAlign = "center";
header.textContent = "Rule " + rule;
grand.appendChild(header);
const parent = document.querySelector("#main");




// /* draw remaining rows */
for(let j = 0; j <config.length; j++){
    if(j == 0){
        config = config;
    }
    else{
        config = applyRule(config, rule);
    }
    newRow = makeRow(config);
    parent.appendChild(newRow);
}

}

function get_binary(n) {
    var binary=[];
    for(let i=0;i<8;i++){
        binary.push(n%2);
        n=Math.trunc(n/2);
    }
   // binary=binary.reverse();
    return binary;
}


function applyRule(config, rule){
    const digits = get_binary(rule);
    var left = 0;
    var right = 0;
    var config2 = new Array(config.length).fill(0);
    for(let i = 0; i < config.length; i++){
        if(i == 0){
            left = config[config.length - 1];
        }
        else{
            left = config[i-1];
        }
        if(i ==config.length - 1){
            right = config[0];
        }
        else{
            right = config[i+1];
        }
        if(config[i] == 1){
            if(left == 1){
                if(right == 1){
                    config2[i] = digits[7];
                }
                else{
                    config2[i] = digits[6];
                }
            }
            else{
                if(right == 1){
                    config2[i] = digits[3];
                }
                else{
                    config2[i] = digits[2];
                } 
            }
        }
        else{
            if(left == 1){
                if(right == 1){
                    config2[i] = digits[5];
                }
                else{
                    config2[i] = digits[4];
                }
            }
            else{
                if(right == 1){
                    config2[i] = digits[1];
                }
                else{
                    config2[i] = digits[0];
                } 
            }
        }
    }
    return config2;
}

function makeRow(config){
    const newRow = document.createElement("div");
    newRow.style.height = 500 / config.length + "px";
    newRow.style.width = config.length + "px";

    for(let i = 0; i < config.length; i++){
        const newCell = document.createElement("div");
        newCell.style.height = (500/ config.length) + "px";
        newCell.style.width = (500/ config.length) + "px";
        newCell.style.position = "absolute";
        newCell.style.left = i* (500 / config.length) + "px";
        if (config[i] == 1){
            newCell.style.backgroundColor = "rgb(0,0,0)";
        }
        else{
            newCell.style.backgroundColor = "rgb(255,255,255)";
        }
        newRow.appendChild(newCell);
    }
    return newRow;
}

module.exports={applyRule};