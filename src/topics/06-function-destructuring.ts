export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const table: Product = {
    description: 'iPaid Air',
    price: 250.0
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach( ({price}) => total += price);

    return [total, total * tax];
}

const shoppingCart = [phone, table];
const tax = 0.15;


const [products, taxTotal] = taxCalculation({
    products: shoppingCart,
    tax,
});

//console.log('Total:', products)
//console.log('Tax:', taxTotal)
