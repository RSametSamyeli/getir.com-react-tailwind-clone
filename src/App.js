import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Categories from './components/Categories'
import Campaings from './components/Campaings'
import Favorites from './components/Favorites'
import MobileApp from './components/MobileApp'
import Cards from './components/Cards'
import Footer from './components/Footer'
import { useWindowWidth } from '@react-hook/window-size'

function App() {
  const windowWidth = useWindowWidth()

  return (
    <div>
      <Header />
      {windowWidth < 768 && <Campaings />}
      <HeroSection />
      <Categories />
      {windowWidth > 768 && <Campaings />}
      <Favorites />
      <MobileApp />
      <Cards />
      <Footer />
    </div>
  )
}

export default App
