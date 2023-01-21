const form = document.getElementById("forms");
const nlwSetup = new NLWSetup(form);
const button = document.querySelector("header button");

button.addEventListener("click", add);
form.addEventListener("change", save);

function add() {
  const toDay = new Date().toLocaleDateString("pt-br").slice(0, -5);
  const dayExists = nlwSetup.dayExists(toDay);

  if (dayExists) {
    alert("Dia já incluso");
    return;
  }

  nlwSetup.addDay(toDay);
}

function save() {
  localStorage.setItem("NLWsetupHabits", JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem("NLWsetupHabits")) || {};
nlwSetup.setData(data);
nlwSetup.load();
