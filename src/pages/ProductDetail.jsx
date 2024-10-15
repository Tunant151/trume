import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams(); // Get the product ID from the URL
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">Product Detail</h1>
      <p>Details for product with ID: {id} will be displayed here soon.</p>
    </div>
  );
};

export default ProductDetail;
