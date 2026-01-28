import Section from '#models/section'
import type { HttpContext } from '@adonisjs/core/http'
import { dd } from '@adonisjs/core/services/dumper'

export default class SectionsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    // Récupérer la liste des sections triées par ordre alphabétique sur le nom
    const sections = await Section.query().orderBy('name', 'asc')

    //test pour voir les valeurs
    //dd(sections)

    // Appel de la vue
    return view.render('pages/sections/home_sections', { sections })
  }
  /**
   * Display form to create a new record
   */
  async create({ view }: HttpContext) {
    // Récupération des sections triées par le nom
    const sections = await Section.query().orderBy('name', 'asc')
    // Appel de la vue
    return view.render('pages/section/create', { title: "Ajout d'une section", sections })
  }

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
  async destroy({ params, session, response }: HttpContext) {
    // Sélectionne l'enseignant à supprimer
    const section = await Section.findOrFail(params.id)
    // Supprime l'enseignant
    await section.delete()
    // Afficher un message à l'utilisateur
    session.flash('success', `La section ${section.name} a été supprimée avec succès !`)
    // Redirige l'utilisateur sur la home
    return response.redirect().toRoute('home')
    0
  }
}
