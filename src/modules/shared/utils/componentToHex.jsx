export const componentToHex = (component) => {
    const hex = component.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
}