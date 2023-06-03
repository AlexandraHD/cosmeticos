const user = JSON.parse(localStorage.getItem('login_success')) || false;    //Acceso al usuario

if(!user){
    window.location.href = 'login.html';     //Si el user no existe, que lo redirija al login
}

const logout = document.querySelector('#logout');


logout.addEventListener('click', () => {
    Swal.fire({
        title: '¿Estás seguro de salir?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: 'Si!',
        denyButtonText: `No quiero salir`,
      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Saved!', 'login.html', 'success')
            localStorage.removeItem('login_success')
          window.location.href= 'login.html'
        } 
      })
})


const logoutDesp = document.querySelector('#logout-desp');

logoutDesp.addEventListener('click', () => {
  Swal.fire({
      title: '¿Estás seguro de salir?',
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: 'Si!',
      denyButtonText: `No quiero salir`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire('Saved!', 'login.html', 'success')
          localStorage.removeItem('login_success')
        window.location.href= 'login.html'
      } 
    })
})