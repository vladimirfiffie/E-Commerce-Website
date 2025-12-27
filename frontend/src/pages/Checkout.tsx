import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Checkout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar cartItemCount={0} cartSubtotal={0} />
      <main className="flex-1 p-8">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">Checkout</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Checkout Form */}
            <div className="md:col-span-2">
              <div className="card bg-base-100 shadow-lg">
                <div className="card-body">
                  <h2 className="card-title">Shipping Information</h2>
                  
                  <form className="space-y-4">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Full Name</span>
                      </label>
                      <input type="text" placeholder="John Doe" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="john@example.com" className="input input-bordered" />
                    </div>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Address</span>
                      </label>
                      <input type="text" placeholder="123 Main St" className="input input-bordered" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">City</span>
                        </label>
                        <input type="text" placeholder="New York" className="input input-bordered" />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">ZIP Code</span>
                        </label>
                        <input type="text" placeholder="10001" className="input input-bordered" />
                      </div>
                    </div>
                    
                    <h2 className="card-title mt-8">Payment Information</h2>
                    
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Card Number</span>
                      </label>
                      <input type="text" placeholder="1234 5678 9012 3456" className="input input-bordered" />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Expiry Date</span>
                        </label>
                        <input type="text" placeholder="MM/YY" className="input input-bordered" />
                      </div>
                      
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">CVV</span>
                        </label>
                        <input type="text" placeholder="123" className="input input-bordered" />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* Order Summary */}
            <div>
              <div className="card bg-base-100 shadow-lg sticky top-4">
                <div className="card-body">
                  <h2 className="card-title">Order Summary</h2>
                  
                  <div className="divider"></div>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>$9.99</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                  
                  <div className="divider"></div>
                  
                  <div className="flex justify-between text-lg font-bold mb-6">
                    <span>Total</span>
                    <span>$9.99</span>
                  </div>
                  
                  <button className="btn btn-primary btn-block">Complete Purchase</button>
                  <a href="/cart" className="btn btn-ghost btn-block">Back to Cart</a>
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