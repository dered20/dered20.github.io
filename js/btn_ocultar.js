document.getElementById("btnOcultar").onclick = function () {
    document.getElementById("navigationBar").style.display = 'none'
    document.getElementById("btnMostrar").style.display = 'block';
    document.getElementById("mainContent").style.padding = '0px';
}

document.getElementById("btnMostrar").onclick = function () {
    document.getElementById("btnMostrar").style.display = 'none'
    document.getElementById("navigationBar").style.display = 'block'
    document.getElementById("mainContent").style.padding = '0px 0px 0px 15%';
}


document.getElementById("btnOpcionMostrar").onclick = function () {
    document.getElementById("navigationBar").style.display = 'block'
    document.getElementById("btnOpcionMostrar").style.display = 'none'
    document.getElementById("btnOpcionOcultar").style.display = 'block'
    document.getElementById("btnOcultar").style.display = 'none'
    document.getElementsByClassName("main_content_container")[0].style.backgroundColor = '#575858'
}

document.getElementById("btnOpcionOcultar").onclick = function () {
    document.getElementById("navigationBar").style.display = 'none'
    document.getElementById("btnOpcionMostrar").style.display = 'block'
    document.getElementById("btnOpcionOcultar").style.display = 'none'
    document.getElementById("btnOcultar").style.display = 'block'
    document.getElementsByClassName("main_content_container")[0].style.backgroundColor = '#E1E2E7'
}


