import { motion } from "framer-motion";
import { TrendingDown, Megaphone, ClipboardList, Users } from "lucide-react";

const problems = [
  {
    icon: TrendingDown,
    title: "Sulit Jualan Online",
    description: "Bingung cara mulai jualan online? Bikin toko sendiri ribet dan mahal.",
  },
  {
    icon: Megaphone,
    title: "Promosi Tidak Efektif",
    description: "Sudah promosi kemana-mana tapi hasilnya tidak maksimal. Budget habis, order minim.",
  },
  {
    icon: ClipboardList,
    title: "Pencatatan Manual",
    description: "Masih pakai buku catatan atau Excel? Rawan salah dan sulit melacak penjualan.",
  },
  {
    icon: Users,
    title: "Sulit Jangkau Pelanggan Baru",
    description: "Pelanggan cuma itu-itu saja. Susah dapat pembeli baru di luar lingkungan.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-destructive/10 text-destructive font-medium text-sm mb-4">
            Masalah yang Sering Dialami
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Apakah Anda Mengalami{" "}
            <span className="text-destructive">Masalah Ini</span>?
          </h2>
          <p className="text-lg text-muted-foreground">
            Banyak pelaku UMKM snack menghadapi tantangan yang sama setiap harinya. 
            Sudah waktunya ada solusi yang tepat!
          </p>
        </motion.div>

        {/* Problem cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-6 border border-border hover:border-destructive/30 transition-all duration-300 hover:shadow-card"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-destructive/10 flex items-center justify-center mb-5 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-7 h-7 text-destructive" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-foreground mb-3">
                {problem.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {problem.description}
              </p>

              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-destructive/5 to-transparent rounded-tr-2xl rounded-bl-[3rem]" />
            </motion.div>
          ))}
        </div>

        {/* Transition text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl font-semibold text-foreground">
            Tenang, <span className="text-primary">SnackLink</span> hadir untuk membantu Anda! 👇
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
