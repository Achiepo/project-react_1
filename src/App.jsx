import React from 'react';
import { Name } from './components/Name';
import { Price } from './components/Price';
import { Description } from './components/Description';
import { Image } from './components/Image';
import { Laptop, Star } from 'lucide-react';

// Mon prenom defini
const prenom = "Sachiel";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 py-12 px-4">
      <div className="max-w-md mx-auto space-y-8">
        {/* Carte du produit */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:shadow-xl transition-all duration-300">
          <Image />
          <div className="p-6 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Laptop className="text-blue-600" size={24} />
                <Name />
              </div>
              <div className="flex items-center gap-1">
                <Star className="text-yellow-400 fill-current" size={20} />
                <span className="text-sm font-medium">4.9/5</span>
              </div>
            </div>
            <Price />
            <Description />
            <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
              Ajouter au panier
            </button>
          </div>
        </div>

        {/* Message de bienvenue */}
        <div className="text-center">
          <h3 className="text-2xl font-medium text-gray-800 mb-4">
            {prenom ? `Bonjour, ${prenom} !` : "Bonjour !"}
          </h3>
          
          {prenom && (
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1492571350019-22de08371fd3?auto=format&fit=crop&q=80&w=1000"
                alt="Bienvenue"
                className="w-full h-48 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;