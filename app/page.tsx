import Image from 'next/image'
import styles from './page.module.css'
import './globals.css'
import Footer from '@/components/footer'
import Register from '@/pages/register'
import VertificationCode from '@/pages/vertificationCode'

export default function Home() {
  return (
    <main >
      <VertificationCode/>
      {/* <Register/> */}
      {/* <Footer/> */}
    </main>
  )
}
