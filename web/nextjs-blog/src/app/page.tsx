import Image from 'next/image'

export default function Home() {


  return (
    <div>
    <div className='grid grid-cols-3 gap-4'>
    <p className='p-9 col-span-2 text-black'> Bem-vindo ao FutebolFocus, sua fonte completa para informações sobre futebol e campeonatos. Explore análises aprofundadas, estatísticas atualizadas e as últimas notícias dos torneios mais emocionantes do mundo. Dos campeonatos locais às ligas globais, oferecemos uma experiência imersiva para acompanhar seus times favoritos. Descubra momentos épicos, dados intrigantes e insights exclusivos em um só lugar! </p>
      </div>
   
      <div className="h-96 mt-24 bg-cover bg-[url('../assets/futebol.jpg')]">
      
    </div>
    </div>
  )
}
