import ProductBox from "@/components/ProductBox";
import Image from "next/image";

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
  return products;
}

export default async function Home() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <main className="p-[20px]">
      <section>
        <div className="  center grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-7">
          {products.map((product, index) => {
            return <ProductBox key={index} product={product} />;
          })}
        </div>
      </section>
    </main>
  );
}
