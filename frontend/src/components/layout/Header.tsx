import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Heart, User, Menu, X, Search } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';
import { useAuthStore } from '../../store/authStore';
import Button from '../ui/Button';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const { getItemCount } = useCartStore();
  const { isAuthenticated, user } = useAuthStore();
  const itemCount = getItemCount();
  
  // Handle scroll event to change header appearance
useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);
  
  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-blue-900">
            ShopHub
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname === '/' ? 'text-blue-900' : 'text-gray-700'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/shop" 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname.startsWith('/shop') ? 'text-blue-900' : 'text-gray-700'
              }`}
            >
              Shop
            </Link>
            <Link 
              to="/categories" 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname.startsWith('/categories') ? 'text-blue-900' : 'text-gray-700'
              }`}
            >
              Categories
            </Link>
            <Link 
              to="/about" 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname === '/about' ? 'text-blue-900' : 'text-gray-700'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`text-sm font-medium transition-colors hover:text-blue-700 ${
                pathname === '/contact' ? 'text-blue-900' : 'text-gray-700'
              }`}
            >
              Contact
            </Link>
          </nav>
          
          {/* Search, Cart, Wishlist, Account */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="p-2 text-gray-700 hover:text-blue-900 transition-colors">
              <Search size={20} />
            </button>
            
            <Link 
              to="/wishlist" 
              className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
            >
              <Heart size={20} />
            </Link>
            
            <Link 
              to="/cart" 
              className="p-2 text-gray-700 hover:text-blue-900 transition-colors relative"
            >
              <ShoppingCart size={20} />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
            
            {isAuthenticated ? (
              <Link 
                to="/account" 
                className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
              >
                <User size={20} />
              </Link>
            ) : (
              <Link to="/login">
                <Button variant="outline" size="sm">
                  Sign In
                </Button>
              </Link>
            )}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-gray-700" 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname === '/' ? 'text-blue-900' : 'text-gray-700'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/shop" 
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname.startsWith('/shop') ? 'text-blue-900' : 'text-gray-700'
                }`}
              >
                Shop
              </Link>
              <Link 
                to="/categories" 
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname.startsWith('/categories') ? 'text-blue-900' : 'text-gray-700'
                }`}
              >
                Categories
              </Link>
              <Link 
                to="/about" 
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname === '/about' ? 'text-blue-900' : 'text-gray-700'
                }`}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className={`text-base font-medium transition-colors hover:text-blue-700 ${
                  pathname === '/contact' ? 'text-blue-900' : 'text-gray-700'
                }`}
              >
                Contact
              </Link>
              <div className="flex items-center space-x-4 pt-2 border-t border-gray-200">
                <Link 
                  to="/wishlist" 
                  className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
                >
                  <Heart size={20} />
                </Link>

                <Link 
                  to="/cart" 
                  className="p-2 text-gray-700 hover:text-blue-900 transition-colors relative"
                >
                  <ShoppingCart size={20} />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Link>

                {isAuthenticated ? (
                  <Link 
                    to="/account" 
                    className="p-2 text-gray-700 hover:text-blue-900 transition-colors"
                  >
                    <User size={20} />
                  </Link>
                ) : (
                  <Link to="/login" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
