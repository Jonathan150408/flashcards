import Deck from '#models/deck'
import { deckValidator } from '#validators/deck'
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
  async store({ request, session, response }: HttpContext) {
    // Valider les infos
    const { name, description } = await request.validateUsing(deckValidator)
    // Créer du deck
    const deck = await Deck.create({
      name,
      description,
    })
    // Afficher un message à l'utilisateur
    session.flash('success', `Le nouveau deck ${deck.name} a été ajouté avec succès !`)
    // Rediriger vers la homepage
    return response.redirect().toRoute('home')
  }

  /**
   * Show individual record
   */
  async show({ params, view }: HttpContext) {
    //rends le deck + cartes ou rien
    const deck = await Deck.query().where('id', params.id).preload('cards').firstOrFail()
    return view.render('pages/decks/decks_show.edge', { deck })
  }

  /**
   * Edit individual record
   */
  async edit({ params, view }: HttpContext) {
    const deck = await Deck.query().where('id', params.id).firstOrFail()
    return view.render('pages/decks/decks_edit.edge', { deck })
  }

  /**
   * Handle form submission for the edit action
   */
  async update({ params, request, session, response }: HttpContext) {
    // valider les données
    const { name, description } = await request.validateUsing(deckValidator)

    // trouver, modifier et sauvegarder le deck
    const deck = await Deck.findOrFail(params.id)
    deck.merge({ name, description })
    const deckUpdated = await deck.save()

    // flash - fonctionne pas
    session.flash('success', `Le deck ${deckUpdated.name} a été mis à jour !`)

    // revoie sur home
    return response.redirect().toRoute('home')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    // trouver et supprimer le deck
    const deck = await Deck.findOrFail(params.id)
    await deck.delete()

    // flash - fonctionne pas
    session.flash('success', `Le deck ${deck.name} a été supprimé !`)

    // revoie sur home
    return response.redirect().toRoute('home')
  }

  /**
   * Choisir le mode de jeu
   */
  async choose_practice_mode({ view, params }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    return view.render('pages/decks/decks_practice_menu.edge', { deck })
  }

  /**
   * Pratiquer un deck
   */
  async practice({ view, params }: HttpContext) {
    const deck = await await Deck.query().where('id', params.id).preload('cards')
    return view.render('pages/decks/decks_practice.edge', { deck })
  }
}
