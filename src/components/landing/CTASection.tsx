import { motion } from "framer-motion";
import { ArrowRight, Download, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-highlight/15 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-primary via-primary to-earth rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-highlight/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          {/* Floating emojis */}
          <motion.span
            className="absolute top-8 right-12 text-4xl opacity-50"
            animate={{ y: [0, -10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            🍪
          </motion.span>
          <motion.span
            className="absolute bottom-12 left-16 text-3xl opacity-40"
            animate={{ y: [0, -8, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          >
            🥜
          </motion.span>
          <motion.span
            className="absolute top-1/2 right-24 text-3xl opacity-30"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}
          >
            🍿
          </motion.span>

          {/* Content */}
          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6"
            >
              <Rocket size={16} />
              <span>Bergabung Bersama 5.000+ UMKM Sukses</span>
            </motion.div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Siap Mengembangkan Bisnis Snack Anda?
            </h2>

            <p className="text-lg md:text-xl text-primary-foreground/80 mb-10">
              Daftar sekarang dan mulai perjalanan digital Anda bersama SnackLink. 
              Gratis untuk memulai, tanpa biaya tersembunyi!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="heroOutline"
                size="xl"
                className="group bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-0"
              >
                Gabung Sebagai UMKM
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                variant="heroOutline"
                size="xl"
                className="group"
              >
                <Download size={20} />
                Download SnackLink
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-primary-foreground/70 text-sm">
              <span className="flex items-center gap-2">
                <span className="text-lg">✓</span> Gratis Mendaftar
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lg">✓</span> Tanpa Komitmen
              </span>
              <span className="flex items-center gap-2">
                <span className="text-lg">✓</span> Support 24/7
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
