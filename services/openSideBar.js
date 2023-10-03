
export default function openSideBar () {
    setTimeout(() => {

        const sideBar = document.querySelector('sidebar')

        sideBar.classList.add('slideIn');
        
    }, 1000)
}