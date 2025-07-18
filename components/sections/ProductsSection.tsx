"use client"

import { motion } from "framer-motion"
import { Film, Factory, FileText, Layers, Shield } from "lucide-react"
import Link from "next/link"

const products = [
  {
    name: "Flat Film Extrusion Machines",
    description: "Our primary expertise with worldwide references. High-performance machines for flat film production.",
    icon: Film,
    features: ["High output rates", "Energy efficient", "Precise thickness control"],
  },
  {
    name: "Plastic Manufacturing Equipment",
    description: "Comprehensive solutions for plastic manufacturing, processing, and recycling.",
    icon: Factory,
    features: ["Manufacturing tools", "Processing machinery", "Recycling systems"],
  },
  {
    name: "Paper Industry Equipment",
    description: "Specialized machinery for paper industry applications and technical films.",
    icon: FileText,
    features: ["Technical films", "Coating systems", "Custom solutions"],
  },
  {
    name: "Plate Extrusion Systems",
    description: "Advanced systems capable of producing plates up to 25mm thickness.",
    icon: Layers,
    features: ["Up to 25mm thickness", "Multiple materials", "High precision"],
  },
  {
    name: "EVOH Barrier Films",
    description: "Specialized production lines for high-performance barrier film applications.",
    icon: Shield,
    features: ["Barrier properties", "Food packaging", "Medical applications"],
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl"
          >
            Our Product Portfolio
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-muted-foreground"
          >
            Comprehensive machinery solutions for plastic manufacturing and processing
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex flex-1 flex-col p-8">
                <div className="flex items-center gap-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <product.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {product.name}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {product.description}
                </p>
                <ul className="mt-6 space-y-2">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-muted-foreground">
                      <span className="mr-2 text-primary">•</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href="#contact"
                    className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}