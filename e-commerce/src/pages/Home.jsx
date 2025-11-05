import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

function Home() {
  const featuredProducts = products.slice(0, 8);

  const handleAddToCart = (product) => {
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div>
      <HeroSection />
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;