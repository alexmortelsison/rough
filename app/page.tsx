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
    <main className="p-6">
      <h2 className="text-3xl font-bold mb-6">Featured Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
