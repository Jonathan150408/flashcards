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
