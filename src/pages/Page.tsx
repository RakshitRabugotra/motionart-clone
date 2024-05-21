import { useTitle } from '@/utils/hooks'

/* Internal Sections */
import Hero from './Section/Hero'
import Reviews from './Section/Reviews'
import ToolAd from './Section/ToolAd'
import Compatibility from './Section/Compatibility'
import Features from './Section/Features'
import Footer from './Section/Footer'
import Header from './Section/Header'
import FluidCanvas from './Section/FluidCanvas'

export default function Page() {
  // Give the page a title
  useTitle()

  return (
    <>
      <FluidCanvas />
      <div className='mx-auto min-h-screen max-w-screen-xl text-light-300'>
        <Header />
        <div className='bg-transparent p-4 md:p-5'>
          <Hero />
          <Reviews />
          <ToolAd />
          <Compatibility />
          <Features />
        </div>
      </div>
      <Footer />
    </>
  )
}
