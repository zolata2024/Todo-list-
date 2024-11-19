
let firstBtn = document.querySelector("#show-add-btn")   // перша кнопка
let secondBtn = document.querySelector("#show-list-btn")    // друга кнопка
let thirdBtn = document.querySelector("#show-favorite-btn")     // третя кнопка
let firstScreen = document.querySelector(".todo__app")    // перший екран
let secondcreen = document.querySelector(".todo__list")   // другий екран
let thirdScreen = document.querySelector(".todo__favorite")   // третій екран

let saveBtn = document.querySelector(".save")
let firstScreenText = document.querySelector("textarea")
let secondScreenList = document.querySelector(".todo__list-wrapper")
let thirdScreenList = document.querySelector(".favorite-list")
let form = document.querySelector("form")

firstScreen.classList.add("show")   // за замовчуванням показати перший екран (першу половинку)
firstBtn.classList.add("paint")  // за замовчуванням покрасити першу кнопку у інший колір

firstBtn.addEventListener("click", () => {   // коли ми клікаємо на першу кнопку то виконуємо код нижче
  firstScreen.classList.add("show")   // показати перший екран
  secondcreen.classList.remove("show")    // прибрати другий екран
  thirdScreen.classList.remove("show")    // прибрати третій екран

  firstBtn.classList.add("paint")     //   покрасити першу кнопку у червоний кодлір
  secondBtn.classList.remove("paint")   // прибрати червоний колір кнопки
  thirdBtn.classList.remove("paint")   // прибрати червоний колір кнопки
})

secondBtn.addEventListener("click", () => {  // коли ми клікаємо на другу кнопку то виконуємо код нижче
  firstScreen.classList.remove("show")   // прибрати перший екран
  secondcreen.classList.add("show")   // показати другий екран
  thirdScreen.classList.remove("show")  // прибрати третій екран

  firstBtn.classList.remove("paint")   // прибрати червоний колір кнопки 1
  secondBtn.classList.add("paint")   // додаємо червоний колір кнопки 2
  thirdBtn.classList.remove("paint")    //  прибрати червоний колір кнопки 3
})

thirdBtn.addEventListener("click", () => {
  firstScreen.classList.remove("show")
  secondcreen.classList.remove("show")
  thirdScreen.classList.add("show")

  firstBtn.classList.remove("paint")
  secondBtn.classList.remove("paint")
  thirdBtn.classList.add("paint")
})

form.addEventListener("submit", (e) => { e.preventDefault() })//відміняе перезагрузку при кліку на кнопку save
saveBtn.addEventListener("click", () => {//добавляе подію клик на кнопку сейв


  secondScreenList.innerHTML += `
   <div class="todo__list-item">
                        <p class="todo__list-content">${firstScreenText.value}</p>
                        <div class="todo__list-controll">
                            <div class="todo__list_control_btns">
                                <input class="status" type="checkbox" name="" id="">
                                <button class="star"> <img src="./assets/icon/star.svg" alt="star"></button>
                                <button class="delete"> <img src="./assets/icon/rubbish bin.svg" alt="star"></button>
                            </div>
                            <p>18/10/2024</p>
                        </div>
                    </div>

  `
  firstScreenText.value = ""
})

secondScreenList.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
  }

  if (e.target.closest(".star")){
    thirdScreenList.prepend(e.target.parentElement.parentElement.parentElement.parentElement)
  }
})
thirdScreenList.addEventListener("click", (e) => {
  if (e.target.closest(".delete")) {
        e.target.parentElement.parentElement.parentElement.parentElement.remove()
  }

  if (e.target.closest(".star")){
    secondScreenList.prepend(e.target.parentElement.parentElement.parentElement.parentElement)
  }
})