import { motion } from "framer-motion";
import { TrendingUp, Layout, Target, Search, Clock, Award } from "lucide-react";

const umkmBenefits = [
  {
    icon: TrendingUp,
    title: "Jualan Lebih Luas",
    description: "Jangkau pelanggan dari berbagai daerah, tidak terbatas lingkungan sekitar.",
  },
  {
    icon: Layout,
    title: "Usaha Lebih Rapi",
    description: "Kelola produk, pesanan, dan keuangan dalam satu dashboard terorganisir.",
  },
  {
    icon: Target,
    title: "Promosi Lebih Efektif",
    description: "Fitur promo terintegrasi untuk meningkatkan penjualan dengan budget minimal.",
  },
];

const consumerBenefits = [
  {
    icon: Search,
    title: "Mudah Menemukan Snack Lokal",
    description: "Cari snack unik dari berbagai daerah dengan filter dan kategori lengkap.",
  },
  {
    icon: Clock,
    title: "Pesan Cepat & Praktis",
    description: "Proses pemesanan sederhana, bayar mudah, tracking real-time.",
  },
  {
    icon: Award,
    title: "Banyak Pilihan Berkualitas",
    description: "Ribuan snack UMKM pilihan dengan review dan rating terpercaya.",
  },
];

const BenefitsSection = () => {
  return (
    <section id="manfaat" className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent font-medium text-sm mb-4">
            Manfaat Nyata
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Keuntungan untuk <span className="text-primary">Semua Pihak</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            SnackLink menguntungkan UMKM dan konsumen sekaligus!
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* UMKM Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary/5 to-primary/10 rounded-3xl p-8 lg:p-10 border border-primary/20">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <span className="text-2xl">🏪</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Untuk UMKM</h3>
                  <p className="text-muted-foreground">Pelaku usaha snack</p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-6">
                {umkmBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Consumer Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-3xl p-8 lg:p-10 border border-accent/20">
              {/* Header */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center">
                  <span className="text-2xl">😋</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Untuk Konsumen</h3>
                  <p className="text-muted-foreground">Pecinta snack lokal</p>
                </div>
              </div>

              {/* Benefits list */}
              <div className="space-y-6">
                {consumerBenefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-card shadow-soft flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">
                        {benefit.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
