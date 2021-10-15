export const number_formatter = (number) => {
    return new Intl.NumberFormat().format(number);
}