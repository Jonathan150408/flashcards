import { BaseSchema } from '@adonisjs/lucid/schema'
export default class extends BaseSchema {
  protected tableName = 'sections'
  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      // added (down)
      table.string('name').notNullable()
      // added (up)
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }
  async down() {
    this.schema.dropTable(this.tableName)
  }
}
