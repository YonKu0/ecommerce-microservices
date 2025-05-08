import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProductById } from '../data/products';
import { useCartStore } from '../store/cartStore';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { ShoppingCart, Heart } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = getProductById(id || '');
  const { addItem } = useCartStore();
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const { addItem: addToWishlist, removeItem, isInWishlist } = useWishlistStore();

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-center text-gray-600">Product not found</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    navigate('/cart');
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              <span className="text-yellow-400">★</span>
              <span className="ml-1 text-gray-600">{product.rating}</span>
            </div>
            {product.inStock ? (
              <Badge variant="success" className="ml-4">In Stock</Badge>
            ) : (
              <Badge variant="danger" className="ml-4">Out of Stock</Badge>
            )}
          </div>

          <p className="text-2xl font-bold text-blue-900 mb-6">
            ${product.price.toFixed(2)}
          </p>

          <p className="text-gray-600 mb-6">{product.description}</p>

          {product.features && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Features:</h3>
              <ul className="list-disc list-inside text-gray-600">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {product.colors && (
            <div className="mb-6">
              <h3 className="font-semibold mb-2">Colors:</h3>
              <div className="flex gap-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`
                      px-4 py-2 rounded-md border
                      ${selectedColor === color
                        ? 'border-blue-900 bg-blue-50'
                        : 'border-gray-300 hover:border-blue-900'
                      }
                    `}
                    onClick={() => setSelectedColor(color)}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Quantity:</h3>
            <div className="flex items-center gap-2">
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 py-1 border rounded-md"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <Button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              fullWidth
              leftIcon={<ShoppingCart size={20} />}
            >
              Add to Cart
            </Button>
            <Button
              variant='outline'
              leftIcon={
                <Heart
                  size={20}
                  className="text-red-500"
                  fill={isInWishlist(product.id) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                />
              }
              onClick={() =>
                isInWishlist(product.id)
                  ? removeItem(product.id)
                  : addToWishlist(product)
              }
              fullWidth
            >
              {isInWishlist(product.id) ? 'Wishlisted' : 'Add to Wishlist'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;