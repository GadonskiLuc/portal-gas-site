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
                className="absolute bg-opacity-80 left-0 top-1/2 transform bg-portal-green text-white px-3 pb-2 pt-1 rounded-full shadow-lg z-10 transition ease-in-out hover:scale-110 hover:-translate-y-1 delay-80"
            >&larr;</button>
            
            <div 
                className="flex overflow-x-auto p-4 space-x-4 scroll-smooth scrollbar-none" 
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
                className="absolute bg-opacity-80 right-0 top-1/2 transform bg-portal-green text-white px-3 pb-2 pt-1 rounded-full shadow-lg z-10 transition ease-in-out hover:scale-110 hover:-translate-y-1 delay-80"
            >&rarr;</button>
        </div>
    );
};

export default ProductList;