function validateForm(){
    var elem = document.getElementById('popUp');
    var main = document.getElementsByTagName('main');
    elem.style.visibility = "visible";
    /*for(var i in main){
        if(typeof main != 'undefined'){
            main[i].style.opacity = 0.6;
        }
    }*/
    elem.style.opacity = 1;
    main[0].style.opacity = 0.3;
    return false;
}