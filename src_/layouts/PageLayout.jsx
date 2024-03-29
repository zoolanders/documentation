import { Header } from '@/components/Header'
// import Footer from './_footer'

export default function PageLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      {/* <Footer /> */}
    </>
  )
}
