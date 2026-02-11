import Card from '#models/card'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  async run() {
    // Write your database queries inside the run method
    await Card.createMany([
      {
        id: 1,
        question: "Qu'est ce qu'une vue ?",
        answer: "Il s'agit d'une partie du html qui sera affiché par le navigateur.",
      },
    ])
  }
}
