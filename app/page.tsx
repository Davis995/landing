'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import { 
  Brain, 
  Users, 
  Trophy, 
  BookOpen, 
  Zap, 
  Shield, 
  Star, 
  Check, 
  ArrowRight,
  Play,
  Menu,
  X,
  ChevronDown,
  Target,
  BarChart3,
  MessageSquare,
  Award,
  Clock,
  Sparkles
} from 'lucide-react'

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "High School Math Teacher",
      school: "Kampala International School",
      content: "The AI lesson planner has saved me 10+ hours per week. My students are more engaged than ever with the gamified assignments!",
      rating: 5,
      avatar: "SJ"
    },
    {
      name: "Michael Chen",
      role: "Student, Grade 11",
      school: "Makerere College School",
      content: "I love the XP system and achievements! It makes studying feel like a game. My grades improved by 15% this semester.",
      rating: 5,
      avatar: "MC"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Principal",
      school: "Lincoln Academy Uganda",
      content: "Our school's performance metrics improved dramatically. Teachers love the AI tools and students are more motivated.",
      rating: 5,
      avatar: "ER"
    },
    {
      name: "James Mukasa",
      role: "Physics Teacher",
      school: "St. Mary's College Kisubi",
      content: "Smart Learning transformed how I teach. The AI tools help me create better lessons and my students love the interactive features.",
      rating: 5,
      avatar: "JM"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  const features = [
    {
      icon: Brain,
      title: "AI-Powered Teaching Tools",
      description: "Lesson plan generator, exam creator, performance predictor, and auto feedback writer to save hours of work.",
      color: "text-blue-600"
    },
    {
      icon: Trophy,
      title: "Gamified Student Experience",
      description: "XP system, achievement badges, leaderboards, and study streaks to keep students motivated.",
      color: "text-purple-600"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with performance tracking, attendance patterns, and predictive insights.",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "Real-time Communication",
      description: "Seamless messaging between teachers, students, and parents with file sharing capabilities.",
      color: "text-orange-600"
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "AI-driven study plans, homework helpers, and adaptive learning paths for each student.",
      color: "text-red-600"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security with 99.9% uptime and GDPR compliance for peace of mind.",
      color: "text-indigo-600"
    }
  ]

  const pricingPlans = [
    {
      name: "Student Basic",
      price: "UGX 35,000",
      period: "/month",
      description: "Perfect for individual students",
      features: [
        "AI Homework Helper",
        "Basic Study Plans",
        "Achievement System",
        "Progress Tracking",
        "Mobile App Access"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Teacher Professional",
      price: "UGX 110,000",
      period: "/month",
      description: "Ideal for individual educators",
      features: [
        "All AI Teaching Tools",
        "Class Management",
        "Advanced Analytics",
        "Real-time Messaging",
        "Unlimited Students",
        "Priority Support"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "School Enterprise",
      price: "UGX 370,000",
      period: "/month",
      description: "Complete solution for institutions",
      features: [
        "Everything in Professional",
        "Multi-teacher Dashboard",
        "Custom Branding",
        "API Access",
        "Dedicated Support",
        "Training Sessions"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ]

  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Smart Learning Platform",
    "description": "AI-powered education platform for teachers and students in Uganda",
    "url": "https://smartlearning.ug",
    "applicationCategory": "EducationalApplication",
    "operatingSystem": "Web",
    "offers": {
      "@type": "Offer",
      "price": "35000",
      "priceCurrency": "UGX",
      "priceValidUntil": "2024-12-31"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "ratingCount": "1247"
    },
    "provider": {
      "@type": "Organization",
      "name": "Smart Learning Platform",
      "url": "https://smartlearning.ug"
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Smart Learning</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-primary-600 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-primary-600 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-600 hover:text-primary-600 transition-colors">Reviews</a>
              <a href="#contact" className="text-gray-600 hover:text-primary-600 transition-colors">Contact</a>
              <button className="btn-secondary">Sign In</button>
              <button className="btn-primary">Start Free Trial</button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <a href="#features" className="block text-gray-600 hover:text-primary-600">Features</a>
              <a href="#pricing" className="block text-gray-600 hover:text-primary-600">Pricing</a>
              <a href="#testimonials" className="block text-gray-600 hover:text-primary-600">Reviews</a>
              <a href="#contact" className="block text-gray-600 hover:text-primary-600">Contact</a>
              <div className="pt-4 space-y-2">
                <button className="w-full btn-secondary">Sign In</button>
                <button className="w-full btn-primary">Start Free Trial</button>
              </div>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 via-white to-secondary-50">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  <span>AI-Powered Education Platform</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Smart Learning.{' '}
                  <span className="gradient-text">Simplified.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Empower teachers with intelligent tools and engage students with gamified learning. 
                  Join thousands of educators revolutionizing education.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/get-started" className="btn-primary flex items-center justify-center space-x-2">
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <button className="btn-secondary flex items-center justify-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Watch Demo</span>
                </button>
              </div>

              <div className="flex items-center space-x-8 text-sm text-gray-600">
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Setup in 5 minutes</span>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Dashboard Preview</h3>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-primary-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Users className="w-5 h-5 text-primary-600" />
                        <span className="text-sm font-medium">Students</span>
                      </div>
                      <div className="text-2xl font-bold text-primary-600">1,247</div>
                    </div>
                    <div className="bg-secondary-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-2 mb-2">
                        <Trophy className="w-5 h-5 text-secondary-600" />
                        <span className="text-sm font-medium">Achievements</span>
                      </div>
                      <div className="text-2xl font-bold text-secondary-600">89%</div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">AI Tools Usage</span>
                      <span className="text-sm text-gray-500">+23% this week</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-medium animate-bounce-slow">
                Live Demo
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Powerful Features for{' '}
              <span className="gradient-text">Modern Education</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create engaging learning experiences and streamline educational workflows.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 card-hover"
              >
                <div className={`w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-6 h-6 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Educators Across Uganda</h2>
            <p className="text-primary-100">Join the growing community transforming education</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold mb-2">
                {statsInView && <CountUp end={12500} duration={2.5} separator="," />}+
              </div>
              <div className="text-primary-100">Active Students</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="text-4xl font-bold mb-2">
                {statsInView && <CountUp end={750} duration={2.5} />}+
              </div>
              <div className="text-primary-100">Teachers</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="text-4xl font-bold mb-2">
                {statsInView && <CountUp end={95} duration={2.5} />}%
              </div>
              <div className="text-primary-100">Satisfaction Rate</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <div className="text-4xl font-bold mb-2">
                {statsInView && <CountUp end={85} duration={2.5} />}+
              </div>
              <div className="text-primary-100">Schools</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section-padding bg-gray-50">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Loved by{' '}
              <span className="gradient-text">Educators & Students</span>
            </h2>
            <p className="text-xl text-gray-600">
              See what our community has to say about their experience.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeTestimonial}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-xl text-gray-700 mb-6 italic">
                &ldquo;{testimonials[activeTestimonial].content}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonials[activeTestimonial].avatar}
                </div>
                <div className="text-left">
                  <div className="font-semibold">{testimonials[activeTestimonial].name}</div>
                  <div className="text-gray-500 text-sm">{testimonials[activeTestimonial].role}</div>
                  <div className="text-primary-600 text-sm font-medium">{testimonials[activeTestimonial].school}</div>
                </div>
              </div>
            </motion.div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-primary-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-padding bg-white">
        <div className="container-max">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Simple, Transparent{' '}
              <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-gray-600">
              Choose the perfect plan for your educational needs. All plans include an 8-day free trial.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white p-8 rounded-2xl border-2 card-hover ${
                  plan.popular 
                    ? 'border-primary-600 shadow-xl' 
                    : 'border-gray-200 shadow-lg'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-primary-600 hover:bg-primary-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  {plan.cta}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your Classroom?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join thousands of educators who are already using Smart Learning Platform to create better educational experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <span>Start Your Free Trial</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-colors">
                Schedule a Demo
              </button>
            </div>
            <p className="text-primary-100 text-sm mt-4">
              No credit card required • 8-day free trial • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white section-padding">
        <div className="container-max">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                  <Brain className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Smart Learning</span>
              </div>
              <p className="text-gray-400">
                Transforming education with AI-powered tools for teachers and gamified learning for students.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Status</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 Smart Learning Platform. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
