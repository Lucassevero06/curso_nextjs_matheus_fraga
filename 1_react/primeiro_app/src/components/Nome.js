import React from 'react'

const Nome = ({ aluno, idade }) => {
  return (
    <div>
      <p>Bem-vindo: {aluno} - Idade: {idade}</p>
    </div>
  )
}

export default Nome
