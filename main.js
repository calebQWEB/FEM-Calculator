const switchOne = document.getElementById("switch-1");
const switchTwo = document.getElementById("switch-2");
const switchThree = document.getElementById("switch-3");
const switches = document.querySelectorAll(".switch")
const toggleCircle = document.querySelector(".circle")
const mainTag = document.getElementById("main")




// TOGGLE SETTINGS

// THEME-1

switchOne.addEventListener("click", () => {
    switchThree.checked = false;
    switchTwo.checked = false;

    if ((switchTwo).checked) {
        toggleCircle.style.transform = "translateX(-" + 2 + "px)";

    } else if ((switchThree).checked) {
        toggleCircle.style.transform = "translateX(-" + 2 + "px)";
    } else {
        toggleCircle.style.transform = "none"
    }

    mainTag.removeAttribute("class")
    mainTag.classList.add("theme-1")
    
})



// THEME-2

switchTwo.addEventListener("click", () => {
    switchOne.checked = false;
    switchThree.checked = false;

    toggleCircle.style.transform = "translateX(" + 1.6 + "rem)"; 


    mainTag.removeAttribute("class")
    mainTag.classList.add("theme-2")

});


// THEME-3
switchThree.addEventListener("click", () => {
    switchOne.checked = false;
    switchTwo.checked = false;
    toggleCircle.style.transform = "translateX(" + 3.5 + "rem)";

    mainTag.removeAttribute("class")
    mainTag.classList.add("theme-3")
});




// CALCULATION FUNCTIONALITY
const numberPad = document.querySelectorAll("[data-number]");
const currentNumbers = document.querySelector(".currentNumber");
const previousNumber = document.querySelector(".previousNumber");
const decimalPoint = document.querySelector("[data-decimal]")
const padOperation = document.querySelectorAll("[data-operation]")
const compute = document.querySelector(".operation")

const equals = document.querySelector(".equals")
const del = document.querySelector(".del")
const reset = document.querySelector(".reset")




numberPad.forEach(pad => {
    pad.addEventListener("click", () => {
        currentNumbers.insertAdjacentHTML("beforeend", pad.innerHTML)
    })
})

decimalPoint.addEventListener("click", () => {
    if (currentNumbers.innerHTML === "") {
        currentNumbers.insertAdjacentHTML("beforeend",  "0" + decimalPoint.innerHTML)
    } else {
        currentNumbers.insertAdjacentHTML("beforeend", decimalPoint.innerHTML)
    }

}, {
    once: true
})

padOperation.forEach(command => {
    command.addEventListener("click", () => {

        if (currentNumbers.innerHTML === "") return
        if (previousNumber.innerHTML !== "") {
            operate()
        }
        previousNumber.innerHTML = currentNumbers.innerHTML
        compute.innerHTML = command.innerHTML
        currentNumbers.innerHTML = ""


    })
})

equals.addEventListener("click", operate)



function operate() {
    let computation
    const prev = parseFloat(previousNumber.innerHTML)
    const next = parseFloat(currentNumbers.innerHTML)

    if (isNaN(prev) || isNaN(next)) return

    switch (compute.innerHTML) {
        case "+":
            computation = prev + next;
            break

        case "-":
            computation = prev - next;
            break

        case "X":
            computation = prev * next;
            break

        case "/":
            computation = prev / next;
            break

        default:
            return
    }

    currentNumbers.innerHTML = computation
    previousNumber.innerHTML = ""
    compute.innerHTML = ""
}


reset.addEventListener("click", () => {
    previousNumber.innerHTML = ""
    currentNumbers.innerHTML = ""
    compute.innerHTML = ""
})

del.addEventListener("click", () => {
    currentNumbers.innerHTML = currentNumbers.innerHTML.toString().slice(0, -1)
})
