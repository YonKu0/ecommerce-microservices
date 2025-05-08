import { Link } from 'react-router-dom';
import { products } from '../data/products';
import { Card } from '../components/ui/Card';

const HomePage = () => {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to ShopHub</h1>
          <p className="text-lg md:text-xl mb-8">Discover amazing products at great prices</p>
          <Link
            to="/shop"
            className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card hoverable className="h-full">
                <Card.Image src={product.image} alt={product.name} />
                <Card.Content>
                  <h3 className="font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-400">★</span>
                    <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                  </div>
                </Card.Content>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-emerald-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Free Shipping</h3>
          <p className="text-gray-600">On orders over $50</p>
        </div>
        <div className="bg-blue-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
          <p className="text-gray-600">Here to help anytime</p>
        </div>
        <div className="bg-purple-100 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
          <p className="text-gray-600">100% protected transactions</p>
        </div>
      </section>
    </div>
  );
};

export default HomePage;