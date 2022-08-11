import Alert from './alert'
import Footer from './footer'
import Meta from './meta'
import Header from '../components/header'
type Props = {
  preview?: boolean
  children: React.ReactNode
}

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
     <Header/>
        <main>{children}</main>
     
      <Footer />
    </>
  )
}

export default Layout
