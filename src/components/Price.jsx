import React from 'react';
import { product } from '../product';

export function Price() {
  return (
    <div className="text-xl font-semibold text-green-600">
      {product.price.toLocaleString('fr-FR', { 
        style: 'currency', 
        currency: 'XOF' 
      })}
    </div>
  );
}