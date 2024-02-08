const botonlogin = document.querySelector('header>button');
const botonAdd = document.querySelector('div.add>button');
const botonLike = document.querySelector('div.verbo-1>button');

botonlogin.addEventListener('click', function(){
    botonlogin.innerText="Logout";
})

botonAdd.addEventListener('click', function(){
    botonAdd.remove();
})

botonLike.addEventListener('click', function(){
    alert('holaa');
})

