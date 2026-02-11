import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
//test with chatgpt
import Card from './card.js'
import { HasMany } from '@adonisjs/lucid/types/relations'

export default class Deck extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //champ nom
  @column()
  declare name: String
  //champ description
  @column()
  declare description: String

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //test with chatgpt
  @hasMany(() => Card)
  declare cards: HasMany<typeof Card>
}
