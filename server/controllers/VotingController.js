const db = require('../../database/models')

class VotingController {
  static async store (req, res) {
    const { id_punto, favor, abstencion, contra } = req.body
    try {
      await db.sequelize.transaction(async t => {
        await db.Votacion.create({ id_punto, favor, contra, abstencion })
        res.json({
          success: true
        })
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Error interno del servidor.'
      })
    }
  }

  static async update (req, res) {
    const { id_punto, favor, abstencion, contra } = req.body
    try {
      await db.sequelize.transaction(async t => {
        await db.Votacion.update({ favor, contra, abstencion }, { where: { id_punto } })
        res.json({
          success: true
        })
      })
    } catch (error) {
      res.status(500).json({
        msg: 'Error interno del servidor.'
      })
    }
  }
}

module.exports = VotingController
