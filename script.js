const count = document.querySelector(".count");
const input = document.querySelector("input");
const btn = document.querySelector(".btn")

input.addEventListener("keyup", () => {
    count.innerHTML = input.value.length;
})

btn.addEventListener("click", () => {
    input.value = "";
    count.innerText = "";
})