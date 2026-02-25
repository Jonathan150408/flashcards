import Card from '#models/card'
import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    //va chercher les decks, ordonnées par id
    const decks = await Deck.query().orderBy('id', 'asc')
    //compte le nombre de cartes par deck
    // !! fragile car si il manque un id c'est foutu !!
    const cardsCount = await Card.query()
      .select('deck_id')
      .count('id as count')
      .groupBy('deck_id')
      .orderBy('deck_id', 'asc')
      .then((rows) => rows.map((row) => Number(row.$extras.count)))

    // dd(cardsCount)

    return view.render('pages/home.edge', { decks, cardsCount })
  }

  /**
   * Display form to create a new record
   */
  async create({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {}

  /**
   * Show individual record
   */
  async show({ params }: HttpContext) {}

  /**
   * Edit individual record
   */
  async edit({ params }: HttpContext) {}

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params }: HttpContext) {}
}
