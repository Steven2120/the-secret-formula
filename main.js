// first form
function getText() {
  alert(text.value);
}

const text = document.querySelector(".text__gen");
const submit = document.querySelector(".text__gen__btn");
let genText = submit.addEventListener("click", getText);

// second form

let sammichIng = "";
const ingButton = document.querySelector(".ingredient__btn");
const secondFormDiv = document.querySelector(".second__form__div");
const secondFormDivChildren = secondFormDiv.querySelectorAll("input");

function getSandwichIngredients() {
  for (let it of secondFormDivChildren) {
    if (it.checked === true) {
      sammichIng += it.name + " ";
    } else {
      continue;
    }
  }
  alert(`Your sandwich contains: ${sammichIng}`);
}

let getIngredients = ingButton.addEventListener(
  "click",
  getSandwichIngredients
);

// third form
let hairAptInfoArr = [];
let thirdFormDiv = document.querySelector(".third__form__div");
let thirdFormDivChildren = thirdFormDiv.querySelectorAll("input");

function getHairAptInfoFunc() {
  for (let it of thirdFormDivChildren) {
    if (it.type !== "radio") {
      hairAptInfoArr.push(it.value);
    } else if (it.type === "radio" && it.checked === true) {
      hairAptInfoArr.push(it.name);
    }
  }
  alert(
    `Haircut scheduled for ${hairAptInfoArr[0]} with ${hairAptInfoArr[1]} for ${hairAptInfoArr[2]} hair.`
  );
}
const hairSubmitBtn = document.querySelector(".hair__btn");
const getHairAptInfo = hairSubmitBtn.addEventListener(
  "click",
  getHairAptInfoFunc
);

// fourth form
let newAccount = [];
const fourthFormDiv = document.querySelector(".fourth__form__div");
const fourthFormDivChildren = fourthFormDiv.querySelectorAll("input");
let password = document.querySelector(".password");
let confirmPassword = document.querySelector(".confirm__password");
console.log(fourthFormDivChildren);

function newUserInfo() {
  if (password.value !== confirmPassword.value) {
    return alert("Passwords must match!!!!");
  } else {
    for (let it of fourthFormDivChildren) {
      if (it.type !== "password") {
        newAccount.push(it.value);
      }
    }
    alert(`Username: ${newAccount[0]} Email: ${newAccount[1]}`);
  }
}

const createAccountBtn = document.querySelector(".account__btn");
const getUserInfo = createAccountBtn.addEventListener("click", newUserInfo);
