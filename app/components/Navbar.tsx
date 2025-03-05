"use client";

import Link from "next/link";
import { useSession, signOut, signIn } from "next-auth/react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  return (
    <nav className="flex items-center justify-between p-4 bg-white shadow-md">
      <Link href="/">
        <h1 className="text-2xl font-bold">Wealy Clothing</h1>
      </Link>

      <div className="flex items-center gap-4">
        {session ? (
          <Button onClick={() => signOut()}>Logout</Button>
        ) : (
          <Button onClick={() => signIn("google")}>Login</Button>
        )}

        <Link href="/cart">
          <div className="relative cursor-pointer">
            <ShoppingCart className="w-6 h-6" />
            {cartItems.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 rounded-full">
                {cartItems.length}
              </span>
            )}
          </div>
        </Link>
      </div>
    </nav>
  );
}
