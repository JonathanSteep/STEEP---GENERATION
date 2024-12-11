export function costCalculator(transacción) {
    const tarifa = 3;
    const interes = 0.01;

    if (typeof transacción !== "number" || transacción <= 0) {
        throw new Error("El monto de la transacción debe ser un número entre uno e infinito.");
    }

    const costototal = transacción + tarifa + (transacción * interes);
    
    return costototal;
}
console.log(costCalculator(124));
