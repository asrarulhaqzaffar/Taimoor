// App.js - Main TAIMOOR Grocery Website Component
import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Menu, X, Phone, Mail, MapPin } from 'lucide-react';

export default function TaimoorGrocery() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [favorites, setFavorites] = useState({});
  const [scrollY, setScrollY] = useState(0);

  // Business Information - SAVED FOR TAIMOOR
  const businessInfo = {
    name: 'TAIMOOR',
    domain: 'taimoor',
    contact: 'asrarulhaqzaffar',
    address: 'Jammu and Kashmir',
    phone: '+91-XXXXXXXXXX',
    email: 'contact@taimoor.com',
  };

  // Products Database
  const products = [
    { 
      id: 1, 
      name: 'Crimson Apples', 
      price: 120, 
      emoji: '🍎', 
      category: 'Fruits',
      color: 'from-red-500 to-pink-500', 
      light: 'from-red-200 to-pink-200',
      rating: 4.8
    },
    { 
      id: 2, 
      name: 'Golden Carrots', 
      price: 45, 
      emoji: '🥕', 
      category: 'Vegetables',
      color: 'from-orange-500 to-yellow-500', 
      light: 'from-orange-200 to-yellow-200',
      rating: 4.9
    },
    { 
      id: 3, 
      name: 'Ruby Tomatoes', 
      price: 55, 
      emoji: '🍅', 
      category: 'Vegetables',
      color: 'from-red-600 to-orange-500', 
      light: 'from-red-200 to-orange-200',
      rating: 4.7
    },
    { 
      id: 4, 
      name: 'Sunshine Bananas', 
      price: 50, 
      emoji: '🍌', 
      category: 'Fruits',
      color: 'from-yellow-500 to-amber-500', 
      light: 'from-yellow-200 to-amber-200',
      rating: 4.9
    },
    { 
      id: 5, 
      name: 'Emerald Greens', 
      price: 35, 
      emoji: '🥬', 
      category: 'Vegetables',
      color: 'from-green-600 to-emerald-500', 
      light: 'from-green-200 to-emerald-200',
      rating: 4.8
    },
    { 
      id: 6, 
      name: 'Sweet Corn', 
      price: 40, 
      emoji: '🌽', 
      category: 'Vegetables',
      color: 'from-yellow-600 to-lime-500', 
      light: 'from-yellow-200 to-lime-200',
      rating: 4.6
    },
    { 
      id: 7, 
      name: 'Pure Milk', 
      price: 60, 
      emoji: '🥛', 
      category: 'Dairy',
      color: 'from-blue-400 to-cyan-400', 
      light: 'from-blue-100 to-cyan-100',
      rating: 4.8
    },
    { 
      id: 8, 
      name: 'Farm Eggs', 
      price: 90, 
      emoji: '🥚', 
      category: 'Dairy',
      color: 'from-amber-500 to-orange-500', 
      light: 'from-amber-200 to-orange-200',
      rating: 4.9
    },
  ];

  // Mouse tracking for effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Add to cart function
  const addToCart = (productId) => {
    setCartCount(cartCount + 1);
    alert(`Product added to cart! Total items: ${cartCount + 1}`);
  };

  // Toggle favorite/wishlist
  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  // CSS Styles
  const styles = `
    @keyframes magnetic-bounce {
      0%, 100% { transform: translateY(0) scale(1); }
      25% { transform: translateY(-40px) scale(0.9); }
      50% { transform: translateY(-70px) scale(1.15); }
      75% { transform: translateY(-35px) scale(0.95); }
    }

    @keyframes glow-pulse {
      0%, 100% {
        box-shadow: 0 0 20px rgba(34, 197, 94, 0.6), 
                    0 0 40px rgba(74, 222, 128, 0.4);
      }
      50% {
        box-shadow: 0 0 50px rgba(34, 197, 94, 1), 
                    0 0 80px rgba(74, 222, 128, 0.6);
      }
    }

    @keyframes float-animation {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-20px); }
    }

    .magnetic-bounce { animation: magnetic-bounce 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; }
    .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
    .float-animation { animation: float-animation 3s ease-in-out infinite; }

    .super-hover {
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .super-hover:hover {
      transform: translateY(-15px) scale(1.05);
      box-shadow: 0 20px 40px rgba(34, 197, 94, 0.3);
    }

    .gradient-text {
      background: linear-gradient(135deg, #22c55e, #4ade80, #bbf7d0);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 text-gray-800">
        
        {/* Mouse Glow Effect */}
        <div
          className="fixed pointer-events-none z-0"
          style={{
            width: '400px',
            height: '400px',
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.2) 0%, transparent 100%)',
            left: `${mousePos.x}px`,
            top: `${mousePos.y}px`,
            transform: 'translate(-50%, -50%)',
            filter: 'blur(80px)',
          }}
        />

        {/* Navigation Bar */}
        <nav className="relative backdrop-blur-md bg-white/80 border-b-4 border-green-500 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="text-3xl font-black gradient-text float-animation">
              🛒 {businessInfo.name}
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="font-bold text-gray-700 hover:text-green-600 transition">Home</a>
              <a href="#products" className="font-bold text-gray-700 hover:text-green-600 transition">Shop</a>
              <a href="#about" className="font-bold text-gray-700 hover:text-green-600 transition">About</a>
              <a href="#contact" className="font-bold text-gray-700 hover:text-green-600 transition">Contact</a>
            </div>

            {/* Cart & Menu Button */}
            <div className="flex items-center gap-4">
              <button className="relative super-hover p-3 bg-green-100 rounded-full hover:bg-green-200 glow-pulse">
                <ShoppingCart className="text-green-600" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white font-bold rounded-full w-6 h-6 flex items-center justify-center text-sm">
                    {cartCount}
                  </span>
                )}
              </button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden super-hover p-3 bg-green-100 rounded-full"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t border-green-200 p-4 space-y-3">
              <a href="#home" className="block font-bold text-gray-700 hover:text-green-600">Home</a>
              <a href="#products" className="block font-bold text-gray-700 hover:text-green-600">Shop</a>
              <a href="#about" className="block font-bold text-gray-700 hover:text-green-600">About</a>
              <a href="#contact" className="block font-bold text-gray-700 hover:text-green-600">Contact</a>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="relative py-24 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <h1 className="text-6xl md:text-7xl font-black text-green-700 leading-tight">
                  Fresh Groceries,
                  <br />
                  <span className="text-green-500">Delivered Daily</span>
                </h1>
                <p className="text-xl text-gray-600 font-semibold">
                  Premium quality organic vegetables, fruits, and dairy products sourced directly from local farms in Jammu & Kashmir.
                </p>
                <div className="flex gap-4 flex-wrap">
                  <button className="px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-black rounded-xl super-hover shadow-lg hover:shadow-2xl">
                    🛍️ Shop Now
                  </button>
                  <button className="px-8 py-4 bg-white border-4 border-green-500 text-green-600 font-black rounded-xl super-hover shadow-lg">
                    📞 Call Now
                  </button>
                </div>
              </div>
              <div className="text-8xl text-center float-animation">
                🥬🥕🍎🥒
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-20 px-6 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center text-green-700 mb-16">Why Choose {businessInfo.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { icon: '🌱', title: 'Organic', desc: '100% Natural Products' },
                { icon: '🚚', title: 'Fast Delivery', desc: 'Same Day Service' },
                { icon: '⭐', title: 'Premium Quality', desc: 'Best Selection' },
                { icon: '🕐', title: '24/7 Open', desc: 'Always Available' },
              ].map((feature, idx) => (
                <div key={idx} className="super-hover bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-4 border-green-200 text-center shadow-lg">
                  <div className="text-5xl mb-4 text-center magnetic-bounce">{feature.icon}</div>
                  <h3 className="text-2xl font-black text-green-700 mb-2">{feature.title}</h3>
                  <p className="text-gray-600 font-semibold">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="relative py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-5xl font-black text-center text-green-700 mb-4">Featured Products</h2>
            <p className="text-center text-gray-600 font-bold mb-16">Fresh inventory updated daily</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="super-hover bg-white rounded-2xl overflow-hidden border-4 border-green-200 shadow-lg">
                  <div className={`bg-gradient-to-br ${product.light} p-8 text-center text-6xl h-40 flex items-center justify-center`}>
                    {product.emoji}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-black text-green-700 mb-2">{product.name}</h3>
                    <p className="text-sm font-bold text-gray-500 mb-3">{product.category}</p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-3xl font-black text-green-600">₹{product.price}</div>
                      <div className="flex items-center gap-1">
                        <Star size={18} className="text-yellow-500 fill-yellow-500" />
                        <span className="font-bold text-gray-700">{product.rating}</span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => addToCart(product.id)}
                        className="flex-1 bg-green-500 hover:bg-green-600 text-white font-black py-3 rounded-lg transition hover:shadow-lg"
                      >
                        🛒 Add
                      </button>
                      <button 
                        onClick={() => toggleFavorite(product.id)}
                        className={`px-4 py-3 rounded-lg font-black transition ${
                          favorites[product.id]
                            ? 'bg-red-100 text-red-600'
                            : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                        }`}
                      >
                        {favorites[product.id] ? '❤️' : '🤍'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 px-6 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-center text-green-700 mb-12">About {businessInfo.name}</h2>
            <div className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-12 border-4 border-green-200 shadow-lg">
              <p className="text-lg text-gray-700 font-semibold mb-6">
                {businessInfo.name} is your trusted grocery destination in {businessInfo.address}. We believe in providing the freshest, highest quality organic products directly from local farms to your doorstep.
              </p>
              <p className="text-lg text-gray-700 font-semibold mb-6">
                Founded with a vision to make healthy living accessible and affordable, we carefully select every product to ensure you get the best nature has to offer.
              </p>
              <div className="grid grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-black text-green-600">500+</div>
                  <p className="text-gray-600 font-bold">Products</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-600">10K+</div>
                  <p className="text-gray-600 font-bold">Customers</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-green-600">100%</div>
                  <p className="text-gray-600 font-bold">Organic</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="relative py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-black text-center text-green-700 mb-12">Contact Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="super-hover rounded-2xl p-8 border-4 border-green-200 bg-blue-50 text-center shadow-lg">
                <Phone className="mx-auto text-blue-600 mb-4" size={48} />
                <h3 className="text-2xl font-black text-green-700 mb-2">Phone</h3>
                <p className="text-lg text-gray-700 font-bold">{businessInfo.phone}</p>
              </div>
              <div className="super-hover rounded-2xl p-8 border-4 border-green-200 bg-red-50 text-center shadow-lg">
                <Mail className="mx-auto text-red-600 mb-4" size={48} />
                <h3 className="text-2xl font-black text-green-700 mb-2">Email</h3>
                <p className="text-lg text-gray-700 font-bold">{businessInfo.email}</p>
              </div>
              <div className="super-hover rounded-2xl p-8 border-4 border-green-200 bg-green-50 text-center shadow-lg">
                <MapPin className="mx-auto text-green-600 mb-4" size={48} />
                <h3 className="text-2xl font-black text-green-700 mb-2">Address</h3>
                <p className="text-lg text-gray-700 font-bold">{businessInfo.address}</p>
              </div>
              <div className="super-hover rounded-2xl p-8 border-4 border-green-200 bg-yellow-50 text-center shadow-lg">
                <p className="text-3xl mb-4">📱</p>
                <h3 className="text-2xl font-black text-green-700 mb-2">Contact Person</h3>
                <p className="text-lg text-gray-700 font-bold">{businessInfo.contact}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="relative py-20 px-6 bg-gradient-to-r from-green-600 to-green-500">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-5xl font-black mb-6">Subscribe for Fresh Updates</h2>
            <p className="text-xl font-bold mb-8 text-white/90">Get daily deals and fresh product notifications</p>
            <div className="flex gap-4 max-w-md mx-auto flex-col md:flex-row">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 px-6 py-4 rounded-xl font-bold text-gray-800 placeholder-gray-500"
              />
              <button className="px-8 py-4 bg-white text-green-600 font-black rounded-xl hover:shadow-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-green-900 text-white py-12 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <h4 className="text-2xl font-black mb-4">{businessInfo.name}</h4>
                <p className="font-bold text-green-200">Fresh Groceries, Daily Delivery</p>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4">Quick Links</h4>
                <ul className="space-y-2 font-bold">
                  <li><a href="#home" className="hover:text-green-300">Home</a></li>
                  <li><a href="#products" className="hover:text-green-300">Shop</a></li>
                  <li><a href="#about" className="hover:text-green-300">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4">Company</h4>
                <ul className="space-y-2 font-bold">
                  <li><a href="#" className="hover:text-green-300">Privacy Policy</a></li>
                  <li><a href="#" className="hover:text-green-300">Terms & Conditions</a></li>
                  <li><a href="#" className="hover:text-green-300">Refund Policy</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-xl mb-4">Contact</h4>
                <p className="font-bold text-green-200 mb-2">👤 {businessInfo.contact}</p>
                <p className="font-bold text-green-200">📍 {businessInfo.address}</p>
              </div>
            </div>
            <div className="border-t border-green-700 pt-8 text-center">
              <p className="font-bold text-green-300">© 2024 {businessInfo.name}.com - Fresh Organic Groceries. All rights reserved! 🛒</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
