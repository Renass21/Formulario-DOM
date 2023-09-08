const lista = document.getElementById('lista');
const paginacao = 

axios.get('https://api-crud-de-recados.onrender.com/recados').then((result)=>{
    console.log(result.data.recados);
    for (const recado of result.data.recados) {
        lista.innerHTML += ` <li> Titulo: ${recado.titulo} - 
                            Descrição: ${recado.descricao} - 
                            ID: ${recado.identificador} </li> <br> `
    }

})