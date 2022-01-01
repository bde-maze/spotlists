import { useSession } from 'next-auth/react'
import Head from 'next/head'

const Home = () => {
  const { data: session, status } = useSession()
  console.log({ session, status })
  return (
    <>
      <Head>
        <title>SpotList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-between w-full min-h-screen flex-1 px-20 text-center p-8">
        <div>
          <h1 className="text-6xl font-bold text-green-500">SpotList</h1>
          <h2 className="mt-3 text-lg font-light text-white">
            Hello {session.user.name}
          </h2>
        </div>
        <div className="rounded-2xl border border-white p-8 h-48">
          <div className="h-2/3">'mon image ici'</div>
          <div className="">le player entre les deux</div>

          <div className="h-1/3">mes infos là</div>
        </div>
        <div />
      </main>
    </>
  )
}

export default Home
