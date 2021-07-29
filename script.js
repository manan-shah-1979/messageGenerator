const buildMessageArray = () => {
    let fs = require("fs");
    let text = fs.readFileSync("./messages.txt", 'utf-8');
    let textByLine = text.split("\n");
    //console.log(textByLine.length);
    //console.log(textByLine[21][1]);
    let indexArr = [];
    for (let i=0; i<textByLine.length; i++) {
        if (!textByLine[i][1]) {
            indexArr.push(i);
        }
    }
    //build new Arrary 
    let newArr = [];
    for (let i=0; i< textByLine.length; i++) {
        if (!indexArr.includes(i)) {
            newArr.push(textByLine[i]);
        }
    }
    return newArr;
}

const randomMessageGenerator = () => {
    //build message array
    let messageArray = buildMessageArray();
    console.log(messageArray[Math.floor(Math.random()*messageArray.length)]);
};

randomMessageGenerator();
