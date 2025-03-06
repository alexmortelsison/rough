import { NextResponse } from "next/server";

export async function GET() {
  const products = [
    {
      id: "1",
      name: "Black Oversized T-Shirt",
      price: 29.99,
      image: "/images/black-tee.jpg",
    },
    {
      id: "2",
      name: "Vintage Denim Jacket",
      price: 79.99,
      image: "/images/denim-jacket.jpg",
    },
    {
      id: "3",
      name: "Cargo Pants",
      price: 59.99,
      image: "/images/cargo-pants.jpg",
    },
  ];
  return NextResponse.json(products);
}
