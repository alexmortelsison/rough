"use client";

import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import Signin from "./Signin";
import { ShoppingCartIcon } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  return (
    <div className="flex max-w-7xl mx-auto justify-between py-4 border-b">
      <Link href={"/"}>
        <h1 className="text-4xl font-extrabold">rough.</h1>
      </Link>
      <div className="flex relative items-center">
        <Signin />
        <Link href={"/cart"}>
          <ShoppingCartIcon />
          {cartItems.length > 0 && (
            <span className="absolute -top-0 -right-2 text-xs bg-red-500 rounded-full px-2 py-1 text-white">
              {cartItems.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
}
