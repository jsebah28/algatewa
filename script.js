window.onload = function hidden() {
    document.getElementsByClassName('empresas').style.display = 'none';
};

function hideMenu() {
    document.getElementById('menu').style.display = 'none';
}

function showMenu() {
    document.getElementById('menu').style.display = 'block';
}

function showAskCab() {
    document.getElementById('ask_cab').style.display = 'block';
}

function hideAskCab() {
    document.getElementById('ask_cab').style.display = 'none';
}

function showEmpresas() {
    document.getElementsById('main_options').innerHTML = empresas.innerHTML;
}

function closeEmpresas() {
    document.getElementsByClassName('empresas').style.display = 'none';
    document.getElementsByClassName('main_options').style.display = 'block';
    document.getElementsByClassName('back_arrowText').style.display = 'none';
}

