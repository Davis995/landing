'use client'

import { motion } from 'framer-motion'
import { 
  GraduationCap, 
  Users, 
  School, 
  ArrowRight,
  Brain,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

export default function RoleSelector() {
  const roles = [
    {
      id: 'teacher',
      title: 'Teacher',
      icon: GraduationCap,
      description: 'AI-powered teaching tools, class management, and analytics',
      features: ['Lesson Plan Generator', 'Auto Grading', 'Performance Analytics', 'Real-time Communication'],
      gradient: 'from-blue-500 to-blue-700',
      hoverGradient: 'from-blue-600 to-blue-800',
      redirect: 'https://teachersportal-alpha.vercel.app/', // Teacher portal
      bgPattern: 'bg-blue-50'
    },
    {
      id: 'student',
      title: 'Student',
      icon: Users,
      description: 'Gamified learning experience with AI study assistants',
      features: ['AI Homework Helper', 'XP & Achievements', 'Study Plans', 'Progress Tracking'],
      gradient: 'from-purple-500 to-purple-700',
      hoverGradient: 'from-purple-600 to-purple-800',
      redirect: 'https://student-khaki-kappa.vercel.app/', // Student portal
      bgPattern: 'bg-purple-50'
    },
    {
      id: 'school',
      title: 'Private School',
      icon: School,
      description: 'Complete institutional management and oversight',
      features: ['Multi-teacher Dashboard', 'School Analytics', 'Custom Branding', 'Admin Controls'],
      gradient: 'from-green-500 to-green-700',
      hoverGradient: 'from-green-600 to-green-800',
      redirect: 'https://teacher-neon-seven.vercel.app/', // Private school portal (you can adjust this)
      bgPattern: 'bg-green-50'
    }
  ]

  const handleRoleSelect = (redirect: string) => {
    // In production, this would redirect to the appropriate subdomain
    window.open(redirect, '_blank')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="container-max">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">Smart Learning</span>
            </Link>
            
            <Link href="/" className="text-gray-600 hover:text-primary-600 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6 mb-16"
          >
            <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Choose Your Learning Journey</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Welcome to{' '}
              <span className="gradient-text">Smart Learning</span>
            </h1>
            
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Select your role to access personalized features and start your educational transformation today.
            </p>
          </motion.div>

          {/* Role Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={role.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
                onClick={() => handleRoleSelect(role.redirect)}
              >
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 border-transparent group-hover:border-gray-200 transition-all duration-300 overflow-hidden ${role.bgPattern}`}>
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent"></div>
                  </div>
                  
                  {/* Icon */}
                  <motion.div 
                    className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${role.gradient} group-hover:${role.hoverGradient} flex items-center justify-center shadow-lg transition-all duration-300`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <role.icon className="w-10 h-10 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                      {role.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed">
                      {role.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 text-sm text-gray-500">
                      {role.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2">
                          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient}`}></div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <motion.button
                      className={`w-full mt-6 py-3 px-6 bg-gradient-to-r ${role.gradient} group-hover:${role.hoverGradient} text-white font-semibold rounded-xl shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-16 text-center"
          >
            <p className="text-gray-500 mb-4">
              Need help choosing? Our team is here to assist you.
            </p>
            <Link 
              href="/#contact"
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
            >
              <span>Contact Support</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Smart Learning?</h2>
            <p className="text-gray-600">Trusted by thousands of educators and students worldwide</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-blue-100 rounded-full flex items-center justify-center">
                <Brain className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold">AI-Powered</h3>
              <p className="text-gray-600">Advanced AI tools for personalized learning and teaching</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-purple-100 rounded-full flex items-center justify-center">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold">Collaborative</h3>
              <p className="text-gray-600">Seamless communication between teachers, students, and parents</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              <div className="w-16 h-16 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                <School className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Scalable</h3>
              <p className="text-gray-600">From individual users to entire school districts</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
