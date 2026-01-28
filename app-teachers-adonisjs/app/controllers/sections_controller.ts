import Section from '#models/section'
import type { HttpContext } from '@adonisjs/core/http'

export default class SectionsController {
  /**
   * Display a list of resource
   */
  async index({ view }: HttpContext) {
    //
    // Récupérer la liste des enseignants triés par ordre alphabétique sur le nom et le prénom
    const sections = await Section.query()
    //.orderBy('name', 'asc')

    // Appel de la vue
    return view.render('pages/home', { sections })
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
  async destroy({ params }: HttpContext) {}
}
