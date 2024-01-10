import { PFooter } from "../utils/components/PFooter";
import { PNavBar } from "../utils/components/PNavBar";
import ProductStoriesSection from "../utils/pages/products/ProductStoriesSection";
import ProductWhyUse from "../utils/pages/products/ProductWhyUse";
import ProductsTopHeader from "../utils/pages/products/ProductsTopHeader";
import { TechnologyFutureProducts } from "../utils/pages/technology/TechnologyFutureProducts";
import { TechnologyProducts } from "../utils/pages/technology/TechnologyProducts";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen grow">
      <PNavBar isProductView />
      <ProductsTopHeader />
      <ProductWhyUse />
      <ProductStoriesSection />
      <div className="flex flex-col items-center w-full px-12 md:px-0">
        <TechnologyProducts />
        <TechnologyFutureProducts />
      </div>
      <PFooter />
    </main>
  );
}
