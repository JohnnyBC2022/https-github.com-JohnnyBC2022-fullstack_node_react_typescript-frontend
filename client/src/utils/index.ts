export function formatCurrency(amount: number){
    return new Intl.NumberFormat('es-Es', {
        style: 'currency',
        currency: 'EUR'
    }).format(amount)
}

export function toBoolean(str: String) {
    return str.toLowerCase() === "true"
}