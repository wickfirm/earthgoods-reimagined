import { motion } from "framer-motion";
import categoryBreakfast from "@/assets/category-breakfast.jpg";
import categoryGrains from "@/assets/category-grains.jpg";
import categoryOils from "@/assets/category-oils.jpg";
import categoryPasta from "@/assets/category-pasta.jpg";
import categoryNuts from "@/assets/category-nuts.jpg";
import categorySeeds from "@/assets/category-seeds.jpg";

const categories = [
  { name: "Breakfast", image: categoryBreakfast },
  { name: "Grains & Pulses", image: categoryGrains },
  { name: "Oils", image: categoryOils },
  { name: "Pasta", image: categoryPasta },
  { name: "Raw Nuts", image: categoryNuts },
  { name: "Seeds", image: categorySeeds },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-24">
      <div className="container">
        <div className="text-center mb-16">
          <span className="text-sm font-medium text-accent tracking-widest uppercase">
            Browse by Category
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-foreground mt-3">
            Our Mindful Products
          </h2>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          {categories.map((cat) => (
            <motion.a
              key={cat.name}
              variants={item}
              href="#"
              className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl md:text-2xl font-display text-background">
                  {cat.name}
                </h3>
                <span className="inline-block mt-2 text-sm font-medium text-background/80 border-b border-background/40 pb-0.5 group-hover:border-background transition-colors">
                  Shop Now
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CategoriesSection;
