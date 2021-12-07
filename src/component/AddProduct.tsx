import React, {ChangeEvent, useState} from "react";
import ProductsService from "../service/product.service";

function AddProduct() {

    const [product, setProduct] = useState({id: null, name: "", brand:"", price:""});
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setProduct({ ...product, [name]: value });
    };

    const saveProduct = () => {
        let data = {
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price
        };

        ProductsService.create(data)
            .then((response: any) => {
                setProduct({
                    id: response.data.id,
                    name: response.data.name,
                    brand: response.data.brand,
                    price: response.data.price
                });
                setSubmitted(true);
                console.log(response);
            }).catch((e: Error) => {
            console.log(e.message);
        });
    }

    const newProduct = () => {
        setProduct({id: null, name: "", brand:"", price:""});
        setSubmitted(false);
    };

    return (
        <div className="submit-form">
        {submitted ? (
            <div>
                <h4>You submitted successfully!</h4>
                <button className="btn btn-success" onClick={newProduct}>
                    Add
                </button>
            </div>
            ) :
            (<div className="form-group">
                    <div>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            defaultValue={product.name || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            required
                            defaultValue={product.brand || ""}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div>
                        <input
                            type="text"
                            id="price"
                            name="price"
                            required
                            defaultValue={product.price || 0.0}
                            onChange={handleInputChange}
                        />
                    </div>

                    <button type="submit" onClick={saveProduct} className="btn btn-success" >Submit</button>

            </div>
        )}
        </div>
    );
}
export default AddProduct;