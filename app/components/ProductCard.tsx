"use client";
import { Button } from "@/components/ui/button";
import { addToCart } from "@/store/features/cartSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
}

export default function ProductCard({ product }: { product: ProductProps }) {
  const dispatch = useDispatch();
  return (
    <div className="border rounded-t-xl">
      <Image
        src={product.image}
        alt={product.name}
        width={600}
        height={400}
        priority
        className="object-cover h-96 w-full rounded-t-xl"
      />
      <div className="pl-2 pt-4">
        <p className="text-lg font-bold">{product.name}</p>
        <p>${product.price}</p>
        <div className="flex justify-center pt-4 pb-2">
          <Button
            className="bg-lime-300"
            onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
          >
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  );
}
