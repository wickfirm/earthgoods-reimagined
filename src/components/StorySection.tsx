import { motion } from "framer-motion";

const StorySection = () => {
  return (
    <section id="story" className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60">
              Since 2010
            </span>
            <h2 className="text-4xl md:text-5xl font-display mt-3 mb-6 leading-tight">
              Rooted in Nature,
              <br />
              <span className="italic">Grown with Purpose</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 leading-relaxed mb-6">
              Earth Goods was born from a simple belief: everyone deserves access to pure,
              organic food. We partner directly with certified organic farms across the globe
              to bring you products that are free from chemicals, GMOs, and artificial additives.
            </p>
            <p className="text-lg text-primary-foreground/80 leading-relaxed">
              Every product we offer is a testament to our commitment to sustainability,
              transparency, and the well-being of our community and planet.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              { number: "200+", label: "Organic Products" },
              { number: "15+", label: "Years of Trust" },
              { number: "50+", label: "Farm Partners" },
              { number: "100%", label: "Certified Organic" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-primary-foreground/10 rounded-2xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-3xl md:text-4xl font-display mb-2">{stat.number}</div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
