export function ageCalculator(año, mes, día) {
    const nacimiento = new Date(año, mes, día);
    const fechaActual = new Date();

    let edadAños = fechaActual.getFullYear() - nacimiento.getFullYear();
    let edadMeses = fechaActual.getMonth() - fechaActual.getMonth();
    let edadDias = fechaActual.getDay() - fechaActual.getDay();

    if (edadMeses < 0 || ())
}