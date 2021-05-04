// routes/report.js

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Insert coin from input to output
 *     description: Log coin for clasificaton.
 *     responses:
 *       200:
 *         description: Create log
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 output:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       jumlah_koin:
 *                         type: integer
 *                         description: Jumlah koin untuk output.
 *                         example: 50
 *                       input:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                               jumlah_koin:
 *                                  type: integer
 *                                  description: Jumlah koin yang diinput.
 *                                  example: 50
 *                               jenis_koin:
 *                                  type: string
 *                                  description: jenis koin untuk input.
 *                                  example: 50
 *                               tally:
 *                                  type: array
 *                                  items:
 *                                      type: object
 *                                      properties:
 *                                          jumlah_koin:
 *                                              type: integer
 *                                              description: Jumlah koin yang diinput.
 *                                              example: 50
 */
var express = require('express');
var router = express.Router();

// Require controller modules.
var coin_controller = require('../controllers/coinController');

// GET request for report
router.post('/', coin_controller.store);


module.exports = router;
