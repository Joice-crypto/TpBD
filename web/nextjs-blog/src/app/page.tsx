"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (error) return <div>{error.message}</div>;

  if (user) {

    return(
      
    <p> Welcome {user.name}! Contruir uma página inicial para o Adm gerenciar tudo</p>
    )
    
  }

  if (!user) {
    return (
      <div>
        <div className="grid grid-cols-3 gap-4">
          <p className="p-9 col-span-2 text-black"> Uma noticia aqui </p>
        </div>
  
        {/* vai ter noticias aqui */}
  
        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-56 w-64 mt-6 bg-stone-50 ">
            <p className="text-center text-xl mt-20 text-black"> </p>
            <p className="text-center text-black"> </p>
            <button className="bg-blue-400 h-8  w-20 m-5 mt-24">
              <p className="text-center text-black ">
                <a href="#"> Ver mais </a>
              </p>
            </button>
          </div>
        </div>
      </div>
    );
  }
  
}
