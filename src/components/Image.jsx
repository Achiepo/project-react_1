import React from 'react';
import { product } from '../product';

export function Image() {
  return (
    <div className="overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
      />
    </div>
  );
}