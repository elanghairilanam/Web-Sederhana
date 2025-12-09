function showSideBar() {
    const sideBar = document.querySelector('.side-navbar');
    sideBar.style.transform = 'translateX(0)';
}

function hideSideBar(){
    const sideNavBar = document.querySelector('.side-navbar');
    sideNavBar.style.transform = 'translateX(200px)';
}