import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Star, Menu, X } from 'lucide-react';

export default function TaimoorPremium() {
  const [cartCount, setCartCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [favorites, setFavorites] = useState({});

  const businessInfo = {
    name: 'TAIMOOR',
    domain: 'taimoor',
    contact: 'asrarulhaqzaffar',
    address: 'Jammu and Kashmir',
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const styles = `
    @keyframes magnetic-bounce {
      0%, 100% { transform: translateY(0) scale(1); }
      25% { transform: translateY(-40px) scale(0.9); }
      50% { transform: translateY(-70px) scale(1.15); }
      75% { transform: translateY(-35px) scale(0.95); }
    }

    @keyframes glow-pulse {
      0%, 100% { box-shadow: 0 0 20px rgba(34, 197, 94, 0.8), 0 0 40px rgba(74, 222, 128, 0.6); }
      50% { box-shadow: 0 0 50px rgba(34, 197, 94, 1), 0 0 80px rgba(74, 222, 128, 0.8); }
    }

    @keyframes float-animation {
      0%, 100% { transform: translateY(0) rotateZ(0deg); }
      25% { transform: translateY(-20px) rotateZ(5deg); }
      50% { transform: translateY(-40px) rotateZ(0deg); }
      75% { transform: translateY(-20px) rotateZ(-5deg); }
    }

    @keyframes shimmer-wave {
      0% { background-position: -1000px 0; }
      100% { background-position: 1000px 0; }
    }

    @keyframes liquid-blob {
      0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
      25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; }
      50% { border-radius: 70% 30% 60% 40% / 40% 50% 60% 70%; }
      75% { border-radius: 40% 70% 30% 60% / 70% 40% 50% 30%; }
    }

    @keyframes neon-flicker {
      0%, 19%, 21%, 23%, 25%, 54%, 56%, 100% {
        text-shadow: 0 0 10px #22c55e, 0 0 20px #4ade80;
        color: #22c55e;
      }
      20%, 24%, 55% {
        text-shadow: 0 0 30px #4ade80, 0 0 50px #22c55e;
        color: #4ade80;
      }
    }

    @keyframes particle-rise {
      0% { transform: translateY(0) translateX(0); opacity: 1; }
      100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
    }

    @keyframes rainbow-glow {
      0% { filter: drop-shadow(0 0 15px #ff006e) drop-shadow(0 0 30px #8338ec); }
      50% { filter: drop-shadow(0 0 25px #3a86ff) drop-shadow(0 0 50px #fb5607); }
      100% { filter: drop-shadow(0 0 15px #ff006e) drop-shadow(0 0 30px #8338ec); }
    }

    .magnetic-bounce { animation: magnetic-bounce 1.8s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite; }
    .glow-pulse { animation: glow-pulse 3s ease-in-out infinite; }
    .float-animation { animation: float-animation 4s ease-in-out infinite; }
    .neon-flicker { animation: neon-flicker 2s infinite; }
    .rainbow { animation: rainbow-glow 4s ease infinite; }

    .super-hover {
      transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }

    .super-hover:hover {
      transform: translateY(-20px) scale(1.08) rotate(3deg);
      filter: drop-shadow(0 30px 60px rgba(34, 197, 94, 0.5));
    }

    .gradient-shimmer {
      background: linear-gradient(90deg, #22c55e, #4ade80, #bbf7d0, #22c55e);
      background-size: 300% 100%;
      animation: shimmer-wave 3s infinite;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .liquid-blob { animation: liquid-blob 6s ease-in-out infinite; }
  `;

  const products = [
    { id: 1, name: 'Crimson Apples', price: 120, emoji: '🍎', color: 'from-red-500 to-pink-500', light: 'from-red-200 to-pink-200', rating: 4.8 },
    { id: 2, name: 'Golden Carrots', price: 45, emoji: '🥕', color: 'from-orange-500 to-yellow-500', light: 'from-orange-200 to-yellow-200', rating: 4.9 },
    { id: 3, name: 'Ruby Tomatoes', price: 55, emoji: '🍅', color: 'from-red-600 to-orange-500', light: 'from-red-200 to-orange-200', rating: 4.7 },
    { id: 4, name: 'Sunshine Bananas', price: 50, emoji: '🍌', color: 'from-yellow-500 to-amber-500', light: 'from-yellow-200 to-amber-200', rating: 4.9 },
    { id: 5, name: 'Emerald Greens', price: 35, emoji: '🥬', color: 'from-green-600 to-emerald-500', light: 'from-green-200 to-emerald-200', rating: 4.8 },
    { id: 6, name: 'Sweet Corn', price: 40, emoji: '🌽', color: 'from-yellow-600 to-lime-500', light: 'from-yellow-200 to-lime-200', rating: 4.6 },
    { id: 7, name: 'Pure Milk', price: 60, emoji: '🥛', color: 'from-blue-400 to-cyan-400', light: 'from-blue-100 to-cyan-100', rating: 4.8 },
    { id: 8, name: 'Farm Eggs', price: 90, emoji: '🥚', color: 'from-amber-500 to-orange-500', light: 'from-amber-200 to-orange-200', rating: 4.9 },
  ];

  const addToCart = () => setCartCount(cartCount + 1);
  const toggleFavorite = (id) => {
    setFavorites(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      <style>{styles}</style>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-50 text-gray-800 overflow-hidden">
        
        {/* Animated Particles */}
        <div className="fixed inset-0 pointer-events-none z-0">
          {[...Array(40)].map((_, i) => (
            <div key={i} className="absolute text-3xl opacity-30" style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `particle-rise ${Math.random() * 4 + 3}s linear infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}>
              {['🍎', '🥕', '🍌', '🥬', '🌽', '🍅'][Math.floor(Math.random() * 6)]}
            </div>
          ))}
        </div>

        {/* Mouse Glow */}
        <div className="fixed pointer-events-none z-10 mix-blend-screen" style={{
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(34, 197, 94, 0.3) 0%, rgba(74, 222, 128, 0.15) 50%, transparent 100%)',
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
          transform: 'translate(-50%, -50%)',
          filter: 'blur(100px)',
        }} />

        {/* Navigation */}
        <nav className="relative backdrop-blur-2xl bg-gradient-to-r from-green-400/40 to-emerald-400/40 border-b-8 border-green-500 sticky top-0 z-50 shadow-2xl">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div className="text-4xl font-black gradient-shimmer neon-flicker drop-shadow-lg float-animation">
              🌿 {businessInfo.name} 🌿
            </div>
            
            <div className="hidden md:flex items-center gap-10 text-lg">
              <a href="#home" className="font-black text-green-700 hover:text-green-600 transition">HOME</a>
              <a href="#products" className="font-black text-green-700 hover:text-green-600 transition">SHOP</a>
              <a href="#about" className="font-black text-green-700 hover:text-green-600 transition">ABOUT</a>
              <a href="#contact" className="font-black text-green-700 hover:text-green-600 transition">CONTACT</a>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative super-hover p-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full glow-pulse shadow-xl">
                <ShoppingCart className="text-white" size={28} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-gradient-to-r from-pink-500 to-red-600 text-white font-black rounded-full w-8 h-8 flex items-center justify-center text-sm glow-pulse">
                    {cartCount}
                  </span>
                )}
              </button>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden super-hover p-4 bg-green-500 rounded-full">
                {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden bg-white/90 backdrop-blur-lg border-t-4 border-green-300 p-6 space-y-4">
              <a href="#home" className="block font-black text-green-700 text-lg">HOME</a>
              <a href="#products" className="block font-black text-green-700 text-lg">SHOP</a>
              <a href="#about" className="block font-black text-green-700 text-lg">ABOUT</a>
              <a href="#contact" className="block font-black text-green-700 text-lg">CONTACT</a>
            </div>
          )}
        </nav>

        {/* Hero */}
        <section id="home" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-10">
                <h1 className="text-7xl md:text-8xl font-black leading-tight">
                  <span className="gradient-shimmer">FRESH</span><br />
                  <span className="text-green-600 neon-flicker">ORGANIC</span>
                </h1>
                <p className="text-2xl text-green-700 font-black drop-shadow-lg">
                  🌾 Premium groceries from {businessInfo.address}, delivered at lightning speed!
                </p>
                <div className="flex gap-6 flex-wrap">
                  <button className="px-12 py-6 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black rounded-2xl super-hover text-lg glow-pulse shadow-2xl border-4 border-green-300">
                    🛒 SHOP NOW
                  </button>
                  <button className="px-12 py-6 bg-white border-4 border-green-500 text-green-700 font-black rounded-2xl super-hover text-lg shadow-xl">
                    📱 CALL US
                  </button>
                </div>
              </div>
              <div className="relative h-96 flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-30 liquid-blob"></div>
                <div className="relative text-9xl magnetic-bounce drop-shadow-2xl rainbow">🥬</div>
                <div className="absolute text-8xl float-animation drop-shadow-xl">🍎</div>
              </div>
            </div>
          </div>

          <div className="absolute top-40 left-20 w-96 h-96 bg-gradient-to-br from-green-300 to-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 liquid-blob"></div>
          <div className="absolute bottom-40 right-20 w-80 h-80 bg-gradient-to-br from-lime-300 to-green-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 liquid-blob" style={{ animationDelay: '-2s' }}></div>
        </section>

        {/* Features */}
        <section className="relative py-32 px-6 bg-white border-t-8 border-green-500">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-7xl font-black text-center gradient-shimmer mb-20">WHY {businessInfo.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { emoji: '🌱', title: 'ORGANIC', desc: '100% Pure', num: '01' },
                { emoji: '⚡', title: 'FAST', desc: 'Same Day', num: '02' },
                { emoji: '👨‍🌾', title: 'LOCAL', desc: 'Farm Direct', num: '03' },
                { emoji: '💚', title: 'HEALTHY', desc: 'No Chemicals', num: '04' },
              ].map((f, i) => (
                <div key={i} className="super-hover group relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 blur-xl"></div>
                  <div className="relative bg-gradient-to-br from-green-50 to-white border-4 border-green-500 rounded-3xl p-10 text-center glow-pulse">
                    <div className="text-7xl mb-6 magnetic-bounce">{f.emoji}</div>
                    <div className="text-6xl font-black text-green-500/30 mb-3">{f.num}</div>
                    <h3 className="text-3xl font-black text-green-700 mb-3 neon-flicker">{f.title}</h3>
                    <p className="text-lg font-bold text-green-600">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="products" className="relative py-32 px-6 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-24">
              <h2 className="text-7xl font-black gradient-shimmer mb-6">PREMIUM HARVEST</h2>
              <p className="text-2xl font-bold text-green-700">✨ Fresh Daily ✨</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((p, idx) => (
                <div key={p.id} className="super-hover group">
                  <div className={`bg-gradient-to-br ${p.light} rounded-3xl overflow-hidden border-6 border-green-500 glow-pulse relative h-full flex flex-col`}>
                    <div className={`bg-gradient-to-br ${p.color} p-12 h-56 flex items-center justify-center group-hover:shadow-2xl transition-all`}>
                      <div className="text-8xl magnetic-bounce drop-shadow-2xl">{p.emoji}</div>
                    </div>
                    <div className="p-8 flex-1 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-black text-green-700 mb-3 neon-flicker">{p.name}</h3>
                        <div className="flex items-center justify-between">
                          <div className="text-4xl font-black text-green-600">₹{p.price}</div>
                          <div className="flex items-center gap-1">
                            <Star size={20} className="text-yellow-500 fill-yellow-500" />
                            <span className="font-black">{p.rating}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-3 mt-6">
                        <button onClick={() => addToCart()} className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-black py-4 rounded-2xl super-hover glow-pulse text-lg shadow-lg">
                          🛒 ADD
                        </button>
                        <button onClick={() => toggleFavorite(p.id)} className={`px-6 py-4 rounded-2xl font-black text-2xl super-hover ${favorites[p.id] ? 'bg-red-300 glow-pulse' : 'bg-gray-200'}`}>
                          {favorites[p.id] ? '❤️' : '🤍'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="relative py-32 px-6 bg-white border-t-8 border-green-500">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl font-black text-center gradient-shimmer mb-16">ABOUT {businessInfo.name}</h2>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 border-6 border-green-500 rounded-4xl p-16 glow-pulse shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <div className="space-y-8">
                  <p className="text-2xl text-green-800 font-black">🌾 {businessInfo.name} is a MOVEMENT towards fresher living!</p>
                  <p className="text-xl text-green-700 font-bold">Direct from farmers in {businessInfo.address}. 100% organic. Zero middlemen.</p>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center bg-white rounded-2xl p-6 border-4 border-green-500 glow-pulse">
                      <div className="text-5xl font-black text-green-600">500+</div>
                      <p className="text-lg font-bold text-green-700">PRODUCTS</p>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 border-4 border-green-500 glow-pulse">
                      <div className="text-5xl font-black text-green-600">10K+</div>
                      <p className="text-lg font-bold text-green-700">CUSTOMERS</p>
                    </div>
                    <div className="text-center bg-white rounded-2xl p-6 border-4 border-green-500 glow-pulse">
                      <div className="text-5xl font-black text-green-600">100%</div>
                      <p className="text-lg font-bold text-green-700">ORGANIC</p>
                    </div>
                  </div>
                </div>
                <div className="text-9xl text-center float-animation drop-shadow-2xl rainbow">🌿</div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="relative py-32 px-6 bg-gradient-to-b from-green-50 to-white">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-7xl font-black text-center gradient-shimmer mb-16">CONTACT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="super-hover bg-gradient-to-br from-blue-100 to-cyan-100 border-6 border-blue-500 rounded-3xl p-12 glow-pulse text-center shadow-xl">
                <div className="text-7xl mb-6">📱</div>
                <h3 className="text-3xl font-black text-blue-700 mb-4">PHONE</h3>
                <p className="text-2xl font-bold text-blue-600">+91-XXXXXXXXXX</p>
              </div>
              <div className="super-hover bg-gradient-to-br from-red-100 to-pink-100 border-6 border-red-500 rounded-3xl p-12 glow-pulse text-center shadow-xl">
                <div className="text-7xl mb-6">📧</div>
                <h3 className="text-3xl font-black text-red-700 mb-4">EMAIL</h3>
                <p className="text-2xl font-bold text-red-600">contact@taimoor.com</p>
              </div>
              <div className="super-hover bg-gradient-to-br from-green-100 to-emerald-100 border-6 border-green-500 rounded-3xl p-12 glow-pulse text-center shadow-xl">
                <div className="text-7xl mb-6">📍</div>
                <h3 className="text-3xl font-black text-green-700 mb-4">ADDRESS</h3>
                <p className="text-2xl font-bold text-green-600">{businessInfo.address}</p>
              </div>
              <div className="super-hover bg-gradient-to-br from-yellow-100 to-orange-100 border-6 border-yellow-500 rounded-3xl p-12 glow-pulse text-center shadow-xl">
                <div className="text-7xl mb-6">👤</div>
                <h3 className="text-3xl font-black text-yellow-700 mb-4">CONTACT</h3>
                <p className="text-2xl font-bold text-yellow-600">{businessInfo.contact}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="relative py-24 px-6 bg-gradient-to-r from-green-600 via-emerald-600 to-lime-600">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-5xl font-black mb-8 text-white drop-shadow-lg neon-flicker">FRESH UPDATES 📬</h2>
            <p className="text-2xl font-bold mb-8 text-white/90">Subscribe for exclusive deals</p>
            <div className="flex gap-4 max-w-md mx-auto flex-col md:flex-row">
              <input type="email" placeholder="Your email" className="flex-1 px-8 py-5 rounded-2xl font-bold text-gray-900 border-4 border-white text-lg" />
              <button className="px-10 py-5 bg-white text-green-700 font-black rounded-2xl super-hover text-lg glow-pulse border-4 border-white shadow-2xl">
                Subscribe
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="relative bg-gradient-to-br from-green-900 via-emerald-900 to-lime-900 text-white py-16 px-6 border-t-6 border-green-500">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
              <div>
                <h4 className="text-4xl font-black mb-6 gradient-shimmer neon-flicker">🌿 {businessInfo.name}</h4>
                <p className="font-bold text-green-300 text-lg">Fresh Organic Groceries</p>
              </div>
              <div>
                <h4 className="font-black text-2xl mb-6 text-green-300">QUICK LINKS</h4>
                <ul className="space-y-3 font-bold text-green-400">
                  <li><a href="#home" className="hover:text-green-300 transition text-lg">Home</a></li>
                  <li><a href="#products" className="hover:text-green-300 transition text-lg">Shop</a></li>
                  <li><a href="#about" className="hover:text-green-300 transition text-lg">About</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-2xl mb-6 text-green-300">COMPANY</h4>
                <ul className="space-y-3 font-bold text-green-400">
                  <li><a href="#" className="hover:text-green-300 transition text-lg">Privacy</a></li>
                  <li><a href="#" className="hover:text-green-300 transition text-lg">Terms</a></li>
                  <li><a href="#" className="hover:text-green-300 transition text-lg">FAQ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-black text-2xl mb-6 text-green-300">CONTACT</h4>
                <p className="font-bold text-green-400 mb-2 text-lg">👤 {businessInfo.contact}</p>
                <p className="font-bold text-green-400 text-lg">📍 {businessInfo.address}</p>
              </div>
            </div>
            <div className="border-t-4 border-green-700 pt-8 text-center">
              <p className="font-black text-green-400 text-lg">© 2024 {businessInfo.name} - Fresh Organic Groceries! 🛒</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
                               }
