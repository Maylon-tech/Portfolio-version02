const header = document.querySelector('header')

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0)
})




let heart = document.querySeletorAll(".bx-heart")
console.log(heart)
heart.forEach(item => {
    console.log(item)
    item.addEventListener("change", () => {
        heart.classList.toggle("color")
    })
})