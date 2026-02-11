/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import CardsController from '#controllers/cards_controller'
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home')
router.get('/cards', [CardsController, 'index']).as('home')
