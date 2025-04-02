const renderNewProductPage = (productData) => {
    return `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>Shop - Newest product</title>
        </head>
        <body>
            <h1>${productData ? 'Newest product' : 'No products available'}</h1>
            ${productData ? `<div>New product data - ${productData}</div>` : ''}
            <nav>
                <a href="/">Home</a><br>
                <a href="/product/add">Add product</a><br>
                <a href="/logout">Logout</a>
            </nav>
        </body>
        </html>
    `;
};

module.exports = renderNewProductPage;
