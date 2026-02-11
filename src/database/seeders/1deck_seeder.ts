import Deck from '#models/deck'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Deck.createMany([
      {
        id: 1,
        name: 'JavaScript Fundamentals',
        description: 'Les bases essentielles de JavaScript pour débutants.',
      },
      {
        id: 2,
        name: 'Bases de données & SQL',
        description: 'Concepts fondamentaux des bases de données relationnelles.',
      },
    ])
  }
}
