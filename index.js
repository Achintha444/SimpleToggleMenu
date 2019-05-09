let toggleNavStatus = false;

let toggleNav = function(){
    let getSideBar = document.querySelector(".nav-sidebar");
    let getSideBarUl = document.querySelector(".nav-sidebar ul");
    let getSideBarUlSpan = document.querySelectorAll(".nav-sidebar ul span");
    
    if (!(toggleNavStatus)){
        getSideBarUl.style.visibility = "visible";
        getSideBar.style.width = "272px";
        let numOfSpan = getSideBarUlSpan.length;

        for (let i=0; i<numOfSpan; i++){
            getSideBarUlSpan[i].style.opacity = "0.8";
        }

        toggleNavStatus = true;

    }

    else{
        getSideBarUl.style.visibility = "hidden";
        getSideBar.style.width = "50px";
        let numOfSpan = getSideBarUlSpan.length;
        
        for (let i=0; i<numOfSpan; i++){
            getSideBarUlSpan[i].style.opacity = "0";
        }

        toggleNavStatus = false;
    }
    
}