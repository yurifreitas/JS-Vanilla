

export const showLoadingScreen = () => {
  

    const loadingScreen = document.createElement('div');
    loadingScreen.id = 'loading-screen';
    loadingScreen.style.position = 'fixed';
    loadingScreen.style.top = '0';
    loadingScreen.style.left = '0';
    loadingScreen.style.width = '100%';
    loadingScreen.style.height = '100%';
    loadingScreen.style.backgroundColor = 'rgba(0,0,0,0.7)';
    loadingScreen.style.color = 'white';
    loadingScreen.style.display = 'flex';
    loadingScreen.style.alignItems = 'center';
    loadingScreen.style.justifyContent = 'center';
    loadingScreen.innerText = 'Loading...';

    document.body.appendChild(loadingScreen);
}

export const hideLoadingScreen = () => {
  
    const loadingScreen = document.querySelector('#loading-screen');
    if (loadingScreen) {
        loadingScreen.remove();
    }
}
