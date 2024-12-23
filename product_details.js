const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');
const productContainer = document.getElementById('product_details');

async function productDetails() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch product details");
        }
        const product = await response.json();
        displayProductDetails(product);
    } catch (error) {
        console.log(error);
    }
}

function displayProductDetails(product) {
    const productHTML = `
        <div class="col-md-6 col-lg-6 d-flex py-5">
            <img src="${product.image}" class="img-fluid card-img-top" alt="${product.title}">
        </div>
        <div class="col-md-6 col-lg-6">
            <h5 class="card-title">${product.title}</h5>
            <p class="card-text">${product.description}</p>
            <span class="fw-bold">$${product.price}</span><br>
            <button type="button" class="btn btn-success mt-3">Buy Now</button>
        </div>`;
    productContainer.innerHTML = productHTML;
}

productDetails();
