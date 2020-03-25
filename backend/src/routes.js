const express = require('express');
const routes = express.Router();
const ongController = require('./controllers/OngController')
const incidentController = require('./controllers/IncidentController')
const profileController = require('./controllers/ProfileController')
const sessionController = require('./controllers/SessionController')
/** 
 *  Rota / Recurso (qual a entidade/tabela do banco que eu quero obter os dados)
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Altera uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Parâmetros separados por '&' e nomeados enviados na rota após '?' (Filtros, paginação)
  * Route Params: Pamâmetros utilizados para identificar recursos
  * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
  */

/*routes.post('/users', (request, response) => {
    //response.send('Hello World!')
    const query = request.query
    console.log(query)
    response.json({evento: "Semana OmniStack 11.0", aluno: "Lucas Limão"})
});*/

routes.get('/ongs', ongController.index)
routes.post('/ongs', ongController.create)

routes.get('/incidents', incidentController.index)
routes.post('/incidents', incidentController.create)
routes.delete('/incidents/:id', incidentController.delete)

routes.get('/profile', profileController.index)

routes.post('/sessions', sessionController.create)


module.exports = routes