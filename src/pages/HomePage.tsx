import Hero from '../components/Hero'
import WorksShowcase from '../components/WorksShowcase'
import ArtDisplay from '../components/ArtDisplay'
import CraftDisplay from '../components/CraftDisplay'
import Achievements from '../components/Achievements'
import ExploreCategories from '../components/ExploreCategories'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function HomePage() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <Hero />
      </div>
      <WorksShowcase />
      <ArtDisplay />
      <CraftDisplay />
      <Achievements />
      <ExploreCategories />
      <Footer />
    </>
  )
}