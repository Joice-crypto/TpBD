'use client'

import { api } from "@/lib/api"
import { useRouter } from "next/navigation"
import { FormEvent } from "react"


export default function NewCampeonato() {

  const router = useRouter()

  async function hundleCreateCamp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
   
    await api.post(
      '/campeonatos',

      {
        ID_camp:formData.get('id'),
        Nome: formData.get('Nome'),
        Ano: formData.get('Ano'),

        
      }
    )

    router.push('/campeonatos/view')
  }

  return (
    <><h1 className="text-xl mt-12 text-center"> Inserir Campeonato</h1><div className=" mb-14 flex justify-center ">
          <form onSubmit={hundleCreateCamp} className='grid grid-rows-1  shadow-lg h-96 w-96 bg-stone-200 mt-10  '>
          <label className="p-10">ID</label>
              <input name="id" className='rounded-md mx-8 ' type="number" />
              <label className="p-10">Nome do campeonato</label>
              <input name="Nome" className='rounded-md mx-8 mb-10' type="text" />
              <label className="ml-10 mb-2">Ano</label>
              <input name="Ano" className='rounded-md mx-8 ' type="text" />
              <button type="submit" className='my-5  w-32 ml-32 text-white-Light rounded-md bg-green-500'>Enviar</button>
          </form>
      </div></>
   
  )
}