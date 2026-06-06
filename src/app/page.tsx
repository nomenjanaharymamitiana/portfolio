'use client'

import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Server,
  Shield,
  Brain,
  Network,
  LayoutDashboard,
  BarChart3,
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  ChevronDown,
  ExternalLink,
  Terminal,
  Cpu,
  Lock,
  KeyRound,
  MapPin,
  Globe,
  Menu,
  X,
  ArrowUp,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

/* ──────────────────────────────────────────────
   ANIMATION VARIANTS
   ────────────────────────────────────────────── */

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      delay: i * 0.1, 
      ease: [0.25, 0.46, 0.45, 0.94] as const // <-- Ajout de "as const" ici
    },
  }),
}


const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { 
      duration: 0.5, 
      ease: [0.25, 0.46, 0.45, 0.94] as const // <-- Ajoutez "as const" ici
    },
  },
}


/* ──────────────────────────────────────────────
   SECTION OBSERVER WRAPPER
   ────────────────────────────────────────────── */

function AnimatedSection({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.section>
  )
}

/* ──────────────────────────────────────────────
   DATA
   ────────────────────────────────────────────── */

const skills = [
  { name: 'Python', icon: Terminal, category: 'Langage', level: 95 },
  { name: 'FastAPI', icon: Server, category: 'Framework', level: 90 },
  { name: 'Ubuntu Linux', icon: Cpu, category: 'Système', level: 88 },
  { name: 'Backend API', icon: Code2, category: 'Compétence', level: 92 },
  { name: 'Sécurité Réseau', icon: Shield, category: 'Compétence', level: 85 },
  { name: 'Intelligence Artificielle', icon: Brain, category: 'Compétence', level: 80 },
  { name: 'Français', icon: Globe, category: 'Langue', level: 100 },
  { name: 'Anglais', icon: Globe, category: 'Langue', level: 75 },
]

const projects = [
  {
    title: 'Système Intelligent pour Ville Intelligente',
    subtitle: 'Smart City — Chatbot Intégré',
    description:
      'Plateforme backend complète pour la gestion intelligente d\'une ville connectée. Intègre un chatbot conversationnel propulsé par l\'IA pour l\'assistance citoyenne en temps réel, la gestion des flux de données urbaines et l\'automatisation des services publics.',
    icon: Brain,
    tags: ['Python', 'FastAPI', 'IA', 'Chatbot', 'IoT'],
    color: 'from-emerald-500/20 to-teal-500/20',
    accent: 'text-emerald-400',
  },
  {
    title: 'Gestion d\'Authentification Réseau avec LDAP',
    subtitle: 'Sécurité & Centralisation des Accès',
    description:
      'Système robuste d\'authentification centralisée basé sur le protocole LDAP, assurant la gestion sécurisée des identités et des accès réseau. Architecture scalable avec chiffrement des données sensibles et journalisation complète des événements.',
    icon: Network,
    tags: ['LDAP', 'Python', 'Sécurité', 'Auth', 'Réseau'],
    color: 'from-cyan-500/20 to-blue-500/20',
    accent: 'text-cyan-400',
  },
  {
    title: 'Implémentation de Certificats Multi-niveaux',
    subtitle: 'Architecture de Sécurité Backend',
    description:
      'Conception et déploiement d\'une infrastructure PKI (Public Key Infrastructure) multi-niveaux pour la gestion de certificats numériques. Gestion avancée des clés de chiffrement, validation en chaîne et sécurisation des communications inter-services.',
    icon: Lock,
    tags: ['PKI', 'Certificats', 'Chiffrement', 'Sécurité', 'Backend'],
    color: 'from-violet-500/20 to-purple-500/20',
    accent: 'text-violet-400',
  },
  {
    title: 'Gestion d\'Allocation de Salles',
    subtitle: 'API & Optimisation des Espaces',
    description:
      'API RESTful intelligente pour l\'allocation et l\'optimisation des espaces et salles. Algorithme d\'optimisation des créneaux horaires, gestion des conflits de réservation et tableau de bord d\'administration pour le suivi en temps réel.',
    icon: LayoutDashboard,
    tags: ['FastAPI', 'API REST', 'Optimisation', 'Dashboard'],
    color: 'from-amber-500/20 to-orange-500/20',
    accent: 'text-amber-400',
  },
  {
    title: 'Application Web pour l\'Analyse de Trafic',
    subtitle: 'Monitoring & Visualisation Réseau',
    description:
      'Outil complet de monitoring et d\'analyse du trafic réseau en temps réel. Traitement de flux de données en continu, détection d\'anomalies, visualisation interactive des métriques réseau et alertes automatisées pour la supervision proactive.',
    icon: BarChart3,
    tags: ['Python', 'Analyse', 'Monitoring', 'Visualisation', 'Réseau'],
    color: 'from-rose-500/20 to-pink-500/20',
    accent: 'text-rose-400',
  },
]

const contacts = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    icon: Linkedin,
    color: 'hover:text-blue-400',
  },
  {
    label: 'GitHub',
    href: 'https://github.com',
    icon: Github,
    color: 'hover:text-gray-200',
  },
  {
    label: 'Email',
    href: 'mailto:tinamamy28@gmail.com',
    icon: Mail,
    color: 'hover:text-emerald-400',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/261388997559',
    icon: MessageCircle,
    color: 'hover:text-green-400',
  },
  {
    label: 'Téléphone',
    href: 'tel:+261330166323',
    icon: Phone,
    color: 'hover:text-emerald-400',
  },
]

/* ──────────────────────────────────────────────
   NAVIGATION
   ────────────────────────────────────────────── */

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Accueil' },
    { href: '#about', label: 'À propos' },
    { href: '#projects', label: 'Projets' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-500/30 transition-colors">
              <Terminal className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="font-mono font-bold text-lg tracking-tight">
              <span className="text-emerald-400">{'<'}</span>
              <span className="text-foreground">NM</span>
              <span className="text-emerald-400">{' />'}</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Menu de navigation"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

/* ──────────────────────────────────────────────
   HERO SECTION
   ────────────────────────────────────────────── */

function HeroSection() {
  const [typedText, setTypedText] = useState('')
  const fullText = 'Développeur Spécialisé Backend | Python & Systèmes Intelligents'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
      }
    }, 40)
    return () => clearInterval(timer)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-80 h-80 bg-cyan-500/6 rounded-full blur-3xl animate-float"
          style={{ animationDelay: '3s' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/3 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        {/* Profile image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            {/* Pulse ring */}
            <div className="absolute inset-0 rounded-full bg-emerald-500/20 animate-pulse-ring" />
            {/* Border glow */}
            <div className="absolute inset-[-3px] rounded-full bg-gradient-to-tr from-emerald-500 via-cyan-400 to-emerald-500 opacity-60 blur-[2px]" />
            {/* Image container */}
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden border-2 border-emerald-500/40 bg-card">
              <img
                src="/profile-placeholder.png"
                alt="Photo de profil de Nomenjanahary Mamitiana"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-emerald-500 rounded-full border-2 border-background glow-emerald" />
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
        >
          <span className="text-foreground">Nomenjanahary</span>{' '}
          <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-300 bg-clip-text text-transparent">
            Mamitiana
          </span>
        </motion.h1>

        {/* Typed subtitle */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="mb-8 h-8 sm:h-10"
        >
          <p className="font-mono text-base sm:text-lg text-emerald-400/90">
            {typedText}
            <span className="animate-blink text-emerald-400">|</span>
          </p>
        </motion.div>

        {/* Short description */}
        <motion.p
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={3}
          className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Ingénieur backend passionné par la conception de systèmes robustes, la sécurité réseau
          et l&apos;intelligence artificielle. Je construis des architectures performantes et
          sécurisées avec Python et FastAPI.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={4}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            asChild
            size="lg"
            className="bg-emerald-500 hover:bg-emerald-400 text-background font-semibold px-8 glow-emerald transition-all duration-300 hover:scale-105"
          >
            <a href="#projects">
              <Code2 className="w-4 h-4 mr-2" />
              Voir mes projets
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-500/50 font-semibold px-8 transition-all duration-300 hover:scale-105"
          >
            <a href="#contact">
              <Mail className="w-4 h-4 mr-2" />
              Me contacter
            </a>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

/* ──────────────────────────────────────────────
   ABOUT & SKILLS SECTION
   ────────────────────────────────────────────── */

function AboutSection() {
  return (
    <AnimatedSection id="about" className="py-24 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Server className="w-4 h-4" />
            À propos & Compétences
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Construire l&apos;infrastructure de demain
          </h2>
        </motion.div>

        {/* About text + skills grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About description */}
          <motion.div variants={fadeInUp} custom={1}>
            <Card className="bg-card/50 border-border/50 backdrop-blur-sm h-full">
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center">
                    <Terminal className="w-5 h-5 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold">Qui suis-je ?</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Développeur spécialisé dans le backend avec une expertise approfondie en Python
                    et la création de systèmes intelligents. Mon parcours est marqué par une passion
                    pour l&apos;ingénierie logicielle robuste, la sécurité des infrastructures
                    réseau et l&apos;automatisation intelligente.
                  </p>
                  <p>
                    Je conçois des architectures backend scalables avec FastAPI, sécurise des
                    réseaux via LDAP et des infrastructures PKI, et développe des solutions
                    d&apos;intelligence artificielle intégrées pour des applications concrètes
                    allant de la Smart City à l&apos;analyse de trafic réseau.
                  </p>
                  <p>
                    Mon approche privilégie la qualité du code, la sécurité par conception et
                    la performance des systèmes. Chaque projet est une opportunité de repousser
                    les limites techniques tout en maintenant une fiabilité opérationnelle.
                  </p>
                </div>

                {/* Location badge */}
                <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-emerald-400" />
                  <span>Madagascar</span>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills grid */}
          <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-3">
            {skills.map((skill) => {
              const Icon = skill.icon
              return (
                <motion.div key={skill.name} variants={scaleIn}>
                  <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 hover:bg-card/80 transition-all duration-300 cursor-default">
                    <CardContent className="p-4 sm:p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
                          <Icon className="w-4 h-4 text-emerald-400" />
                        </div>
                        <div>
                          <p className="font-semibold text-sm">{skill.name}</p>
                          <p className="text-xs text-muted-foreground">{skill.category}</p>
                        </div>
                      </div>
                      {/* Skill bar */}
                      <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </AnimatedSection>
  )
}

/* ──────────────────────────────────────────────
   PROJECTS SECTION
   ────────────────────────────────────────────── */

function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className="py-24 sm:py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/3 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Code2 className="w-4 h-4" />
            Projets
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Réalisations & Expertise
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
            Des projets qui illustrent ma capacité à concevoir des systèmes backend sécurisés,
            performants et intelligents.
          </p>
        </motion.div>

        {/* Projects grid */}
        <motion.div
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <motion.div key={project.title} variants={scaleIn}>
                <Card className="group relative bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-500 overflow-hidden h-full">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                  />
                  <CardHeader className="relative pb-3">
                    <div className="flex items-start justify-between">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.color} border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <Icon className={`w-6 h-6 ${project.accent}`} />
                      </div>
                      <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0 translate-x-2">
                        <ExternalLink className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                    <CardTitle className="text-lg font-bold mt-4 leading-snug">
                      {project.title}
                    </CardTitle>
                    <p className={`text-sm font-medium ${project.accent}`}>{project.subtitle}</p>
                  </CardHeader>
                  <CardContent className="relative pt-0">
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-white/5 hover:bg-emerald-500/15 hover:text-emerald-400 text-xs font-mono transition-colors border-0"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

/* ──────────────────────────────────────────────
   CONTACT SECTION
   ────────────────────────────────────────────── */

function ContactSection() {
  return (
    <AnimatedSection id="contact" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-4">
            <Mail className="w-4 h-4" />
            Contact
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Travaillons ensemble
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg mx-auto">
            Intéressé par une collaboration ou un projet ? N&apos;hésitez pas à me contacter
            via l&apos;un des canaux ci-dessous.
          </p>
        </motion.div>

        {/* Contact cards grid */}
        <motion.div
          variants={staggerContainer}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Email card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <a
                  href="mailto:tinamamy28@gmail.com"
                  className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300"
                  aria-label="Envoyer un email"
                >
                  <Mail className="w-7 h-7 text-emerald-400" />
                </a>
                <div>
                  <p className="font-semibold">Email</p>
                  <a
                    href="mailto:tinamamy28@gmail.com"
                    className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors break-all"
                  >
                    tinamamy28@gmail.com
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phone card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <a
                  href="tel:+261330166323"
                  className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300"
                  aria-label="Appeler le téléphone"
                >
                  <Phone className="w-7 h-7 text-emerald-400" />
                </a>
                <div>
                  <p className="font-semibold">Téléphone</p>
                  <a
                    href="tel:+261330166323"
                    className="text-sm text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    +261 33 016 63 23
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* WhatsApp card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <a
                  href="https://wa.me/261388997559"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center group-hover:bg-green-500/20 group-hover:scale-110 transition-all duration-300"
                  aria-label="Contacter sur WhatsApp"
                >
                  <MessageCircle className="w-7 h-7 text-green-400" />
                </a>
                <div>
                  <p className="font-semibold">WhatsApp</p>
                  <a
                    href="https://wa.me/261388997559"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-green-400 transition-colors"
                  >
                    +261 38 899 75 59
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* LinkedIn card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-blue-500/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:scale-110 transition-all duration-300"
                  aria-label="Profil LinkedIn"
                >
                  <Linkedin className="w-7 h-7 text-blue-400" />
                </a>
                <div>
                  <p className="font-semibold">LinkedIn</p>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-blue-400 transition-colors"
                  >
                    Profil LinkedIn
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* GitHub card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-gray-400/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 rounded-2xl bg-gray-500/10 border border-gray-500/20 flex items-center justify-center group-hover:bg-gray-500/20 group-hover:scale-110 transition-all duration-300"
                  aria-label="Profil GitHub"
                >
                  <Github className="w-7 h-7 text-gray-300" />
                </a>
                <div>
                  <p className="font-semibold">GitHub</p>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-gray-200 transition-colors"
                  >
                    Profil GitHub
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Location card */}
          <motion.div variants={scaleIn}>
            <Card className="group bg-card/50 border-border/50 backdrop-blur-sm hover:border-emerald-500/30 transition-all duration-300 h-full">
              <CardContent className="p-6 flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500/20 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-7 h-7 text-emerald-400" />
                </div>
                <div>
                  <p className="font-semibold">Localisation</p>
                  <p className="text-sm text-muted-foreground">Madagascar</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        {/* Quick social links bar */}
        <motion.div
          variants={fadeInUp}
          className="mt-12 flex items-center justify-center gap-4"
        >
          {contacts.map((contact) => {
            const Icon = contact.icon
            return (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className={`w-12 h-12 rounded-xl bg-card/50 border border-border/50 flex items-center justify-center text-muted-foreground ${contact.color} hover:border-emerald-500/30 transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                aria-label={contact.label}
              >
                <Icon className="w-5 h-5" />
              </a>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

/* ──────────────────────────────────────────────
   FOOTER
   ────────────────────────────────────────────── */

function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="font-mono text-sm text-muted-foreground">
              <span className="text-emerald-400">{'<'}</span>NM<span className="text-emerald-400">{' />'}</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Nomenjanahary Mamitiana. Tous droits réservés.
          </p>
          <div className="flex items-center gap-3">
            {contacts.slice(0, 3).map((contact) => {
              const Icon = contact.icon
              return (
                <a
                  key={contact.label}
                  href={contact.href}
                  target={contact.href.startsWith('http') ? '_blank' : undefined}
                  rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-muted-foreground hover:text-emerald-400 transition-colors"
                  aria-label={contact.label}
                >
                  <Icon className="w-4 h-4" />
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </footer>
  )
}

/* ──────────────────────────────────────────────
   SCROLL TO TOP BUTTON
   ────────────────────────────────────────────── */

function ScrollToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-6 right-6 z-50 w-11 h-11 rounded-xl bg-emerald-500/20 border border-emerald-500/30 backdrop-blur-sm flex items-center justify-center text-emerald-400 hover:bg-emerald-500/30 hover:scale-110 transition-all duration-300"
          aria-label="Retour en haut"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  )
}

/* ──────────────────────────────────────────────
   MAIN PAGE
   ────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  )
}
