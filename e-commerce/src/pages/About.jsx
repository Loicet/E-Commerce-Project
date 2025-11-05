function About() {
  return (
    <div className="py-12 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">About ShopEasy</h1>

        {/* Company Description */}
        <section className="max-w-4xl mx-auto mb-12">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Who We Are</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              ShopEasy is a modern e-commerce platform dedicated to providing high-quality products
              at affordable prices. We started with a simple mission: to make shopping easy,
              convenient, and enjoyable for everyone.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you're looking for the latest electronics, trendy fashion items, or stylish
              accessories, we've got you covered. Our carefully curated selection ensures that every
              product meets our high standards for quality and value.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We believe in building lasting relationships with our customers by offering excellent
              customer service, fast shipping, and a seamless shopping experience.
            </p>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Fast Shipping</h3>
              <p className="text-gray-700">
                We deliver your orders quickly and safely. Most orders arrive within 3-5 business days.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Best Prices</h3>
              <p className="text-gray-700">
                We offer competitive prices on all our products. Quality doesn't have to break the bank.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">Quality Guarantee</h3>
              <p className="text-gray-700">
                Every product is carefully selected and tested to ensure it meets our high quality standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="text-4xl mb-4"></div>
              <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
              <p className="text-gray-700">
                Our customer support team is always ready to help you with any questions or concerns.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;