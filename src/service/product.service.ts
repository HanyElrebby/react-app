import http from "../http-commons";
import IProduct from "../model/Product";

const getAll = () => {
    return http.get<Array<IProduct>>("/products/all");
}

const get = (id: number) => {
    return http.get<IProduct>(`/products/${id}`);
}

const create = (data: any) => {
    return http.post<IProduct>("/products/create", data);
};

const remove = (id: number) => {
    return http.delete<any>(`/products/${id}`);
};

const ProductsService = {
    getAll,
    get,
    create,
    remove,
};
export default ProductsService;