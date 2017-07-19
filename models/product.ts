import * as _ from 'lodash';

export class Product {
    id: number;
    name: string;
    category: string;

    constructor(data: any) {
        this.id = data.id;
        this.name = data.name;
        this.category = data.category;
    }

    static create(data: any) : Product {
        return new Product(data);
    }
}

let products: Product[] = [
    new Product({
        id: 1,
        name : 'Product 1',
        category: 'Category 1',
    }),
    new Product({
        id: 2,
        name : 'Product 2',
        category: 'Category 1',
    }),
    new Product({
        id: 3,
        name : 'Product 3',
        category: 'Category 2',
    }),
    new Product({
        id: 4,
        name : 'Product 4',
        category: 'Category 2',
    }),
    new Product({
        id: 5,
        name : 'Product 5',
        category: 'Category 2',
    }),
    new Product({
        id: 6,
        name : 'Product 5',
        category: 'Category 2',
    })
];

module.exports = Product;

module.exports.get = () => {
    return products;
};

module.exports.getById = (id: string) => {
    return products.filter((product: Product) => {
        return product.id === parseInt(id,0);
    })
};

module.exports.products = () => {
    return products;
};

module.exports.createProduct = (data: any) => {
    let product = Product.create(data);
    products.push(fakeId(product));
    return products;
};

module.exports.deleteProduct = (id: string) => {
    let deleteProduct = _.find(products, (product) => {
        return product.id === parseInt(id);
    });

    if(deleteProduct) {
        _.remove(products, deleteProduct);
    }

    return products;
};

/**
 * Faker function to mimic database incremental
 * IDs.
 * @param product
 * @returns {Product}
 */
function fakeId(product: Product) {
    let lastId: number = products[products.length - 1].id;
    product.id = lastId + 1;
    return product;
}
