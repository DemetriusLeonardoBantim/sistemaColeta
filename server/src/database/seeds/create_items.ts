import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title:'Lampadas', images:'lampadas.svg'},
    {title:'Pilhas e baterias', images:'baterias.svg'},
    {title:'Papeis e Papelao', images:'papeis-papelao.svg'},
    {title:'Residuos eletronicos', images:'eletronicos.svg'},
    {title:'Residuos Organicos', images:'organicos.svg'},
    {title:'Oleo de cozinha', images:'oleo.svg'}
  ])
}