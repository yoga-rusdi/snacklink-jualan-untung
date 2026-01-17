import { motion } from "framer-motion";
import { UserPlus, Upload, ShoppingBag, Download, Heart, Truck } from "lucide-react";

const umkmSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Daftar di SnackLink",
    description: "Isi data usaha dan verifikasi dalam hitungan menit. Gratis!",
  },
  {
    step: 2,
    icon: Upload,
    title: "Upload Produk Snack",
    description: "Tambahkan foto, deskripsi, dan harga produk snack Anda.",
  },
  {
    step: 3,
    icon: ShoppingBag,
    title: "Terima & Kelola Pesanan",
    description: "Pesanan masuk otomatis. Kelola, proses, dan kirim dengan mudah.",
  },
];

const consumerSteps = [
  {
    step: 1,
    icon: Download,
    title: "Download Aplikasi",
    description: "Tersedia di App Store dan Play Store. Install dalam sekejap!",
  },
  {
    step: 2,
    icon: Heart,
    title: "Pilih Snack Favorit",
    description: "Jelajahi ribuan snack lokal, baca review, tambah ke keranjang.",
  },
  {
    step: 3,
    icon: Truck,
    title: "Pesan & Nikmati",
    description: "Checkout, bayar, dan tunggu snack tiba di rumah Anda!",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="cara-kerja" className="py-20 md:py-28 bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-highlight/20 text-earth font-medium text-sm mb-4">
            Cara Kerja
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Mudah dalam <span className="text-gradient-primary">3 Langkah</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Baik sebagai UMKM maupun konsumen, memulai dengan SnackLink sangat mudah!
          </p>
        </motion.div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* UMKM Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold">
                🏪 Untuk UMKM
              </span>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-7 top-12 bottom-12 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20 hidden md:block" />

              {/* Steps */}
              <div className="space-y-8">
                {umkmSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex items-start gap-5"
                  >
                    {/* Step number */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center flex-shrink-0 shadow-soft">
                      <item.icon className="w-6 h-6 text-primary-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-5 shadow-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                          Langkah {item.step}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Consumer Steps */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent font-semibold">
                😋 Untuk Konsumen
              </span>
            </div>

            <div className="relative">
              {/* Connection line */}
              <div className="absolute left-7 top-12 bottom-12 w-0.5 bg-gradient-to-b from-accent via-accent/50 to-accent/20 hidden md:block" />

              {/* Steps */}
              <div className="space-y-8">
                {consumerSteps.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="relative flex items-start gap-5"
                  >
                    {/* Step number */}
                    <div className="relative z-10 w-14 h-14 rounded-2xl bg-accent flex items-center justify-center flex-shrink-0 shadow-soft">
                      <item.icon className="w-6 h-6 text-accent-foreground" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 bg-card rounded-2xl p-5 shadow-card border border-border">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs font-bold text-accent bg-accent/10 px-2 py-0.5 rounded-full">
                          Langkah {item.step}
                        </span>
                      </div>
                      <h4 className="font-bold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
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

export default HowItWorksSection;
