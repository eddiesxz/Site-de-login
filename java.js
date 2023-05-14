const url = "https://www.youtube.com/"
const btn = document.querySelector('#btn')

function OpenInNewTab(url) {

    const win = window.open(url, '_blank')
    win.focus()

}



 btn.addEventListener ('click', () => {

    OpenInNewTab(url)


 })

 function logar(){

    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin" ) {
        alert('Sucesso');
        
        
    }else{

        alert('Usuario ou senha incorretos');

    }
  }