import { SessionProvider } from 'next-auth/react'
import '../styles/globals.css'

const Layout = ({ children }) => {
  return (
    <div className="w-full min-w-screen min-h-screen bg-slate-900 text-white relative">
      {children}
    </div>
  )
}

const SpotList = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default SpotList
