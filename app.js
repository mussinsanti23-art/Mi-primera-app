const farmacias = [
    {nombre: "Farmacia Urlich", zona: "centro", direccion:"San Juan 558", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Belgrano", zona: "norte", direccion:"Av. San Martín 517", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Del Norte", zona: "sur", direccion:"Mendoza 420", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Markonic", zona: "sur", direccion:"Tucumán 556", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Itati", zona: "norte", direccion:"Avenida 25 de Mayo y Entre Ríos", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Nuevo Milenio", zona: "centro", direccion:"Entre Ríos 491", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Far-Mar", zona: "centro", direccion:"La Pampa 365", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Avenida", zona: "sur", direccion:"Avenida 25 de Mayo 780", telefono: "3644-380504", mapa: "https://google.com"},
    
    {nombre: "Farmacia Stella Maris", zona: "norte", direccion:"Mendoza 583", telefono: "3644-380504", mapa: "https://google.com"}


];

function mostrarFarmacias(listafiltrada) {
    const contenedor = document.getElementById("lista-farmacias");
    contenedor.innerHTML = "";

    if(listafiltrada.length === 0) {
        contenedor.innerHTML = "<p>No hay farmacias de turno en esta zona.</p>";
        return;
    }

    listafiltrada.forEach(farmacia => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
            <h3>${farmacia.nombre}</h3>
            <p><strong> Direccion:</strong> ${farmacia.direccion}</p>
            <p><strong> Telefono:</strong> ${farmacia.telefono}</p>
            <a href="${farmacia.mapa}" target="_blank" class="btn-mapa">Ver en Mapa</a>;
        `;

        contenedor.appendChild(card);
    });
}

function filtrarFarmacias() {
    const zonaSeleccionada = document.getElementById("zona").value;

    if (zonaSeleccionada === "todas") {
        mostrarFarmacias(farmacias);
    } else {
        const filtradas = farmacias.filter(f => f.zona === zonaSeleccionada);
        mostrarFarmacias(filtradas);
    }
}

window.onload = () => {
    mostrarFarmacias(farmacias);
};
