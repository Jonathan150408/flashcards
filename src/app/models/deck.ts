import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

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
}
