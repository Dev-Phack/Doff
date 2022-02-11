let media768 = window.matchMedia("(min-width: 768px)");
if(media768.matches){
    addAttrHa();
    addAttrMn();
}
else{
    removeAttrHa();
    removeAttrMn();
}

function addAttrHa(){
    var ha1Class = document.querySelector(".ha-1-class");
    ha1Class.setAttribute("data-bs-target", "#ha-1");
    var ha2Class = document.querySelector(".ha-2-class");
    ha2Class.setAttribute("data-bs-target", "#ha-2");
    var ha3Class = document.querySelector(".ha-3-class");
    ha3Class.setAttribute("data-bs-target", "#ha-3");
    var ha4Class = document.querySelector(".ha-4-class");
    ha4Class.setAttribute("data-bs-target", "#ha-4");          

    var oeuvresImg = [ha1Class,ha2Class,ha3Class,ha4Class];
    for (let i = 0; i < oeuvresImg.length; i++) {
        oeuvresImg[i].setAttribute("type", "button");            
        oeuvresImg[i].setAttribute("data-bs-toggle", "modal");            
    }
}

function removeAttrHa() {
    var ha1Class = document.querySelector(".ha-1-class");
    ha1Class.removeAttribute("data-bs-target");
    var ha2Class = document.querySelector(".ha-2-class");
    ha2Class.removeAttribute("data-bs-target");
    var ha3Class = document.querySelector(".ha-3-class");
    ha3Class.removeAttribute("data-bs-target");
    var ha4Class = document.querySelector(".ha-4-class");
    ha4Class.removeAttribute("data-bs-target");          

    var oeuvresImg = [ha1Class,ha2Class,ha3Class,ha4Class];
    for (let i = 0; i < oeuvresImg.length; i++) {
        oeuvresImg[i].removeAttribute("type");            
        oeuvresImg[i].removeAttribute("data-bs-toggle");            
    }
}

function addAttrMn(){
    var mn1Class = document.querySelector(".mn-1-class");
    mn1Class.setAttribute("data-bs-target", "#mn-1");
    var mn2Class = document.querySelector(".mn-2-class");
    mn2Class.setAttribute("data-bs-target", "#mn-2");
    var mn3Class = document.querySelector(".mn-3-class");
    mn3Class.setAttribute("data-bs-target", "#mn-3");
    var mn4Class = document.querySelector(".mn-4-class");
    mn4Class.setAttribute("data-bs-target", "#mn-4");          

    var oeuvresImg = [mn1Class,mn2Class,mn3Class,mn4Class];
    for (let i = 0; i < oeuvresImg.length; i++) {
        oeuvresImg[i].setAttribute("type", "button");            
        oeuvresImg[i].setAttribute("data-bs-toggle", "modal");            
    }
}

function removeAttrMn() {
    var mn1Class = document.querySelector(".mn-1-class");
    mn1Class.removeAttribute("data-bs-target");
    var mn2Class = document.querySelector(".mn-2-class");
    mn2Class.removeAttribute("data-bs-target");
    var mn3Class = document.querySelector(".mn-3-class");
    mn3Class.removeAttribute("data-bs-target");
    var mn4Class = document.querySelector(".mn-4-class");
    mn4Class.removeAttribute("data-bs-target");          

    var oeuvresImg = [mn1Class,mn2Class,mn3Class,mn4Class];
    for (let i = 0; i < oeuvresImg.length; i++) {
        oeuvresImg[i].removeAttribute("type");            
        oeuvresImg[i].removeAttribute("data-bs-toggle");            
    }
}
