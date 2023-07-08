import { componentToHex } from "./componentToHex";

export const getRandomColor = () => {
    // Random RGB values
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    // converting RGB values to hex values
    const color = `#${componentToHex(red)}${componentToHex(green)}${componentToHex(blue)}`;
    return color;
}