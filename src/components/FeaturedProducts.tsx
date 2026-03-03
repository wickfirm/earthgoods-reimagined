import { motion } from "framer-motion";
import { Star, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  {
    name: "Organic Black Chia Seeds",
    weight: "340g",
    price: 30.06,
    originalPrice: 35.36,
    rating: 4.5,
    reviews: 2,
    badge: "15% OFF",
  },
  {
    name: "Organic Oat Flakes GF",
    weight: "500g",
    price: 19.53,
    originalPrice: 22.98,
    rating: 4.8,
    reviews: 14,
    badge: "15% OFF",
  },
  {
    name: "Organic Berry Muesli GF",
    weight: "340g",
    price: 27.63,
    originalPrice: 32.5,
    rating: 4.5,
    reviews: 2,
    badge: "15% OFF",
  },
  {
    name: "Organic Coconut Oil",
    weight: "500ml",
    price: 24.99,
    originalPrice: 29.99,
    rating: 4.9,
    reviews: 8,
    badge: "Best Seller",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturedProducts = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex items-end justify-between mb-16">
          <div>
            <span className="text-sm font-medium text-accent tracking-widest uppercase">
              Handpicked for You
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
              Featured Products
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-block text-sm font-medium text-primary border-b border-primary pb-0.5 hover:opacity-70 transition-opacity"
          >
            View All Products
          </a>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={item}
              className="group"
            >
              <div className="relative bg-card rounded-2xl p-6 aspect-square flex items-center justify-center mb-4 overflow-hidden">
                {/* Placeholder product visual */}
                <div className="w-full h-full rounded-xl bg-muted flex items-center justify-center">
                  <span className="text-4xl">🌿</span>
                </div>
                {product.badge && (
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-bold">
                    {product.badge}
                  </span>
                )}
                <Button
                  size="sm"
                  className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity rounded-full bg-primary text-primary-foreground hover:bg-earth-forest-light w-10 h-10 p-0"
                  aria-label="Add to cart"
                >
                  <ShoppingBag className="w-4 h-4" />
                </Button>
              </div>

              <div className="flex items-center gap-1 mb-2">
                {Array.from({ length: 5 }).map((_, si) => (
                  <Star
                    key={si}
                    className={`w-3.5 h-3.5 ${si < Math.floor(product.rating) ? "fill-earth-gold text-earth-gold" : "text-border"}`}
                  />
                ))}
                <span className="text-xs text-muted-foreground ml-1">({product.reviews})</span>
              </div>

              <h3 className="text-sm font-medium text-foreground leading-snug mb-1">
                {product.name} {product.weight}
              </h3>

              <div className="flex items-center gap-2">
                <span className="text-base font-bold text-foreground">
                  {product.price.toFixed(2)} AED
                </span>
                {product.originalPrice && (
                  <span className="text-sm text-muted-foreground line-through">
                    {product.originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="md:hidden text-center mt-8">
          <a href="#" className="text-sm font-medium text-primary border-b border-primary pb-0.5">
            View All Products
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
