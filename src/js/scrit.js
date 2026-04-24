const boton = document.getElementById('menu-toggle')
const nav = document.getElementById('navegador')

boton.addEventListener('click',()=>{ 
    nav.classList.toggle('mostrar')
})
