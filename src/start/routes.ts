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
router.get('/cards', [CardsController, 'index']).as('cards_home')

//form création de decks
router.get('/decks/create', [DecksController, 'create']).as('decks_create')
//enregistrement du deck
router.post('/decks/store', [DecksController, 'store']).as('decks_store')
//montrer toutes les cartes d'un deck
router.get('/decks/:id/show', [DecksController, 'show']).as('decks_show')
//modifier un deck
router.get('/decks/:id/edit', [DecksController, 'edit']).as('decks_edit')
