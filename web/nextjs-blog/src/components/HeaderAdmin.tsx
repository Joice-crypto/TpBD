'use client'

import { useUser } from "@auth0/nextjs-auth0/client"



export function HeaderAdm(){
  const { user, error, isLoading } = useUser();
  
 
  if (error) return <div>{error.message}</div>;

  // Se estiver logado
  if (user) {
    return (
     
        <header className=" bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% h-20 md:max-xl:flex grid grid-rows-1 grid-flow-col gap-x-1 " >
        <a href="/"> <div className=" text-white text-xl ml-10 mt-8" >FutebolFocus</div></a>
        <ul className="grid grid-rows-1 grid-flow-col"> 
        <a className=" hover:text-white" href="/campeonatos/view"><li className="p-9 ">Campeonatos</li></a>
        <a className=" hover:text-white" href="#"><li className="p-9">Rodadas</li></a>
        <a className=" hover:text-white" href="#"><li className="p-9">Partidas</li></a>
        <a className=" hover:text-white" href="/api/auth/logout"><li className="p-9">Sair</li></a>
        </ul> 
       
        
        </header>
      
    );
  }

    
  }