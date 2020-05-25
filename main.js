let idUser = 0

class Usuario {
    constructor(nombre, apellido, email, telefono) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.telefono = telefono;
        this.id = idUser++
    }
}

function mostrarFormulario(id_form) {
    //obtener form por id
    const form = document.getElementById(id_form);
    //quitar clase form-oculto
    form.setAttribute('class', '')
}

function ocultarFormulario(id_form) {
    const form = document.getElementById(id_form);
    //poner clase form-oculto
    form.setAttribute('class', 'form-oculto')
}

function obtenerUsuarios() {
    //obtener datos
    const nombre = document.getElementById('nombre_usuario').value
    const apellido = document.getElementById('apellido_usuario').value
    const email = document.getElementById('email_usuario').value
    const telefono = document.getElementById('telefono_usuario').value
    //crear un objeto usuario y lo pone en un array
    const usuario = new Usuario(nombre, apellido, email, telefono)
    return usuario
}

function agregarUsuario() {
    let usuario = obtenerUsuarios();

    // Crea el li
    let li = document.createElement('li')
    li.id = 'user:' + usuario.id
    li.innerHTML = `
    Nombre: ${usuario.nombre}
    Apellido: ${usuario.apellido}
    Email: ${usuario.email}
    Telefono: ${usuario.telefono}
    <button onclick="deleteUser(`+usuario.id+`)">DeleteMe</button>`

    // Agrega a la ul
    document.querySelector('#lista-usuarios').appendChild(li);

    ocultarFormulario('form-usuario')
}

function deleteUser(id) {
    let list = document.getElementById("lista-usuarios");
    list.removeChild(document.getElementById('user:'+id))
}
