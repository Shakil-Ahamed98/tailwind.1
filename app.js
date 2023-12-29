const div = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dark = document.querySelector("#dark")
const body = document.querySelector("body")
const hLinks = document.querySelectorAll("#hLink")

div.addEventListener('click', () => {
    div.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

hLinks.forEach(link=>{
    link.addEventListener('click', () => {
        div.classList.toggle('open')
        nav.classList.toggle('flex')
        nav.classList.toggle('hidden')
    })
})

dark.addEventListener('click', () => {
    body.classList.toggle('dark')
})
