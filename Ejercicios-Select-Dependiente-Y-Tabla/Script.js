const selectDepto = document.getElementById("depto");
const selectCiudad = document.getElementById("ciudad");
const formColombia = document.getElementById("formColombia");

const departamentos = {
    "Antioquia": ["Medellin", "Envigado", "Itagui", "Bello"],
    "Cundinamarca":["Bogota", "Soacha", "Zipaquira", "Chia"],
    "Valle del Cauca": ["Cali", "Palmira", "Buga", "Tulua"],
    "Tolima": ["Ibague", "Espinal", "Melgar", "Honda", "Libano"],
    "Atlantico": ["Barranquilla", "Soledad", "Malambo"],
    "Santander": ["Bucaramanga", "Floridablanca", "Giron"]
};

Object.keys(departamentos).forEach(depto => {
    const opt = document.createElement("option");
    opt.value = depto;
    opt.textContent = depto;
    selectDepto.appendChild(opt);
})

selectDepto.addEventListener("change", () => {
    const depto = selectDepto.value;
    const ciudades = departamentos[depto] || [];

    selectCiudad.innerHTML = `<option value="">Selecciona...</option>`;
    selectCiudad.disabled = ciudades.length === 0;

    ciudades.forEach(ciudad => {
        const opt = document.createElement("option");
        opt.value = ciudad;
        opt.textContent = ciudad;
        selectCiudad.appendChild(opt);
    });
});

formColombia.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const depto = selectDepto.value;
    const ciudad = selectCiudad.value;
    console.log(`${nombre} vive en ${ciudad}, ${depto}.`);
});