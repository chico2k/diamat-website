"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Bild.jpeg"
          alt="Diamat plastic extrusion machinery"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                German Engineering Excellence in{" "}
                <span className="text-blue-400">Plastic Machinery</span>
              </h1>
              
              <p className="mt-6 text-lg leading-8 text-gray-200 max-w-2xl">
                For over 40 years, Diamat Maschinenbau GmbH has been at the forefront of plastic manufacturing, 
                processing, and recycling machinery. Experience "Made in Germany" quality with worldwide references.
              </p>
              
              {/* Feature points */}
              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>Flat Film Extrusion Specialists</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>Complete Turnkey Solutions</span>
                </div>
                <div className="flex items-center gap-3 text-gray-200">
                  <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0" />
                  <span>Worldwide Service & Support</span>
                </div>
              </div>
              
              <div className="mt-10 flex items-center gap-x-6">
                <Link
                  href="#products"
                  className="group inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition-all"
                >
                  Explore Our Products
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="#contact"
                  className="text-sm font-semibold leading-6 text-white hover:text-blue-400 transition-colors"
                >
                  Request a Quote <span aria-hidden="true">→</span>
                </Link>
              </div>
            </motion.div>
          </div>
          
          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="grid grid-cols-2 gap-6 lg:gap-8"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">40+</div>
              <div className="mt-2 text-sm text-gray-200">Years of Excellence</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">500+</div>
              <div className="mt-2 text-sm text-gray-200">Machines Delivered</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">50+</div>
              <div className="mt-2 text-sm text-gray-200">Countries Served</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div className="text-4xl font-bold text-blue-400">100%</div>
              <div className="mt-2 text-sm text-gray-200">Made in Germany</div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </section>
  )
}