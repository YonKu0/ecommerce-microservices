import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Sleek Wireless Earbuds',
    description: 'Premium wireless earbuds with noise cancellation and crystal clear sound quality.',
    price: 129.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.7,
    inStock: true,
    features: ['Active Noise Cancellation', '24-hour battery life', 'Water resistant', 'Touch controls'],
    colors: ['Black', 'White', 'Navy']
  },
  {
    id: '2',
    name: 'Premium Smart Watch',
    description: 'Feature-rich smartwatch with health monitoring and stylish design.',
    price: 249.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.5,
    inStock: true,
    features: ['Heart rate monitor', 'Sleep tracking', 'GPS', 'Water resistant up to 50m'],
    colors: ['Silver', 'Black', 'Rose Gold']
  },
  {
    id: '3',
    name: 'Designer Leather Backpack',
    description: 'Stylish and functional backpack made from genuine leather.',
    price: 179.99,
    category: 'Fashion',
    image: 'https://images.pexels.com/photos/1546003/pexels-photo-1546003.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.8,
    inStock: true,
    features: ['Genuine leather', 'Laptop compartment', 'Multiple pockets', 'Adjustable straps'],
    colors: ['Brown', 'Black', 'Tan']
  },
  {
    id: '4',
    name: 'Artisan Coffee Maker',
    description: 'Professional-grade coffee maker for the perfect brew every time.',
    price: 199.99,
    category: 'Home',
    image: 'https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    inStock: true,
    features: ['Precise temperature control', 'Multiple brewing modes', 'Built-in grinder', 'Timer function'],
    colors: ['Silver', 'Black', 'White']
  },
  {
    id: '5',
    name: 'Ultra-slim Laptop',
    description: 'Powerful and lightweight laptop for professionals on the go.',
    price: 1299.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/18105/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.9,
    inStock: false,
    features: ['16" Retina Display', '32GB RAM', '1TB SSD', '12-hour battery life'],
    colors: ['Space Gray', 'Silver']
  },
  {
    id: '6',
    name: 'Sustainable Water Bottle',
    description: 'Eco-friendly insulated water bottle that keeps drinks cold for 24 hours.',
    price: 34.99,
    category: 'Lifestyle',
    image: 'https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.4,
    inStock: true,
    features: ['BPA-free', '24-hour cold retention', '12-hour hot retention', 'Leak-proof design'],
    colors: ['Ocean Blue', 'Forest Green', 'Matte Black', 'Pink']
  },
  {
    id: '7',
    name: 'Wireless Charging Pad',
    description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
    price: 49.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/4526407/pexels-photo-4526407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.3,
    inStock: true,
    features: ['15W fast charging', 'Multi-device support', 'Slim design', 'LED indicator'],
    colors: ['Black', 'White']
  },
  {
    id: '8',
    name: 'Smart Home Speaker',
    description: 'Voice-controlled smart speaker with premium sound quality.',
    price: 179.99,
    category: 'Electronics',
    image: 'https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4.6,
    inStock: true,
    features: ['360° sound', 'Voice assistant', 'Multi-room audio', 'Streaming services integration'],
    colors: ['Charcoal', 'Chalk', 'Coral']
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getCategories = (): string[] => {
  return [...new Set(products.map(product => product.category))];
};