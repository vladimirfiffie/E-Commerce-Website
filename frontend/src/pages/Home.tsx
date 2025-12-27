import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import products from "@/data/products.json";

export default function Home() {
  const [cart, setCart] = useState<any[]>([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setCartTotal(total);
  }, [cart]);

  const handleAddToCart = (product: any) => {
    setCart([...cart, product]);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={cart.length} cartSubtotal={cartTotal} />
      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-2">Welcome to Our Shop!</h1>
          <p className="text-gray-600 mb-8">Discover amazing products at great prices</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}