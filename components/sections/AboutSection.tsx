"use client"

import { motion } from "framer-motion"
import { Award, Shield, Globe2, Wrench } from "lucide-react"

const features = [
  {
    name: "40+ Years of Excellence",
    description: "Decades of experience in plastic machinery manufacturing with continuous innovation.",
    icon: Award,
  },
  {
    name: "Made in Germany",
    description: "Highest quality standards and precision engineering that you can rely on.",
    icon: Shield,
  },
  {
    name: "Global Presence",
    description: "Worldwide installations and references across all continents.",
    icon: Globe2,
  },
  {
    name: "Complete Solutions",
    description: "From design to installation, we provide comprehensive machinery solutions.",
    icon: Wrench,
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            Engineering Excellence Since 1980s
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-300"
          >
            Diamat Maschinenbau GmbH stands for innovation, quality, and reliability in plastic machinery manufacturing.
          </motion.p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col"
              >
                <dt className="text-base font-semibold leading-7 text-white">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-400">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}