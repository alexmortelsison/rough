"use client"; // This component must be interactive

import Image from "next/image";
import { useDispatch } from "react-redux";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/features/cartSlice";

interface ProductProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
  };
}

export default function ProductCard({ product }: ProductProps) {
  const dispatch = useDispatch();

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={400}
          className="rounded-md object-cover h-80"
        />
      </div>
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">${product.price.toFixed(2)}</p>
      <Button
        onClick={
          () => dispatch(addToCart({ ...product, quantity: 1 }))
        }
        className="mt-2 w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
}
