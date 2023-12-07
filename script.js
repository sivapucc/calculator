//create container
let con = document.createElement("div");
con.setAttribute("class", "container");
document.body.append(con);
//create heading

let h = document.createElement("h1");
h.setAttribute("id", "title");
h.innerHTML = "Calculator";

//create box
let box = document.createElement("div");
box.setAttribute("class", "box");
box.setAttribute("id", "box");
//discription
let p = document.createElement("p");
p.innerHTML = "";
p.setAttribute("id", "description");
con.append(h, box, p);

//create display
let disp = document.createElement("input");
disp.type = "text";
disp.setAttribute("id", "result");
disp.setAttribute("class", "disp");
disp.setAttribute("maxlength", "10");
disp.autofocus = true;
box.append(disp);

//create buttons

let btnClr = btn("button", "class", "btn", "id", "clear", "Ac");
let btnDel = btn("button", "class", "btn", "id", "Del", "Del");
let btnMod = btn("button", "class", "btn", "id", "mod", "%");
let btnDiv = btn("button", "class", "btn", "id", "div", "/");
let btnSeven = btn("button", "class", "btn", "id", "7", "7");
let btnEight = btn("button", "class", "btn", "id", "8", "8");
let btnNine = btn("button", "class", "btn", "id", "9", "9");
let btnMul = btn("button", "class", "btn", "id", "mul", "*");
let btnFour = btn("button", "class", "btn", "id", "4", "4");
let btnFive = btn("button", "class", "btn", "id", "5", "5");
let btnSix = btn("button", "class", "btn", "id", "6", "6");
let btnSub = btn("button", "class", "btn", "id", "subtract", "-");
let btnOne = btn("button", "class", "btn", "id", "1", "1");
let btnTwo = btn("button", "class", "btn", "id", "2", "2");
let btnThree = btn("button", "class", "btn", "id", "3", "3");
let btnAdd = btn("button", "class", "btn", "id", "add", "+");
let btnZero = btn("button", "class", "btn", "id", "0", "0");
let btnDot = btn("button", "class", "btn", "id", "dot", ".");
let btnEql = btn("button", "class", "btn", "id", "equal", "=");

function btn(name, attrib1, attribval1, attrib2, attribval2, inntext) {
    let ele = document.createElement(name);
    ele.setAttribute(attrib1, attribval1);
    ele.setAttribute(attrib2, attribval2);
    ele.innerHTML = inntext;
    box.append(ele);
}

//click events validation

let inpvalue = document.getElementById("result");
inpvalue.focus = true;
document.getElementById("1").addEventListener("click", () => {
    inpvalue.value += 1;
});
document.getElementById("2").addEventListener("click", () => {
    inpvalue.value += 2;
})
document.getElementById("3").addEventListener("click", () => {
    inpvalue.value += 3;
})
document.getElementById("4").addEventListener("click", () => {
    inpvalue.value += 4;
})
document.getElementById("5").addEventListener("click", () => {
    inpvalue.value += 5;
})
document.getElementById("6").addEventListener("click", () => {
    inpvalue.value += 6;
})
document.getElementById("7").addEventListener("click", () => {
    inpvalue.value += 7;
})
document.getElementById("8").addEventListener("click", () => {
    inpvalue.value += 8;
})
document.getElementById("9").addEventListener("click", () => {
    inpvalue.value += 9;
})
document.getElementById("0").addEventListener("click", () => {
    inpvalue.value += 0;
})
document.getElementById("clear").addEventListener("click", () => {
    inpvalue.value = "";
})
document.getElementById("Del").addEventListener("click", () => {
    inpvalue.value = inpvalue.value.slice(0, -1);
})
document.getElementById("dot").addEventListener("click", () => {
    let i = inpvalue.value;
    if (i.length === 1) {
        inpvalue.value += ".";
    }
    else {

        if (i.slice(-1) === ".") {
            inpvalue.value.slice(0, -1) + ".";
        }
        else if ((i.slice(-1) === "+") || (i.slice(-1) === "-") || (i.slice(-1) === "*") || (i.slice(-1) === "/") || (i.slice(-1) === "%")) {
            inpvalue.value += "0.";
        }
        else {
            for (let j = i.length - 1; j >= 0; j--) {
                if (i[j] === ".") {
                    break;
                }
                else if ((i[j] === "+") || (i[j] === "-") || (i[j] === "*") || (i[j] === "/") || (i[j] === "%")) {
                    inpvalue.value += ".";
                    break;
                }
                else {

                    if (j === 0) {
                        inpvalue.value += ".";
                    }
                    else {
                        continue;
                    }

                }
            }

        }
    }
})
document.getElementById("add").addEventListener("click", () => {

    if (((inpvalue.value.slice(-1) === "*") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
        inpvalue.value = inpvalue.value.slice(0, -1) + "+";
    }
    else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
        (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
        || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
        inpvalue.value += "+";
    }
    else {

    }
})
document.getElementById("mul").addEventListener("click", () => {
    if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
        inpvalue.value = inpvalue.value.slice(0, -1) + "*";
    }
    else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
        (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
        || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
        inpvalue.value += "*";
    }
    else {

    }
})
document.getElementById("div").addEventListener("click", () => {
    if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
        inpvalue.value = inpvalue.value.slice(0, -1) + "/";
    }
    else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
        (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
        || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
        inpvalue.value += "/";
    }
    else {

    }
})
document.getElementById("mod").addEventListener("click", () => {
    if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "+"))) {
        inpvalue.value = inpvalue.value.slice(0, -1) + "%";
    }
    else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
        (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
        || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
        inpvalue.value += "%";
    }
    else {

    }
})
document.getElementById("subtract").addEventListener("click", () => {
    if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "*") || (inpvalue.value.slice(-1) === "%"))) {
        inpvalue.value = inpvalue.value.slice(0, -1) + "-";
    }
    else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
        (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
        || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
        inpvalue.value += "-";
    }
    else {

    }
})
document.getElementById("equal").addEventListener("click", () => {
    inpvalue.value = eval(inpvalue.value);
})




//keyboard event


inpvalue.addEventListener("keyup", (e) => {
    if ((e.key === "1") || (e.key === "2") || (e.key === "3") || (e.key === "4") || (e.key === "5")
        || (e.key === "6") || (e.key === "7") || (e.key === "8") || (e.key === "9") || (e.key === "0")
        || (e.key === "/") || (e.key === ".") || (e.key === "ShiftLeft") || (e.code === 'ShiftRight')
        || (e.key === 'ArrowRight') || (e.key === 'ArrowLeft') || (e.code === 'ShiftLeft')
        || (e.key === "Backspace") || (e.key === "=") || (e.key === "Tab") || (e.key === "Alt") || (e.key === '-')) {
    }
    else {
        alert("invalid key");

    }
})

//key board events validation

inpvalue.addEventListener("keydown", (e) => {
    let val = inpvalue.value;
    e.preventDefault();

    if (e.key === "+") {
        if (((inpvalue.value.slice(-1) === "*") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
            inpvalue.value = inpvalue.value.slice(0, -1) + "+";
        }
        else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
            (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
            || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
            inpvalue.value += "+";
        }
        else {

        }
    }
    else if (e.key === "-") {
        if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "*") || (inpvalue.value.slice(-1) === "%"))) {
            inpvalue.value = inpvalue.value.slice(0, -1) + "-";
        }
        else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
            (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
            || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
            inpvalue.value += "-";
        }
        else {

        }

    }
    else if (e.key === "*") {

        if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
            inpvalue.value = inpvalue.value.slice(0, -1) + "*";
        }
        else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
            (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
            || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
            inpvalue.value += "*";
        }
        else {

        }
    }
    else if (e.key === "/") {
        if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "%"))) {
            inpvalue.value = inpvalue.value.slice(0, -1) + "/";
        }
        else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
            (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
            || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
            inpvalue.value += "/";
        }
        else {

        }

    }
    else if (e.key === "%") {
        if (((inpvalue.value.slice(-1) === "+") || (inpvalue.value.slice(-1) === "/") || (inpvalue.value.slice(-1) === "-") || (inpvalue.value.slice(-1) === "+"))) {
            inpvalue.value = inpvalue.value.slice(0, -1) + "%";
        }
        else if ((inpvalue.value.slice(-1) === "0") || (inpvalue.value.slice(-1) === "1") || (inpvalue.value.slice(-1) === "2") || (inpvalue.value.slice(-1) === "3") ||
            (inpvalue.value.slice(-1) === "4") || (inpvalue.value.slice(-1) === "5") || (inpvalue.value.slice(-1) === "6")
            || (inpvalue.value.slice(-1) === "7") || (inpvalue.value.slice(-1) === "8") || (inpvalue.value.slice(-1) === "9")) {
            inpvalue.value += "%";
        }
        else {

        }

    }
    else if (e.key === ".") {
        let i = inpvalue.value;
        if (i.length === 1) {
            inpvalue.value += ".";
        }
        else {

            if (i.slice(-1) === ".") {
                inpvalue.value.slice(0, -1) + ".";
            }
            else if ((i.slice(-1) === "+") || (i.slice(-1) === "-") || (i.slice(-1) === "*") || (i.slice(-1) === "/") || (i.slice(-1) === "%")) {
                inpvalue.value += "0.";
            }
            else {
                for (let j = i.length - 1; j >= 0; j--) {
                    if (i[j] === ".") {
                        break;
                    }
                    else if ((i[j] === "+") || (i[j] === "-") || (i[j] === "*") || (i[j] === "/") || (i[j] === "%")) {
                        inpvalue.value += ".";
                        break;
                    }
                    else {

                        if (j === 0) {
                            inpvalue.value += ".";
                        }
                        else {
                            continue;
                        }

                    }
                }
            }
        }
    }
    else {
        if (e.key === "1") {
            inpvalue.value += e.key;
        }
        else if (e.key === "2") {
            inpvalue.value += e.key;
        }
        else if (e.key === "3") {
            inpvalue.value += e.key;
        }
        else if (e.key === "4") {
            inpvalue.value += e.key;
        }
        else if (e.key === "5") {
            inpvalue.value += e.key;
        }
        else if (e.key === "6") {
            inpvalue.value += e.key;
        }
        else if (e.key === "7") {
            inpvalue.value += e.key;
        }
        else if (e.key === "8") {
            inpvalue.value += e.key;
        }
        else if (e.key === "9") {
            inpvalue.value += e.key;
        }
        else if (e.key === "0") {
            inpvalue.value += e.key;
        }
        else if (e.key === "Backspace") {
            inpvalue.value = inpvalue.value.slice(0, -1);
        }
        else if (e.key === "=") {
            inpvalue.value = eval(inpvalue.value);
        }
    }
})




