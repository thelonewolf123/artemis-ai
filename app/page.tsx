"use client"

import { useState, useEffect } from "react"
import Header from "@/components/common/header"
import Hero from "@/components/landing/hero"
import SkillMatrix from "@/components/landing/skill-matrix"
import Features from "@/components/landing/features"
import HowItWorks from "@/components/landing/how-it-works"
import CTA from "@/components/landing/cta"
import Footer from "@/components/common/footer"

export default function Page() {

  return (
    <>
      <main>
        <Hero />
        <SkillMatrix />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
