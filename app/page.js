import ProductsGrid from "@/components/ProductsGrid";
import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product";

async function fetchProducts() {
  await mongooseConnect();
  const products = await Product.find({});
  return products;
}

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <main className="px-[20px] py-[40px]">
      <section>
        <ProductsGrid products={products} />
      </section>
    </main>
  );
}
