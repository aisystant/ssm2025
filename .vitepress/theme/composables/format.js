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

export function formatDate(str) {
    if (typeof str !== 'string') return str;

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if(!regex.test(str)) return str;

    const date = new Date(str);
    return date.toLocaleDateString('ru-RU');
}

export function formatMonthDay(str) {
    if (typeof str !== 'string') return str;

    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if(!regex.test(str)) return str;

    const months = [
        'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
        'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'
    ];
    const date = new Date(str);

    return `${date.getDate()} ${months[date.getMonth()]}`;
}
