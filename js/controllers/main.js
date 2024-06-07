import { servicesProducts } from "../services/product-services.js";

const d = document;
const productsGrid = d.querySelector('[data-products]');
const form = d.querySelector('[data-form]');



function createCard(id, name, price, img) {
    const card = d.createElement('div');
    card.classList.add('card');

    card.innerHTML = `
    <img class="img" src="${img}" alt="Figura de ${name}">
    <p class="p">${name}</p>
    <div class="price__box">
        <p class="p__price">$ ${price}</p>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="bi bi-trash3-fill svg__card" viewBox="0 0 16 16" data-id="${id}">
            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5" />
        </svg>
    </div>
    `;

    productsGrid.appendChild(card);

    addDeleteEventListener(id);

    return card;
};



const render = async () => {
    try {
        const listProducts = await servicesProducts.getProducts();
        listProducts.forEach((product) => {
            productsGrid.appendChild(
                createCard(product.id, product.name, product.price, product.img)
            )
        });

    } catch (error) {
        console.log(error);
    }
};

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = d.querySelector('[data-name]').value;
    const price = parseFloat(d.querySelector('[data-price]').value);
    const img = d.querySelector('[data-img]').value;

    servicesProducts.createProduct(name, price, img).then((response) => console.log(response)).catch((error) => console.log(error));
});

function addDeleteEventListener(id) {
    const deleteButton = d.querySelector(`[data-id="${id}"]`);
    if (deleteButton) {
        deleteButton.addEventListener('click', () => {
            servicesProducts.deleteProduct(id);
        })
    }
}


render();