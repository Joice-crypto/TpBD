import { api } from "@/lib/api";

export default async function ViewCampeonatos() {
  const response = await api.get("/campeonatos", { 
    headers: {
       
    },
  });

  const campeonatos = response.data;

  if (campeonatos.length == 0) {
    return 
}



return (
    <>
     <p className='text-center text-xl m-6'>Campeonatos</p>
    <div className="flex justify-center"> 
        {campeonatos.map((camp: { ID_camp: number; Nome:string; Ano:number }) =>{

        return (
            
            <div  key={camp.ID_camp} className="justify-items-center mt-16 grid grid-cols-2 gap-1 ">
                <div className="shadow-lg h-56 w-64 mt-6 bg-stone-50 ">
                <p className="text-center text-xl mt-20 text-black" > {camp.Nome} </p>
                <p className="text-center text-black" > {camp.Ano} </p>
                <button className="bg-green-400 h-8 rounded-full w-20 m-5 mt-8">
                    <p className="text-center text-black "><a href="http://localhost:3000/partidas/view"> Ver mais </a></p>
                </button>
                </div>
                
            </div>
            
        )
    })}
     </div>
    </>
);
}
