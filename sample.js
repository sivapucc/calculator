//create box

let box = document.createElement("div");
box.setAttribute("class", "box");


//create container

let con = document.createElement("div");
con.setAttribute("class", "container");

//header
let heads = document.createElement("h1");
heads.innerHTML = "Calculator";
heads.setAttribute("id", "title");

//create paragraph
let p = document.createElement("p");
p.setAttribute("id", "description");
p.innerHTML = "simple calculator";


//create result
let disp = document.createElement("input");
disp.type = "text";
disp.setAttribute("id", "result");
disp.setAttribute("class", "disp");
disp.setAttribute("maxlength", "10");
disp.autofocus = true;

//apped elements
document.body.append(heads);
heads.appendChild(box);
box.appendChild(con);
con.append(disp);

//button creation

function btn(name, attr1, attrval, attr2, attrval2, attr3, attrval3) {
    let ele = document.createElement(name);
    ele.setAttribute(attr1, attrval);
    ele.setAttribute(attr2, attrval2);
    ele.setAttribute(attr3, attrval3);
    ele.innerHTML = attrval3;
    con.append(ele);
}
let btnClr = btn("button", "id", "clear", "class", "btn", "value", "AC");
let btnDel = btn("button", "id", "btn-del", "class", "btn", "value", '<i class="fa-solid fa-delete-left"></i>');
let btnMod = btn("button", "id", "btn-mod", "class", "btn", "value", "%");
let btnDiv = btn("button", "id", "btn-div", "class", "btn", "value", "/");
let btnSeven = btn("button", "id", "7", "class", "btn", "value", "7");
let btnEight = btn("button", "id", "8", "class", "btn", "value", "8");
let btnNine = btn("button", "id", "9", "class", "btn", "value", "9");
let btnMul = btn("button", "id", "btn-mul", "class", "btn", "value", "X");
let btnFour = btn("button", "id", "4", "class", "btn", "value", "4");
let btnFive = btn("button", "id", "5", "class", "btn", "value", "5");
let btnSix = btn("button", "id", "6", "class", "btn", "value", "6");
let btnSub = btn("button", "id", "subtract", "class", "btn", "value", "-");
let btnOne = btn("button", "id", "1", "class", "btn", "value", "1");
let btnTwo = btn("button", "id", "2", "class", "btn", "value", "2");
let btnThree = btn("button", "id", "3", "class", "btn", "value", "3");
let btnAdd = btn("button", "id", "add", "class", "btn", "value", "+");
let btnZero = btn("button", "id", "btn-zero", "class", "btn", "value", "0");
let btnDot = btn("button", "id", "btn-dot", "class", "btn", "value", ".");
let btnEql = btn("button", "id", "equal", "class", "btn", "value", "=");
//paragraph


//validations

let disvalue = document.getElementById("result");

document.getElementById("clear").addEventListener("click", () => {
    disvalue.value = "";
})

document.getElementById("1").addEventListener("click", () => {
    disvalue.value += "1";
})

document.getElementById("2").addEventListener("click", () => {
    disvalue.value += "2";
})

document.getElementById("3").addEventListener("click", () => {
    disvalue.value += "3";
})

document.getElementById("4").addEventListener("click", () => {
    disvalue.value += "4";
})

document.getElementById("5").addEventListener("click", () => {
    disvalue.value += "5";
})

document.getElementById("6").addEventListener("click", () => {
    disvalue.value += "6";
})

document.getElementById("7").addEventListener("click", () => {
    disvalue.value += "7";
})

document.getElementById("8").addEventListener("click", () => {
    disvalue.value += "8";
})

document.getElementById("9").addEventListener("click", () => {
    disvalue.value += "9";
})

document.getElementById("btn-zero").addEventListener("click", () => {
    disvalue.value += "0";
})
document.getElementById("add").addEventListener("click", () => {
    disvalue.value += "+";
})

document.getElementById("btn-dot").addEventListener("click", () => {
    disvalue.value += '.';
})

document.getElementById("btn-del").addEventListener("click", () => {
    let val = disvalue.value;
    disvalue.value = val.slice(0, -1);

})
document.getElementById("btn-div").addEventListener("click", () => {
    disvalue.value += "/";
})
document.getElementById("btn-mul").addEventListener("click", () => {
    disvalue.value += "*";
})
document.getElementById("subtract").addEventListener("click", () => {
    disvalue.value += "-";
})
document.getElementById("btn-mod").addEventListener("click", () => {
    disvalue.value += "%";
})
document.getElementById("equal").addEventListener("click", (e) => {
    let result = eval(disvalue.value);
    disvalue.value = result;
    console.log(e);
})

let k = document.getElementById("result");
k.addEventListener('keyup', (e) => {
    console.log(e);
    // if ((e.key === '1') || (e.key === '2') || (e.key === '3') || (e.key === '4') || (e.key === '5') || (e.key === '6') || (e.key === '7')
    //     || (e.key === '8') || (e.key === '9') || (e.key === '0') || (e.key === '/') || (e.key === '.') ||
    //     (e.code === 'ShiftRight') || (e.key === 'ArrowRight') || (e.key === 'ArrowLeft')
    //     || (e.code === 'ShiftLeft') || (e.key === "Tab")) {

    // }
    // else if (e.key === "Backspace") {
    //     k.value = k.slice(0, -1);
    // }
    // else {
    //     alert("invalid key");
    // }
})

