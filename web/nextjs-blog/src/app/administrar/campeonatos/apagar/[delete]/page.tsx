'use client'

import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { useParams } from 'next/navigation'
import { FormEvent } from 'react'


export default function DeleteCampeopnato() {

    const router = useRouter()
    const params = useParams()
   

    async function DeleteCamp(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)

        const parametro = params.delete

        console.log(parametro)

        await api.delete(
            `/campeonatos/${parametro}`
          )
        
          router.push('/campeonatos/view')
        
    }

    


  return (

    <div>
     <p className=' p-5 mt-6 text-center text-xl '> Excluir Campeonato</p>
    <div className='flex justify-center mt-2'>
        <form action="" onSubmit={DeleteCamp}>
        <p> Tem certeza que deseja excluir o campeonato ?</p>
  
        <button className='bg-red-500 w-28 mb-64 h-6 mt-10  text-white-Light' type="submit" id="confirmButton">Excluir</button>
        <a href="/"><button className='bg-green-500 w-36 mb-64 h-6 mt-10 ml-10 text-white-Light' type='button'>Voltar ao Inicio</button></a>
        </form>
        
            
    </div>
   </div>
  )
}