/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import DecksController from '#controllers/decks_controller'
import router from '@adonisjs/core/services/router'

router.get('/', [DecksController, 'index']).as('home')

//form création de decks
router.get('/decks/create', [DecksController, 'create']).as('decks_create')
//enregistrement du deck
router.post('/decks/store', [DecksController, 'store']).as('decks_store')
//montrer toutes les cartes d'un deck
router.get('/decks/:id/show', [DecksController, 'show']).as('decks_show')
//supprimer un deck
router.get('/decks/:id/destroy', [DecksController, 'destroy']).as('decks_destroy')
//modifier un deck
router.get('/decks/:id/edit', [DecksController, 'edit']).as('decks_edit') //1. afficher le form
router.post('/decks/:id/update', [DecksController, 'update']).as('decks_update') //2. valider et enregistrer
