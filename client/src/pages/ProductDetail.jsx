import Layout from "../Layouts/Layout";
import '../css/ProductDetail.css';

function ProductDetail() {


    return (
        <>
            <Layout>
                <div className="product-container">
                    <div className="product-image">
                        <img src="fishmeal.jpeg" alt="Product Image" />  </div>

                    <div className="product-details">
                        <h1 className="product-title">Fish Meal from Aller Aqua</h1>
                        <p className="product-price">$99.99</p>
                        <div className="product-description">
                            <p>This is a detailed description of the product.  You can include
                                information about its features, benefits, and specifications. Be
                                as descriptive as you need to be to give the customer a good
                                understanding of what they are buying.</p>
                        </div>

                        <div className="product-options">
                            <label for="size">Size:</label>
                            <select id="size" name="size">
                                <option value="s">Small</option>
                                <option value="m">Medium</option>
                                <option value="l">Large</option>
                            </select>

                            <label for="quantity">Quantity:</label>
                            <input type="number" id="quantity" name="quantity" value="1" min="1" />
                        </div>

                        <button className="add-to-cart">Add to Cart</button>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default ProductDetail;