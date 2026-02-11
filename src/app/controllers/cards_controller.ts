import type { HttpContext } from '@adonisjs/core/http'

//import the model to ask to database
import Card from '#models/card'
import { dd } from '@adonisjs/core/services/dumper'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    console.log("Called the card's controller with index")
    //va chercher les cartes, ordonnées par id (de 1 à 10 par exemple)
    const cards = await Card.query()

    return view.render('pages/cards/cards_home.edge', { cards })
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
