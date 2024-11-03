let btn = document.querySelector("button");
let inputBox = document.querySelector("#input-box");
let listContainner = document.querySelector("#list-containner");

btn.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("You must write something!");
  } else{
    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainner.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
});
listContainner.addEventListener("click",function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },false);
function saveData() {
  localStorage.setItem("data", listContainner.innerHTML);
}
function showTask() {
  listContainner.innerHTML = localStorage.getItem("data");
}
showTask();
