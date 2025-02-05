// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//Con esta funcion se agrega un amigo a la lista de amigos
function agregarAmigo(){
    let ingresoAmigo = document.getElementById('amigo');
    let nombreAmigo = ingresoAmigo.value;

    
    //Validar si el nombre del amigo es valido, debe tener al menos 3 caracteres
    if (nombreAmigo === "") {
        alert("Por favor, ingrese un nombre válido");
        return;
    } 
    
    //Validar si el nombre del amigo ya existe en la lista de amigos    
    if (amigos.includes(nombreAmigo)) {
        alert(`El Nombre ${nombreAmigo} ya fue ingresado, agrega el apellido para diferenciarlo`);
        return;
    }

    //Agregar el amigo a la lista de amigos
    amigos.push(nombreAmigo);
    

    ingresoAmigo.ariaValue = "";

    //Actualizar la lista de amigos en la interfaz
    actualizarLista();

}

//Funcion que actualiza la lista de amigos en la interfaz
function actualizarLista(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.innerText = amigos[i];
        listaAmigos.appendChild(item);
    };
}


//Funcion que realiza el sorteo de amigo secreto
function sortearAmigo(){
    //Validar si hay al menos 2 amigos en la lista
    if (amigos.length < 2) {
        alert("Debes agregar al menos 2 amigos para realizar el sorteo");
        return;
    }

    //Realizar el sorteo, 
    //creamos un número pseudo aleatorio entre 0 y la cantidad de amigos
    let amigoSecreto = Math.floor(Math.random() * amigos.length);

    //Ubicar el amigo secreto en la lista de amigos por su indice
    let amigoSorteado = amigos[amigoSecreto];

    //Mostrar el amigo secreto en la interfaz
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: <b> ${amigoSorteado}</b>`;

    /*Ocultar el botón de sorteo
    let botonSortear = document.getElementById("botonSortear");
    botonSortear.style.display = "none";
    }
    */
}

//Funcion que reinicia el sorteo
