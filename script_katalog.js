const ROOT_PRODUCTS = document.getElementById('katalog');
const ROOT_MODAL = document.getElementById('modal-body');
const bt_addProduct = document.getElementById('btn-for-add');
let counter;
let ourCounter;
let cardProducts = localStorage;
class Products{
    render() {
        let htmlCatalog='';

        CATALOG.forEach(({id,name,price,img_1})=>{
            htmlCatalog+=`
            <div id=${id} class="card col-md-3 col-12 col-sm-4  border-0">
                        <a href="card_of_product.html">
                            <img src="${img_1}" class="card-img-top" alt="...">
                        </a>
                        <div class="card-body">
                            <h7 class="card-title">${name}</h7>
                            <p class="card-text">${price}</p>
                        </div>
                        <button type="button" data-action="view" class="btn btn-outline-light btn_card" data-bs-toggle="modal"
                            data-bs-target="#exampleModal">Предварительный просмотр</button>
            </div>
            `;
        });

        const html = `
        <div class="row">
            ${htmlCatalog}
        </div>
        `;
        ROOT_PRODUCTS.innerHTML=html;
    }
}
const prouctsPage = new Products();
prouctsPage.render();

document.addEventListener('click',e => {
    if(e.target.dataset.action ==="view"){
        let infoCard = CATALOG[parseInt(e.target.parentElement.id)]
        let html='';

            html=`
            <div class="img-in-card col-5 mx-3"><img src="${infoCard.img_1}" class="card-img" alt="..."></div>
            <div class="info-in-card col-5">
            <h4>${infoCard.name}</h4>
            <h5>Price: ${infoCard.price}</h5>
            <data id="idOfProductInCardProduct" value="${infoCard.id}"></data>
            <p>Размер</p>
            <div class="d-flex my-1 ">
                <button class="btn btn-outline-dark mx-1"> 42</button>
                <button class="btn btn-outline-dark mx-1"> 44</button>
                <button class="btn btn-outline-dark mx-1"> 46</button>
                <button class="btn btn-outline-dark mx-1"> 48</button>
            </div>
            <p>Количество</p>
            <div class="d-flex my-1 align-items-center">
                <button data-action="minus" class="btn btn-outline-dark  mx-2"><svg data-action="minus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash" viewBox="0 0 16 16">
                    <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                  </svg></button>
                <div id="countofProduct" class="align-middle  mx-2">1</div>
                <button data-action="plus" class="btn btn-outline-dark  mx-2"><svg data-action="plus" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></button>
            </div>
            </div>
            `;
        
        ROOT_MODAL.innerHTML=html;
        counter= document.getElementById('countofProduct');
        ourCounter = parseInt(counter.innerHTML);
    };

    if(e.target.id ==="btn-for-add"){
        if(cardProducts.getItem(document.getElementById('idOfProductInCardProduct').value)===null)
        cardProducts.setItem(document.getElementById('idOfProductInCardProduct').value, document.getElementById('countofProduct').innerHTML)
        else {
            let a=parseInt(cardProducts.getItem(document.getElementById('idOfProductInCardProduct').value))+parseInt(document.getElementById('countofProduct').innerHTML)
            cardProducts.setItem(document.getElementById('idOfProductInCardProduct').value,a)
        }
    };

    
    if(e.target.dataset.action ==="plus"){
        
        counter.innerHTML=++ourCounter;
    }
    if(e.target.dataset.action ==="minus"){
        if(parseInt(counter.innerHTML)>1)counter.innerHTML=--ourCounter;
    }
})
