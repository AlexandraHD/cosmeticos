const loginForm = document.querySelector('.login-form');

// Inicializaremos un evento que nos envíe la info
loginForm.addEventListener('submit', (e) => {
    e.preventDefault()

    //Inicializaremos una variable que capture los datos del correo en el DOM
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    //La variable constante Users incializa y trae los datos que están en localstotrage
    
    //JSON.parse nos especifica en donde están almacenados los datos que ingresamos, en este caso (users)

    // || [] significa que en el localsotrage se están almacenando la información en un arreglo.
    const Users = JSON.parse(localStorage.getItem('users')) || []

    //Inicializamos una variable validUser que es para que nos valide la información
    //Función find() nos ayuda a buscar los elementos
    // Nos ayuda a comprobar si los datos que ingreso al loguearme existen.
    const validUser = Users.find(user => user.email === email && user.password === password)

    //Si los datos no concuerdan y son (!) DIFERENTES, entonces que nos muestre un mensaje
    if(!validUser){
        return Swal.fire({
            title: 'Usuario y/o contraseña son incorrectos o no existen.' ,
            showClass: {
              popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
              popup: 'animate__animated animate__fadeOutUp'
            }
          })
    }
    
    Swal.fire({
        title: `Bienvenido ${validUser.name}`,
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      }).then((result) => {//se usa el then para que despues de mostrar el pop up lo envie al index
        localStorage.setItem('login_success', JSON.stringify(validUser))
        window.location.href='indexUser.html'
      })
})