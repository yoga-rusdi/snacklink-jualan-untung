import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    produk: [
      { label: "Fitur", href: "#fitur" },
      { label: "Harga", href: "#" },
      { label: "Download", href: "#" },
      { label: "Update Terbaru", href: "#" },
    ],
    perusahaan: [
      { label: "Tentang Kami", href: "#" },
      { label: "Karir", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Mitra", href: "#" },
    ],
    bantuan: [
      { label: "Pusat Bantuan", href: "#" },
      { label: "FAQ", href: "#" },
      { label: "Hubungi Kami", href: "#" },
      { label: "Kebijakan Privasi", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer id="footer" className="bg-foreground text-primary-foreground pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-primary-foreground/10">
          {/* Brand column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-4 lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold">
                Snack<span className="text-primary">Link</span>
              </span>
            </div>

            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Platform marketplace dan manajemen bisnis snack UMKM Indonesia. 
              Menghubungkan produsen snack lokal dengan konsumen di seluruh nusantara.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              <a href="mailto:hello@snacklink.id" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Mail size={18} />
                <span>hello@snacklink.id</span>
              </a>
              <a href="tel:+6281234567890" className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary transition-colors">
                <Phone size={18} />
                <span>+62 812 3456 7890</span>
              </a>
              <div className="flex items-start gap-3 text-primary-foreground/70">
                <MapPin size={18} className="mt-0.5 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-primary-foreground mb-4">Produk</h4>
            <ul className="space-y-3">
              {footerLinks.produk.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-primary-foreground mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.perusahaan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-semibold text-primary-foreground mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.bantuan.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/60">
          <p>© {currentYear} SnackLink. Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary transition-colors">Syarat & Ketentuan</a>
            <a href="#" className="hover:text-primary transition-colors">Kebijakan Privasi</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
