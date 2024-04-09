import AboutSection from '@/components/layout/AboutSection'
import ContactSection from '@/components/layout/ContactSection'
import Header from '@/components/layout/Header'
import Hero from '@/components/layout/Hero'
import HomeMenu from '@/components/layout/HomeMenu'
import SectionHeader from '@/components/layout/SectionHeader'

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero />
      <HomeMenu />

      <AboutSection />

      <ContactSection />
    </>
  )
}
