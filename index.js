let saveel = document.getElementById("save-el")
let countel = document.getElementById("count-el")
let count = 0
function increment() {
    count += 1
    countel.innerText = count
}
function save() {
    let countstr = count + " - "
    saveel.textContent += countstr
    countel.textContent = 0
    count = 0 
}
