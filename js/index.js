//hiệu ứng hover
const {mouseEnter_menu,hover_icon,click_openfile,close_info,hover_openItem,click_OpenItem} = {
    mouseEnter_menu:new Audio('/sound/mouseEnter_menu.mp4'),
    hover_icon:new Audio('/sound/hover_icon.mp4'),
    click_openfile:new Audio('/sound/click_openfile.mp4'),
    close_info: new Audio('/sound/close_info.mp4'),
    hover_openItem: new Audio('/sound/close_info.mp4'),
    click_OpenItem: new Audio('/sound/click_openItem.mp4')

}


let arrLink = document.querySelectorAll('.navlink');

arrLink.forEach(item => {
    item.onmouseenter =  (e) => {
         mouseEnter_menu.play();
         for(let menuItem of arrLink){
            menuItem.className = 'navlink';
         }
         e.target.className = 'navlink active';    
    }
})


window.handleEvent_hoverIcon = (tag) => {
    hover_icon.play();
}

window.handleClickIcon = (tag)=>{
    click_openfile.play();
    document.querySelector('#popup').style.display = "block";
}


window.handleOpenItem = () => {
    hover_openItem.play();

} 

window.handleClickOpenItem = () => {
    click_OpenItem.play();
    document.querySelector('#popup_gift').style.display = "block";

}
//popup
window.closePopup = (e) => {
    e.style.display="none";
    close_info.play();
  
}

