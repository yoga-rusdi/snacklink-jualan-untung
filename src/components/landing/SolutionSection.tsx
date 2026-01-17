import { motion } from "framer-motion";
import { Store, Package, ShoppingCart, Gift, BarChart3, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Marketplace Snack Lokal",
    description: "Toko online siap pakai. Jangkau ribuan pelanggan tanpa ribet bikin website sendiri.",
    color: "primary",
  },
  {
    icon: Package,
    title: "Manajemen Produk & Stok",
    description: "Kelola produk, harga, dan stok dengan mudah. Update kapanpun, dimanapun.",
    color: "accent",
  },
  {
    icon: ShoppingCart,
    title: "Sistem Pemesanan Online",
    description: "Terima pesanan 24 jam otomatis. Tidak ada lagi yang terlewat!",
    color: "highlight",
  },
  {
    icon: Gift,
    title: "Promo & Voucher Digital",
    description: "Buat promo menarik dan voucher diskon untuk meningkatkan penjualan.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Laporan Penjualan Otomatis",
    description: "Pantau performa bisnis dengan laporan harian, mingguan, dan bulanan.",
    color: "accent",
  },
  {
    icon: CheckCircle2,
    title: "Mudah Digunakan",
    description: "Interface sederhana yang bisa dipelajari dalam hitungan menit.",
    color: "highlight",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return {
        bg: "bg-primary/10 group-hover:bg-primary/20",
        icon: "text-primary",
        gradient: "from-primary/10",
      };
    case "accent":
      return {
        bg: "bg-accent/10 group-hover:bg-accent/20",
        icon: "text-accent",
        gradient: "from-accent/10",
      };
    case "highlight":
      return {
        bg: "bg-highlight/10 group-hover:bg-highlight/20",
        icon: "text-highlight",
        gradient: "from-highlight/10",
      };
    default:
      return {
        bg: "bg-primary/10",
        icon: "text-primary",
        gradient: "from-primary/10",
      };
  }
};

const SolutionSection = () => {
  return (
    <section id="fitur" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
            Solusi Lengkap
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Semua yang Anda Butuhkan dalam{" "}
            <span className="text-gradient-primary">Satu Aplikasi</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SnackLink dirancang khusus untuk membantu UMKM snack berkembang di era digital. 
            Fitur lengkap, mudah digunakan!
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const colors = getColorClasses(feature.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-elevated hover:-translate-y-1"
              >
                {/* Gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`} />

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5 transition-colors`}>
                    <feature.icon className={`w-7 h-7 ${colors.icon}`} />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
