export function Header(){
      return (
        <header className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-20 md:max-xl:flex grid grid-rows-1 grid-flow-col gap-x-1 " >
     <a href="http://localhost:3000/"> <div className=" text-black text-xl p-8" >FutebolFocus</div></a>
      <ul className="grid grid-rows-1 grid-flow-col"> 
        <a className=" hover:text-white" href="http://localhost:3000/campeonatos/view"><li className="p-9 ">Campeonatos</li></a>
        <a className=" hover:text-white" href="#"><li className="p-9">Noticias</li></a>
        <a className=" hover:text-white" href="http://localhost:3000/administrar/view"><li className="p-9">Administrar</li></a>
      </ul>  
      </header>)
  }