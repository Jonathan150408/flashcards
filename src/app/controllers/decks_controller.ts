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
    // Validation des données saisies par l'utilisateur
    const { name, description } = await request.validateUsing(deckValidator)
    // Sélectionner l'enseignant dont on veut mettre à jour des informations
    const deck = await Deck.findOrFail(params.id)
    // Met à jour les infos de l'enseignant
    deck.merge({ name, description })
    const deckUpdated = await deck.save()
    // Afficher un message à l'utilisateur
    session.flash('success', `Le deck ${deckUpdated.name} a été mis à jour !`)
    // Redirige l'utilisateur sur la home
    return response.redirect().toRoute('home')
  }

  /**
   * Delete record
   */
  async destroy({ params, session, response }: HttpContext) {
    const deck = await Deck.findOrFail(params.id)
    await deck.delete()

    // Afficher un message à l'utilisateur
    session.flash('success', `Le deck ${deck.name} a été supprimé !`)
    // Redirige l'utilisateur vers home
    return response.redirect().toRoute('home')
  }
}
