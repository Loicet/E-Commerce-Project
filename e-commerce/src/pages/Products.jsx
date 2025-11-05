import ProductCard from '../components/ProductCard';


function Products() {
  const electronics = Products.filter((p) => p.category === 'Electronics');
  const fashion = Products.filter((p) => p.category === 'Fashion');
  const accessories = Products.filter((p) => p.category === 'Accessories');

  const handleAddToCart = (product) => {
    console.log(`Added ${product.name} to cart`);
    alert(`Added ${product.name} to cart!`);
  };

  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Our Products</h1>

        {/* Electronics Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Electronics</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {electronics.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Fashion Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Fashion</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fashion.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>

        {/* Accessories Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Accessories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {accessories.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Products;