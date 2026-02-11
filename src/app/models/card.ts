import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Card extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  //champ question
  @column()
  declare question: String
  //champ réponse
  @column()
  declare answer: String
  //champ deckId
  @column()
  declare deck_id: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}
