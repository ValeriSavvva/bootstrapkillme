const ROOT_PRODUCTS = document.getElementById('cardOfProducts');
let cardProducts = localStorage;
class ProductsInCard{
    render() {
        let htmlCatalog='';


        for(let i=0; i<localStorage.length; i++) {
            let key = localStorage.key(i);
            htmlCatalog+=`
            <div class="card_row d-flex flex-direction-row align-items-center flex-wrap justify-content-around">
                    <div class="div_img_in_card col-sm-3 col-12  d-flex justify-content-center">
                    <img class="img_in_card" src="${CATALOG[key].img_1}" alt="...">
                </div>
                <div class="col-sm-3 col-12 d-flex flex-column">
                    <div>${CATALOG[key].name}</div>
                    <div>Price: ${CATALOG[key].price}  </div>
                </div>
                <div class="">
                    <div class="card_panel-1 d-flex align-items-center my-1 justify-content-between">
                        <button class="btn d-flex justify-content-center align-items-center"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-dash" viewBox="0 0 16 16">
                                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
                            </svg></button>
                        <div class="align-middle mx-2">${cardProducts.getItem(key)}</div>
                        <button class="btn d-flex justify-content-center align-items-center"><svg
                                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                class="bi bi-plus" viewBox="0 0 16 16">
                                <path
                                    d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
                            </svg></button>
                    </div>
                    <div class="d-flex col-12  card_panel-2 my-1 justify-content-between">
                        <button class="btn d-flex justify-content-center "><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
                                <path
                                    d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                            </svg></button>
                        <button class="btn d-flex justify-content-center "><svg xmlns="http://www.w3.org/2000/svg"
                                width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                                <path
                                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                            </svg></button>
                    </div>
                </div>
                <div class=" col-sm-3 col-12">
                ${parseInt(CATALOG[key].price)*cardProducts.getItem(key)}
                </div>
                </div>
            `;
          }
        const html = `
            ${htmlCatalog}
        `;
        ROOT_PRODUCTS.innerHTML=html;
    }
}
const prouctsPage = new ProductsInCard();
prouctsPage.render();