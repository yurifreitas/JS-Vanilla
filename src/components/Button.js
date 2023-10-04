export const renderButton = (text, path) => {
    const button = document.createElement('button');
    button.className = 'button-custom';

    const anchor = document.createElement('a');
    anchor.href = `#${path}`;
    anchor.textContent = text;

    button.appendChild(anchor);

    return button;
}
