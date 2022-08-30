export const scroll = el => {
    const element = document.getElementById(el)
    element.scrollIntoView({
        behavior: 'smooth'
    })
}