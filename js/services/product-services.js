
const url = 'https://fake-api-alurageek-five.vercel.app/products';


const getProducts = () => {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};

const createProduct = (name, price, img) => {
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, price, img })
    }).then((response) => response.json())
        .catch((error) => console.log(error));
};


const deleteProduct = (id) => {
    return fetch((`https://fake-api-alurageek-five.vercel.app/products/${id}`), {
        method: 'DELETE',
        header: {
            'content-type': 'application/json'
        }
    }).then((response) => response.json()).catch((error) => console.log(error))
};



export const servicesProducts = {
    getProducts, createProduct, deleteProduct
};