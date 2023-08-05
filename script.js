const formulario = document.getElementById("formulario");

formulario.addEventListener("submit",(e)=> {
e.preventDefault();
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    console.log(email,senha);

    const promise = axios.post('https://api-crud-de-recados.onrender.com/usuarios/login', {
       email : email,
        senha: senha,
    }).then((response) => {
        console.log(response.data); // Assuming the API returns some data.
        alert("Login efetuado com sucesso!");
        window.location.href = "recados.html"
    }).catch((error) => {
        console.error(error);
        alert("Erro ao efetuar o login. Verifique suas credenciais.");
    });
});
