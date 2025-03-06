import ProductCard from "./components/ProductCard";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
}

async function getProducts(): Promise<Product[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products`);
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="pt-4 text-2xl font-bold">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
