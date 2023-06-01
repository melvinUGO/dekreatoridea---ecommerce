import ProductsGrid from "@/components/ProductsGrid";

async function fetchProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const products = await response.json();
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
