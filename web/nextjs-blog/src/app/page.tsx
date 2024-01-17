/* eslint-disable react/no-unescaped-entities */
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
      <div className="grid grid-cols-2 ml-10">
        {/* vai ter noticias aqui */}
  
        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-56 w-64 mt-6 bg-stone-50 ">
            <a href="https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/01/15/veja-todos-os-confrontos-das-oitavas-da-copinha.htm"><p className="p-7 text-xl font-bold font-serif  text-blue-800"> Veja todos os confrontos das oitavas da Copinha </p></a>
          </div>
        </div>

      {/* noticia 2 */}

        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-56 w-64 mt-6 bg-stone-50 ">
            <a href="https://www.uol.com.br/esporte/futebol/ultimas-noticias/2024/01/16/leila-quer-mais-representatividade-feminina-no-futebol-somos-competentes.htm"><p className=" p-7 text-xl font-bold font-serif  text-blue-800"> Leila quer mais representatividade feminina no futebol: 'Somos competentes'</p></a>
          </div>
        </div>

        <div className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
          <div className="shadow-lg h-56 w-64 mt-6 bg-stone-50 ">
            <a href="https://www.idbr.org.br/wp-content/uploads/2023/12/Edital_Comite_Jovem_2024-.pdf?fbclid=IwAR22TQ5Bd2HH74SQjUggVol-5SvA1tsfa7OkO3gVvhgncMJVltyC8rdEFMU"><p className=" p-7 text-xl font-bold font-serif  text-blue-800"> Museu do futebol esta com inscrições abertas para o comitê jovem 2024. Veja Edial</p></a>
          </div>
        </div>
      </div>
    );
  }
  
}
