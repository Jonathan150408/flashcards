import type { HttpContext } from '@adonisjs/core/http'

//import the model to ask to database
import Card from '#models/card'
import { dd } from '@adonisjs/core/services/dumper'
import { cardValidator } from '#validators/card'

export default class CardsController {
  /**
   * Display a list of resource
   */
  async index({ view, params }: HttpContext) {}

  /**
   * Display form to create a new record
   */
  async create({ view, params }: HttpContext) {
    const deckId = params.deckId
    return view.render('pages/cards/cards_create.edge', { deckId })
  }

  /**
   * Handle form submission for the create action
   */
  async store({ request, session, response, params }: HttpContext) {
    // Valider les infos
    const { question, answer } = await request.validateUsing(cardValidator)
    // Créer du deck
    const card = await Card.create({
      question,
      answer,
      deckId: params.deckId,
    })
    // Afficher un message à l'utilisateur
    session.flash('success', `La nouvelle carte ${card.question} a été ajoutée !`)
    // Rediriger vers la homepage
    return response.redirect().toRoute('decks_show', { id: card.deckId })
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    const card = await Card.query().where('id', params.id).firstOrFail()
    return view.render('pages/cards/cards_show.edge', { card })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const card = await Card.query().where('id', params.id).firstOrFail()
    return view.render('pages/cards/cards_edit.edge', { card })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request }: HttpContext) {}

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    // trouver et supprimer le deck
    const card = await Card.findOrFail(params.id)
    await card.delete()

    // flash - fonctionne pas
    session.flash('success', `La carte ${card.question} a été supprimée !`)

    // revoie sur home
    return response.redirect().toRoute('home')
  }
}
