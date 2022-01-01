import Image from 'next/image'
import { getProviders, signIn } from 'next-auth/react'

const Login = ({ providers }) => {
  console.log({ providers })
  return (
    <div className="p8 flex flex-col justify-center items-center w-screen h-screen">
      <Image src="/spotify-logo.png" width={75} height={75} />
      <div className="text-4xl mt-5 font-light">
        <span className="font-bold text-green-400">SpotList </span>
        Login
      </div>
      <div>
        {Object.values(providers).map((provider) => (
          <button
            key={provider.name}
            className="rounded px-4 py-2 mt-7 bg-green-500 text-sm text-white font-bold shadow-lg shadow-green-600/30 ring-[0.75px] ring-green-300"
            onClick={(e) => {
              e.preventDefault()
              signIn(provider.id, { callbackUrl: '/' })
            }}
          >
            Connect with {provider.name}
          </button>
        ))}
      </div>
    </div>
  )
}

export const getServerSideProps = async () => {
  const providers = await getProviders()
  return {
    props: {
      providers,
    },
  }
}

export default Login
