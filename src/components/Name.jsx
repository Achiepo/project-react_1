import React from 'react';
import { product } from '../product';

export function Name() {
  return <h2 className="text-2xl font-bold text-gray-800">{product.name}</h2>;
}