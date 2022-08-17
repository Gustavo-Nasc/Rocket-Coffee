import { Router } from "express"

routes = Router()

routes.get('/', (req, res) => res.render('index'))

export default routes