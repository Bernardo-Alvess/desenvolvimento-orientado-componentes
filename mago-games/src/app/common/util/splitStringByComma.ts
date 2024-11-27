export function splitStringByComma(inputString: string) {
    return inputString.split(',').map(item => item.trim());
}
