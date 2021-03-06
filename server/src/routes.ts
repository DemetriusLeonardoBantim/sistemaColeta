import express, { request, response } from 'express'
import knex from './database/connection'

import PointsController from './controllers/PointsController'
import ItemsController from './controllers/ItemsController'


const routes = express.Router()
const pointsController = new PointsController()
const itemsController = new ItemsController()




routes.get('/items',itemsController.index)
routes.get('/points', pointsController.create)
routes.post('/points:id', pointsController.show)



export default routes