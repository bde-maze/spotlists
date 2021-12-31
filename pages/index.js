import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center py-2">
      <Head>
        <title>SpotList</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">SpotList</h1>
      </main>
    </div>
  )
}
