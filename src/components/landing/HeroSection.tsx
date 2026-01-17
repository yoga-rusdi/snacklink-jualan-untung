import { motion } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-highlight/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      {/* Floating snack decorations */}
      <motion.div
        className="absolute top-32 right-[15%] text-6xl opacity-30"
        animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      >
        🍪
      </motion.div>
      <motion.div
        className="absolute top-48 left-[10%] text-5xl opacity-25"
        animate={{ y: [0, -20, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        🥨
      </motion.div>
      <motion.div
        className="absolute bottom-40 right-[20%] text-5xl opacity-25"
        animate={{ y: [0, -10, 0], rotate: [0, 8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        🍿
      </motion.div>
      <motion.div
        className="absolute bottom-60 left-[15%] text-4xl opacity-20"
        animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        🥜
      </motion.div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm mb-6"
            >
              <Sparkles size={16} />
              <span>Platform #1 untuk UMKM Snack Indonesia</span>
            </motion.div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground leading-tight mb-6">
              Jualan Snack Lokal Jadi{" "}
              <span className="text-gradient-primary">Lebih Mudah</span> dan{" "}
              <span className="text-gradient-primary">Untung</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Satu aplikasi untuk menjual, mengelola, dan mempromosikan snack UMKM secara digital. 
              Mulai dari nol hingga ribuan pelanggan!
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="group">
                Daftar UMKM Sekarang
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="xl" className="group">
                <Download size={20} />
                Download Aplikasi
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="mt-10 flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-8 rounded-full bg-gradient-primary border-2 border-background flex items-center justify-center text-xs text-primary-foreground font-medium"
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">
                  <strong className="text-foreground">5.000+</strong> UMKM bergabung
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <span key={i} className="text-highlight text-lg">★</span>
                ))}
                <span className="text-sm text-muted-foreground ml-1">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right content - App mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Phone mockup */}
              <div className="relative mx-auto w-72 h-[580px] bg-foreground rounded-[3rem] p-3 shadow-elevated">
                <div className="w-full h-full bg-card rounded-[2.5rem] overflow-hidden">
                  {/* App screen content */}
                  <div className="h-full bg-gradient-to-b from-primary/10 to-background p-4">
                    {/* App header */}
                    <div className="flex items-center justify-between mb-4 pt-6">
                      <div>
                        <p className="text-xs text-muted-foreground">Selamat datang,</p>
                        <p className="font-semibold text-foreground">Toko Snack Ibu Ani</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-gradient-primary" />
                    </div>
                    
                    {/* Stats cards */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div className="bg-card rounded-xl p-3 shadow-soft">
                        <p className="text-xs text-muted-foreground">Penjualan Hari Ini</p>
                        <p className="text-lg font-bold text-primary">Rp 2.5 Jt</p>
                      </div>
                      <div className="bg-card rounded-xl p-3 shadow-soft">
                        <p className="text-xs text-muted-foreground">Pesanan Baru</p>
                        <p className="text-lg font-bold text-accent">12</p>
                      </div>
                    </div>

                    {/* Product list preview */}
                    <div className="bg-card rounded-xl p-3 shadow-soft">
                      <p className="text-sm font-medium text-foreground mb-3">Produk Terlaris</p>
                      {[
                        { name: "Keripik Singkong", price: "15.000", emoji: "🥔" },
                        { name: "Kacang Mede", price: "35.000", emoji: "🥜" },
                        { name: "Cookies Coklat", price: "25.000", emoji: "🍪" },
                      ].map((product, i) => (
                        <div key={i} className="flex items-center gap-3 py-2 border-b border-border last:border-0">
                          <span className="text-2xl">{product.emoji}</span>
                          <div className="flex-1">
                            <p className="text-sm font-medium text-foreground">{product.name}</p>
                            <p className="text-xs text-primary">Rp {product.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-24 h-6 bg-foreground rounded-full" />
              </div>

              {/* Floating elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -left-16 top-20 bg-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl">📈</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Omzet Naik</p>
                    <p className="font-bold text-accent">+45%</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -right-12 bottom-32 bg-card rounded-2xl p-4 shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Pesanan Baru!</p>
                    <p className="font-bold text-primary">+3 Order</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
