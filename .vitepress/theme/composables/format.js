export function formatPrice(price) {
    const numericPrice = parseInt(price.replace(/\D/g, ''), 10);
    if (isNaN(numericPrice)) return price;

    const formattedPrice = new Intl.NumberFormat('ru-RU', {
        style: 'currency',
        currency: 'RUB',
        maximumFractionDigits: 0,
    }).format(numericPrice);

    return formattedPrice;
}
