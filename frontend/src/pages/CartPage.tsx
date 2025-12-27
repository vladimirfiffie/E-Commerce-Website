import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CartPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={0} cartSubtotal={0} />
      <main className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <p className="text-center text-gray-500 py-8">Your cart is empty</p>
              <div className="card-actions justify-center">
                <a href="/" className="btn btn-primary">
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}