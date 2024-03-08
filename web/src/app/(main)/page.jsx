import { Hero } from '@/components/Hero'
import { Newsletter } from '@/components/Newsletter'
import MainHeader from '@/components/MainHeader'
import Collaboration from '@/components/Collaboration'

export default function Home() {
  return (
    <>
      <MainHeader />
      <Hero />
      <Collaboration />
      <Newsletter />
    </>
  )
}
