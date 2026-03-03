import { Leaf, Wheat, Heart, Droplets, Sun, ShieldCheck } from "lucide-react";

const badges = [
  { icon: Leaf, label: "100% Organic" },
  { icon: ShieldCheck, label: "Non GMO" },
  { icon: Wheat, label: "Gluten Free" },
  { icon: Heart, label: "Trans-fat Free" },
  { icon: Droplets, label: "No Palm Oil" },
  { icon: Sun, label: "No Added Sugar" },
];

const TrustBadges = () => {
  return (
    <section className="py-16 bg-secondary">
      <div className="container">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16">
          {badges.map((badge) => (
            <div key={badge.label} className="flex flex-col items-center gap-3 min-w-[100px]">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                <badge.icon className="w-6 h-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-secondary-foreground text-center">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
