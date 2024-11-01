let showAddBtn = document.querySelector("#show-add-btn")
let showListBtn = document.querySelector("#show-list-btn")
let showFavoriteBtn = document.querySelector("#show-favorite-btn")

let addScreen = document.querySelector(".todo__app")
let listScreen = document.querySelector(".todo__list")
let favoriteScreen = document.querySelector(".todo__favorite")

addScreen.classList.add("show")
showAddBtn.classList.add("show")

showAddBtn.addEventListener("click", ()=>{
    addScreen.classList.add("show")
    listScreen.classList.remove("show")
    favoriteScreen.classList.remove("show")

    showAddBtn.classList.add("show")
    showListBtn.classList.remove("show")
    showFavoriteBtn.classList.remove("show")
})

showListBtn.addEventListener("click",()=>{
    addScreen.classList.remove("show")
    listScreen.classList.add("show")
    favoriteScreen.classList.remove("show")

    showAddBtn.classList.remove("show")
    showListBtn.classList.add("show")
    showFavoriteBtn.classList.remove("show")
})

showFavoriteBtn.addEventListener("click",() =>{
    addScreen.classList.remove("show")
    listScreen.classList.remove("show")
    favoriteScreen.classList.add("show")

    showAddBtn.classList.remove("show")
    showListBtn.classList.remove("show")
    showFavoriteBtn.classList.add("show")
})