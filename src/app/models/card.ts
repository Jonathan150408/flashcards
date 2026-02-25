import { DateTime } from 'luxon'
// import { BaseModel, column } from '@adonisjs/lucid/orm'
//test with chatgpt
import { BaseModel, column, belongsTo } from '@adonisjs/lucid/orm'
import type { BelongsTo } from '@adonisjs/lucid/types/relations'
import Deck from '#models/deck'

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
  declare deckId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  //test with chatgpt
  @belongsTo(() => Deck)
  declare deck: BelongsTo<typeof Deck>
}
