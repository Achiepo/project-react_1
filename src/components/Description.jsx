import React from 'react';
import { product } from '../product';

export function Description() {
  return (
    <p className="text-gray-600 leading-relaxed">
      {product.description}
    </p>
  );
}