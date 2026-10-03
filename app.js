// Base de datos de farmacias con disponibilidad, días y horarios
const farmacias = [
    {
        nombre: "Farmacia Urlich",
        zona: "centro",
        direccion: "San Juan 558",
        telefono: "3644-380504",
        horarios: "Lunes a Domingo - 24 Hs (De Turno)",
        disponible: true,
        mapa: "https://www.google.com/maps/search/?api=1&query=San+Juan+558"
    },
    {
        nombre: "Farmacia Belgrano",
        zona: "norte",
        direccion: "Av. San Martín 517",
        telefono: "3644-380504",
        horarios: "Lunes a Viernes 08:00 a 20:00 hs",
        disponible: false,
        mapa: "https://www.google.com/maps/search/?api=1&query=Av.+San+Mart%C3%ADn+517"
    },
    {
        nombre: "Farmacia Del Norte",
        zona: "sur",
        direccion: "Mendoza 420",
        telefono: "3644-380504",
        horarios: "Lunes a Sábados 08:00 a 12:30 y 16:30 a 21:00 hs",
        disponible: false,
        mapa: "https://www.google.com/maps/search/?api=1&query=Mendoza+420"
    },
    {
        nombre: "Farmacia Markonic",
        zona: "sur",
        direccion: "Tucumán 556",
        telefono: "3644-380504",
        horarios: "Lunes a Domingo - 24 Hs (De Turno)",
        disponible: true,
        mapa: "https://www.google.com/maps/search/?api=1&query=Tucum%C3%A1n+556"
    },
    {
        nombre: "Farmacia Itatí",
        zona: "norte",
        direccion: "Avenida 25 de Mayo y Entre Ríos",
        telefono: "3644-380504",
        horarios: "Lunes a Viernes 08:00 a 20:00 hs",
        disponible: false,
        mapa: "https://www.google.com/maps/search/?api=1&query=Avenida+25+de+Mayo+y+Entre+R%C3%ADos"
    },
    {
        nombre: "Farmacia Nuevo Milenio",
        zona: "centro",
        direccion: "Entre Ríos 491",
        telefono: "3644-380504",
        horarios: "Lunes a Sábados 08:00 a 21:00 hs",
        disponible: false,
        mapa: "https://www.google.com/maps/search/?api=1&query=Entre+R%C3%ADos+491"
    }
];

// Función para mostrar las farmacias en pantalla
function mostrarFarmacias(lista) {
    const contenedor = document.getElementById("lista-farmacias");
    contenedor.innerHTML = "";

    if (lista.length === 0) {
        contenedor.innerHTML = "<p>No hay farmacias disponibles en esta zona.</p>";
        return;
    }

    lista.forEach(farmacia => {
        const card = document.createElement("div");
        
        // Asignación de clase según disponibilidad (Verde si está de turno)
        const estadoClase = farmacia.disponible ? "disponible" : "no-disponible";
        card.className = `card ${estadoClase}`;

        const badge = farmacia.disponible 
            ? `<span class="badge-turno">🟢 DE TURNO DISPONIBLE</span>` 
            : `<span class="badge-cerrado">⚪ FUERA DE TURNO</span>`;

        card.innerHTML = `
            ${badge}
            <h3>${farmacia.nombre}</h3>
            <p><strong>🕒 Días y Horarios:</strong> ${farmacia.horarios}</p>
            <p><strong>📞 Teléfono:</strong> ${farmacia.telefono}</p>
            <p><strong>📍 Dirección:</strong> ${farmacia.direccion}</p>
            
            <a href="${farmacia.mapa}" target="_blank" class="btn-mapa">
                🗺️ Cómo llegar (Abrir en Maps)
            </a>
        `;

        contenedor.appendChild(card);
    });
}

// Función para filtrar por zona
function filtrarFarmacias() {
    const zonaSeleccionada = document.getElementById("zona").value;

    if (zonaSeleccionada === "todas") {
        mostrarFarmacias(farmacias);
    } else {
        const filtradas = farmacias.filter(f => f.zona === zonaSeleccionada);
        mostrarFarmacias(filtradas);
    }
}

// Control de Navegación de Pantallas
function mostrarSeccionBusqueda() {
    document.getElementById("pantalla-inicio").classList.remove("activa");
    document.getElementById("pantalla-busqueda").classList.add("activa");
    mostrarFarmacias(farmacias);
}

function mostrarPantallaInicio() {
    document.getElementById("pantalla-busqueda").classList.remove("activa");
    document.getElementById("pantalla-inicio").classList.add("activa");
}

function salirApp() {
    alert("Gracias por usar FarmaciaYa. ¡Hasta pronto!");
    window.close(); // Intenta cerrar la ventana/pestaña
}
