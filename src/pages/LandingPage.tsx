import { Shield, LogIn } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const steps = [
  { num: '01', title: 'Upload File', desc: 'User uploads file to secure vault' },
  { num: '02', title: 'File Encrypted', desc: 'AES-128 encryption applied automatically' },
  { num: '03', title: 'Threat Detected', desc: 'ML model identifies suspicious behavior' },
  { num: '04', title: 'Encryption Upgraded', desc: 'Keys rotated, AES-256 applied dynamically' },
];

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background grid-bg">
      {/* Nav */}
      <nav className="border-b border-border/50 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-primary" />
            <span className="font-bold text-lg tracking-tight text-foreground">AMTE<span className="text-primary">Shield</span></span>
          </div>
          <Link
            to="/login"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <LogIn className="h-4 w-4" />
            Login
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-4 pt-24 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-8">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-primary text-sm font-mono">QUANTUM-AWARE DEFENSE SYSTEM</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-foreground">
            Adaptive Moving Target{' '}
            <span className="text-primary">Encryption</span>{' '}
            for Secure Cloud Storage
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Dynamic cryptographic defense powered by machine learning and quantum-aware threat modeling. Encryption that evolves as threats evolve.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              to="/login"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity glow-green"
            >
              Launch System
            </Link>
            <a
              href="#how-it-works"
              className="border border-border text-foreground px-6 py-3 rounded-md font-semibold hover:bg-accent transition-colors"
            >
              View Architecture
            </a>
          </div>
        </motion.div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-4 text-foreground">How It Works</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-lg mx-auto">
          A continuous feedback loop between monitoring and defense
        </p>
        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-lg p-6 relative overflow-hidden group hover:border-primary/40 transition-colors"
            >
              <span className="text-5xl font-bold text-primary/10 absolute top-2 right-4 font-mono">{step.num}</span>
              <h3 className="font-semibold text-foreground mb-2 mt-4">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Adaptive */}
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-lg p-8 md:p-12">
          <h2 className="text-2xl font-bold mb-6 text-foreground">Why Adaptive Security Matters</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-destructive mb-2">Static Encryption</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✗</span> Fixed keys become predictable targets</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✗</span> No automatic threat response</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✗</span> Manual key rotation required</li>
                <li className="flex items-start gap-2"><span className="text-destructive mt-0.5">✗</span> Vulnerable to quantum-speed attacks</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-2">Adaptive Encryption</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Moving target defense</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> ML-driven automatic adaptation</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Automatic key rotation on threat</li>
                <li className="flex items-start gap-2"><span className="text-primary mt-0.5">✓</span> Quantum-aware threat modeling</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p className="mb-2 font-semibold text-foreground">Adaptive Moving Target Encryption — Security Research Platform</p>
          <p>Built with Python · Flask · PyCryptodome · Scikit-learn · React</p>
          <p className="mt-1">Academic Research Project · 2026</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
