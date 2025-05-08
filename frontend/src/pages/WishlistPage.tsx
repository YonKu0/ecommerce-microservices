import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlistStore } from '../store/wishlistStore';

const WishlistPage = () => {
  const { items, removeItem } = useWishlistStore();

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      {items.length === 0 ? (
        <p className="text-gray-600">Your wishlist is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border rounded-lg p-4">
              <img src={item.image} alt={item.name} className="h-40 object-contain mx-auto mb-4" />
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-blue-900 font-bold">${item.price.toFixed(2)}</p>
              <div className="flex justify-between mt-4">
                <Link
                  to={`/product/${item.id}`}
                  className="text-blue-600 underline text-sm"
                >
                  View
                </Link>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
