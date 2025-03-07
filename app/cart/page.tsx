"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearCart, removeFromCart } from "@/store/features/cartSlice";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Trash } from "lucide-react";

export default function CartPage() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = useSelector((state: RootState) => state.cart.totalAmount);
  const dispatch = useDispatch();

  const handleCheckout = async () => {
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ cartItems }),
      });
      if (!res.ok) {
        throw new Error("Failed to create checkout session");
      }
      const data = await res.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Checkout Error:", error);
    }
  };

  return (
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

      {cartItems.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-4 rounded-lg shadow-md bg-white"
            >
              <div className="w-24 h-24 relative">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="rounded-md object-cover"
                />
              </div>

              <div className="flex-1 px-4">
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
                <p className="text-gray-500 text-sm">
                  Quantity: {item.quantity}
                </p>
              </div>

         
              <Button
                variant="destructive"
                onClick={() => dispatch(removeFromCart(item.id))}
                className="flex items-center gap-2 bg-red-500"
              >
                <Trash className="w-4 h-4" /> Remove
              </Button>
            </div>
          ))}

    
          <h3 className="text-xl font-bold mt-6 text-center">
            Total: ${totalAmount.toFixed(2)}
          </h3>

      
          <div className="mt-6 flex flex-col gap-3">
            <Button
              onClick={handleCheckout}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Proceed to Checkout
            </Button>
            <Button
              variant="destructive"
              onClick={() => dispatch(clearCart())}
              className="w-full"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </main>
  );
}
