import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'cards'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // question non-nulle et unique
      table.string('question').notNullable().unique()
      //réponse non-nulle et unique
      table.string('answer').notNullable().unique()
      //clé étrangère vers la table decks - aide de l'IA
      table.integer('deck_id').unsigned().references('id').inTable('decks').onDelete('CASCADE')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
