import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";
import Link from "next/link";

async function fetchProducts() {
  await mongooseConnect();
  const products = await Product.find({}).limit(6);
  return products;
}

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <main className="px-[20px] py-[40px]">
      <section className="text-center">
        <ProductsGrid products={products} />
        <Link href={"/products"}>VIEW ALL &rarr;</Link>
      </section>
    </main>
  );
}
