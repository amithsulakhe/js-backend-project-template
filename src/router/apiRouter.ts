import { Router } from 'express'
import apiController from '../controller/apiController'
import rateLimit from '../middleware/rateLimit'

const router = Router()

// for all end point after 10 time api call it will throw error
// router.use(rateLimit)

router.route('/self').get(rateLimit, apiController.self)
router.route('/health').get(apiController.health)

export default router
