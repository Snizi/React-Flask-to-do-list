import React from 'react'
import { Article } from './Article'

export const Main = () => {
  return (
    <main className='main container'>
      <h1 className='main__title'>Bem vindo ao ANOTAAQUI</h1>
      <p className='main__text'>
        Mantenha suas notas organizadas em um só lugar.
      </p>
      <Article />
    </main>
  )
}
