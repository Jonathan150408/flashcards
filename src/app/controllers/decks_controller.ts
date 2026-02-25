import Deck from '#models/deck'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class DecksController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    //va chercher les decks, ordonnées par id + cartes associées
    const decks = await Deck.query().orderBy('id', 'asc').preload('cards')

    return view.render('pages/home.edge', { decks })
  }

  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    return view.render('pages/decks/decks_create.edge')
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    dd(request.body())
  }

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
