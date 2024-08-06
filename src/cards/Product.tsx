import React from 'react';

interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
  }
  
  interface ProductCardProps {
    product: Product;
  }

  /**const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="w-64 flex-shrink-0 mx-2 my-2 p-4 border border-gray-200 rounded-lg shadow-lg">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.name} />
      <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
      <p className="mt-1 text-gray-700">{product.price}</p>
    </div>
  );
}; */

const Product: React.FC<ProductCardProps> = ({product}) => {
    return(
        <div className="w-80 max-w-2xl mx-4 flex-shrink-0">
            <div className="bg-white shadow-md rounded-lg max-w-sm flex-shrink-0">
                <a href='#'>
                    <img className="rounded-t-lg p-8" src="https://gasprati.loji.com.br/storage/uploads/fWE3Nhy8re3gl4l6W2AK5YxVlrJl0y5ZcHiInbd2.png" alt="gas" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h3 className="text-gray-dark font-semibold text-xl tracking-tight">{product.name}</h3>
                    </a>
                </div>
                <div className="flex items-center justify-between px-5 pb-5">
                    <span className="text-3xl font-bold text-gray-dark">{product.price}</span>
                    <a href='#' className="text-white bg-portal-green hover:bg-green focus:ring-4 focus:ring-green font-medium rounded-lg text-sm px-5 py-2.5 text-center "> Pedir</a>
                </div>
            </div>
        </div>
    )
}

export default Product;