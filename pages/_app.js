import '../styles/globals.css'

const Layout = ({ children }) => {
  return (
    <div className="w-full min-w-screen min-h-screen p-8 bg-gray-800 text-white">
      {children}
    </div>
  )
}

const SpotList = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default SpotList
