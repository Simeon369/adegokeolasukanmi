"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Users,
  CircleDot,
  Flag,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Users,
    title: "Basketball Coaching",
    subtitle: "Train with Excellence",
    description:
      "Comprehensive basketball training programs designed to elevate your game to the next level.",
    features: [
      "Individual skill development",
      "Team strategy & playbook creation",
      "Youth development programs",
      "Game analysis & feedback",
      "Mental conditioning",
    ],
    color: "gold",
    gradient: "from-gold-500 to-gold-600",
  },
  {
    icon: CircleDot,
    title: "Basketball Officiating",
    subtitle: "Fair Play Guaranteed",
    description:
      "Professional basketball referee services ensuring fair and accurate game management.",
    features: [
      "League game officiating",
      "Tournament officiating",
      "Scrimmage & practice games",
      "Youth & amateur leagues",
      "Professional standards",
    ],
    color: "gold",
    gradient: "from-gold-400 to-fire-500",
  },
  {
    icon: Flag,
    title: "Flag Football Officiating",
    subtitle: "Precision on the Field",
    description:
      "Expert flag football referee services for leagues and tournaments of all levels.",
    features: [
      "Recreational league games",
      "Competitive tournaments",
      "Corporate events",
      "School & youth leagues",
      "Rule enforcement expertise",
    ],
    color: "fire",
    gradient: "from-fire-400 to-fire-600",
  },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-300/50" />
      <div className="absolute inset-0 geometric-pattern opacity-30" />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Services
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 tracking-wide">
            WHAT I <span className="gradient-text">BRING TO THE GAME</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-4 sm:px-0">
            Whether you need world-class coaching or professional officiating, I
            deliver excellence on every court and field.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative bg-midnight-200/80 backdrop-blur-sm rounded-xl sm:rounded-2xl overflow-hidden border border-gold/10 card-hover h-full flex flex-col"
            >
              {/* Top gradient bar */}
              <div
                className={`h-1 sm:h-1.5 bg-gradient-to-r ${service.gradient}`}
              />

              <div className="p-5 sm:p-6 lg:p-8 flex flex-col flex-grow">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-lg sm:rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-5 lg:mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-midnight" />
                </div>

                {/* Title */}
                <h3 className="font-heading text-xl sm:text-2xl tracking-wide mb-1">
                  {service.title}
                </h3>
                <p
                  className={`text-${service.color} text-xs sm:text-sm font-medium mb-3 sm:mb-4`}
                >
                  {service.subtitle}
                </p>

                {/* Description */}
                <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features list */}
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8 flex-grow">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 sm:gap-3 text-gray-300 text-xs sm:text-sm"
                    >
                      <CheckCircle2
                        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 text-${service.color} flex-shrink-0 mt-0.5`}
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href="#contact"
                  className={`inline-flex items-center gap-2 text-${service.color} font-semibold text-sm sm:text-base group/link mt-auto`}
                >
                  Book This Service
                  <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Hover glow effect */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              >
                <div
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-t ${service.gradient} opacity-10 blur-3xl`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-10 sm:mt-12 lg:mt-16 px-4 sm:px-0"
        >
          <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">
            Need a custom package or have specific requirements?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-midnight font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-all duration-300 text-sm sm:text-base"
          >
            Let&apos;s Discuss Your Needs
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
