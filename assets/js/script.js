
const htmlElement = document.querySelector('html');

function loclSet(){
    const storedUsername = localStorage.getItem('mode');
    if (!storedUsername) {
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('mode', 'dark');
    }else{
        htmlElement.setAttribute('data-theme', storedUsername);
        localStorage.setItem('mode', storedUsername);
    }
}

loclSet();


function setMode(){
    const storedUsername = localStorage.getItem('mode');
    console.log(storedUsername);
        if (storedUsername=='light') {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('mode', 'dark');
        } else {
            htmlElement.setAttribute('data-theme', 'light');
            localStorage.setItem('mode', 'light');
        }
        
}


document.getElementById('dnswth').addEventListener('click',setMode)