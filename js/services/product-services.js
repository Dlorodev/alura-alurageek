const url = 'http://localhost:3000/products';


const getProducts = () => {
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.log(error));
};



export const servicesProducts = {
    getProducts
};