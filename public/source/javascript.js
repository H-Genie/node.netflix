function boxClick(target) {
    var box=document.getElementsByClassName("box")
    var plus=document.getElementsByClassName("icon_plus")
    if (target.nextElementSibling.style.display=="block") {
        target.nextElementSibling.style.display="none";
        target.lastElementChild.style.transform="rotate(0deg)";
    }
    else {    
        for (i=0; i<box.length; i++) {
            box[i].style.display="none";   
            plus[i].style.transform="rotate(0deg)";
        }
        target.nextElementSibling.style.display="block";
        target.lastElementChild.style.transform="rotate(45deg)";
    }
}