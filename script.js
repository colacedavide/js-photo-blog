const output = document.getElementById("container");

const endpoint = "https://lanciweb.github.io/demo/api/pictures/";

//chiamata endpoint
axios.get(endpoint)
        .then(response => {
            //prendiamo l'array
            const foto = response.data;

            //contenitore 

            let contFoto = " ";

            //ciclo

            foto.forEach((photo, index) =>{
                const { title, date, url} = photo;

                contFoto += `<div class="card" style="width: 18rem;">
                             <img src="${url}" class="card-img-top">
                                <div class="card-body">
                                <h2 class="titolo">${title}</h2>
                                 <p class="card-text">${date}</p>
                                    </div>
                                    </div>`;


            })
            output.innerHTML = contFoto;
        })