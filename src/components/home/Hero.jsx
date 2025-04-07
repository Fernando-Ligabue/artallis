import { bgHeroBanner } from "@/lib/constants"

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-banner relative" style={{ backgroundImage: `url(${bgHeroBanner})` }}>
      <div className="absolute inset-0 bg-black opacity-20" />
      <div className="main-container flex flex-col justify-center items-center gap-6 p-4 relative z-20">
        <h1 className="text-5xl sm:text-7xl text-white font-barlow font-bold text-center uppercase">Com o poder da arte criamos felicidade</h1>
        <h2 className="text-4xl sm:text-5xl text-white font-barlow font-normal text-center uppercase">Transformamos vidas e mudamos o mundo</h2>
      </div>
    </div>
  )
}

export default Hero