const productContainer = document.getElementById('product_container');

async function fetchProduct() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        console.log(response);
        if (!response.ok) {
            throw new Error("Something went wrong");
        }
        const products = await response.json();

       document.getElementById('loadingdiv').style.display='none';
        displayProducts(products)
    } catch (error) {
        console.log(error);
        productContainer.innerHTML = '<p class="text-danger">Failed to load products. Please try again later.</p>';
    }
}
function displayProducts(products){
    products.forEach(product => {
        let productCard = `
        <div class="col-md-3 col-lg-3 d-flex">
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.title}">
                <div class="card-body">
                    <h5 class="card-title">${product.title}</h5>
                    <p class="card-text">${product.description.slice(0,100)}...</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <span class="fw-bold">$${product.price}</span>
                        <a href="product_details.html?id=${product.id}" class="btn btn-primary">View Details</a>
                    </div>
                </div>
            </div>
        </div>`;

        productContainer.innerHTML += productCard; // Correctly append to innerHTML
    });
}
fetchProduct();
