import React, { useEffect, useState, useRef } from 'react';
import ProductCard from '../cards/Product';
import productsData from '../data/products.json'; // Importe seu arquivo JSON

// Defina a interface para o tipo de produto
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
}
  
const ProductList: React.FC = () => {
const [products, setProducts] = useState<Product[]>([]);
const listRef = useRef<HTMLDivElement>(null);

useEffect(() => {
    // Carregue os dados do JSON
    setProducts(productsData);
}, []);

const scrollLeft = () => {
    if (listRef.current) {
    listRef.current.scrollBy({ left: -listRef.current.clientWidth, behavior: 'smooth' });
    }
};

const scrollRight = () => {
    if (listRef.current) {
    listRef.current.scrollBy({ left: listRef.current.clientWidth, behavior: 'smooth' });
    }
};

return (
    <div className="relative mx-2">
        <button 
            onClick={scrollLeft} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
        >&larr;</button>
        
        <div 
            className="flex overflow-x-auto p-4 space-x-4 scroll-smooth" 
            ref={listRef} 
            style={{ scrollSnapType: 'x mandatory' }}
        >
            {products.map(product => (
            <div key={product.id} style={{ scrollSnapAlign: 'start' }}>
                <ProductCard product={product} />
            </div>
            ))}
        </div>
        
        <button 
            onClick={scrollRight} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full shadow-lg z-10"
        >&rarr;</button>
    </div>
);
};

export default ProductList;