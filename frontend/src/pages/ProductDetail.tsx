import { useParams, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import products from "@/data/products.json";

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="flex flex-col min-h-screen">
        <Navbar cartItemCount={0} cartSubtotal={0} />
        <main className="flex-1 p-8 flex items-center justify-center">
          <div className="alert alert-error">
            <span>Product not found</span>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={0} cartSubtotal={0} />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <button onClick={() => navigate("/")} className="btn btn-ghost mb-6">
            ← Back to Shopping
          </button>
          
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <figure>
                  <img src={product.image} alt={product.name} className="w-full rounded-lg" />
                </figure>
                
                <div>
                  <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
                  <p className="badge badge-lg mb-4">{product.category}</p>
                  <p className="text-gray-600 mb-6">{product.description}</p>
                  
                  <div className="mb-6">
                    <p className="text-4xl font-bold text-primary">${product.price}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <button className="btn btn-primary btn-block">Add to Cart</button>
                    <button className="btn btn-outline btn-block">Buy Now</button>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="space-y-2">
                    <h3 className="font-bold">Features:</h3>
                    <ul className="list-disc list-inside text-sm space-y-1">
                      <li>High quality materials</li>
                      <li>Premium design</li>
                      <li>Excellent warranty</li>
                      <li>Fast shipping</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}