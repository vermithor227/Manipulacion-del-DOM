const formColombia = document.getElementById("formColombia");
const selectPais = document.getElementById("pais");
const selectDepto = document.getElementById("depto");
const selectCiudad = document.getElementById("ciudad");

 const ubicacion = {
    Colombia: {
        "Antioquia": ["Medellin", "Envigado", "Itagui", "Bello"],
        "Cundinamarca": ["Bogota", "Soacha", "Zipaquira", "Chia"],
        "Valle del Cauca": ["Cali", "Palmira", "Buga", "Tulua"],
        "Tolima": ["Ibague", "Espinal", "Melgar", "Honda", "Libano"],
        "Atlantico": ["Barranquilla", "Soledad", "Malambo"],
        "Santander": ["Bucaramanga", "Floridablanca", "Giron"]
    },
    Mexico: {
        "Jalisco": ["Guadalajara", "Zapopan", "Tlaquepaque", "Tonala"],
        "Nuevo Leon": ["Monterrey", "San Nicolas", "Guadalupe", "Apodaca"],
        "Ciudad de Mexico": ["Coyoacan", "Tlalpan", "Iztapalapa", "Azcapotzalco"],
        "Quintana Roo": ["Cancun", "Playa del Carmen", "Chetumal"],
        "Chiapas": ["Tuxtla Gutierrez", "San Cristobal de las Casas", "Tapachula"]
    },
    Argentina: {
        "Buenos Aires": ["La Plata", "Mar del Plata", "Bahia Blanca"],
        "Cordoba": ["Cordoba", "Villa Carlos Paz", "Rio Cuarto"],
        "Santa Fe": ["Rosario", "Santa Fe", "Rafaela"],
        "Mendoza": ["Mendoza", "San Rafael", "Godoy Cruz"]
    }
};

selectPais.addEventListener("change", () => {
    const pais = selectPais.value;

    selectDepto.innerHTML = `<option value="">Selecciona un departamento...</option>`;
    selectCiudad.innerHTML = `<option value="">Selecciona una ciudad...</option>`;
    selectCiudad.disabled = true;

    if (pais && ubicacion[pais]) {
        selectDepto.disabled = false;

        Object.keys(ubicacion[pais]).forEach((depto) => {
            const opt = document.createElement("option");
            opt.value = depto;
            opt.textContent = depto;
            selectDepto.appendChild(opt);
        });
    } else {
        selectDepto.disabled = true;
    }
});

selectDepto.addEventListener("change", () => {
    const pais = selectPais.value;
    const depto = selectDepto.value;

    selectCiudad.innerHTML = `<option value="">Selecciona una ciudad...</option>`;
    if (pais && depto && ubicacion[pais][depto]) {
        selectCiudad.disabled = false;
        ubicacion[pais][depto].forEach((ciudad) => {
            const opt = document.createElement("option");
            opt.value = ciudad;
            opt.textContent = ciudad;
            selectCiudad.appendChild(opt);
        });
    } else {
        selectCiudad.disabled = true;
    }
});

formColombia.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const pais = selectPais.value;
    const depto = selectDepto.value;
    const ciudad = selectCiudad.value;
    console.log(`${nombre} vive en ${ciudad}, ${depto} (${pais}).`);
});