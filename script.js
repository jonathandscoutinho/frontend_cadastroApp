const formulario = document.querySelector("form");
const Inome = document.querySelector(".nome");
const Iemail = document.querySelector(".email");
const Isenha = document.querySelector(".senha");
const Itel = document.querySelector(".tel");

function cadastrar(){

    fetch("http://localhost:8080/usuarios",
        {
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify({
                nome: Inome.value,
                email: Iemail.value,
                senha: Isenha.value,
                telefone: Itel.value
            })
        })
        .then(function(res) {
            if (res.ok) {
                window.alert("Cadastro realizado com sucesso!");
            } else {
                console.log("Erro ao cadastrar usuário");
            }
        })
        .catch(function(err) {
            console.error("Erro na requisição:", err);
        });
    }
    
    function limpar() {
        Inome.value = "";
        Iemail.value = "";
        Isenha.value = "";
        Itel.value = "";
    }
    
    formulario.addEventListener('submit', function(event) {
        event.preventDefault();
    
        cadastrar();
    
        limpar();
    });