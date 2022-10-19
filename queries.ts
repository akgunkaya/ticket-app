const Pool = require('pg').Pool

const config = require('./dbconfig.ts')

const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.dbport,
})

const getEvents = (request, response) => {
  pool.query('SELECT * FROM event ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const getEventById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM event WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const createEvent = (request, response) => {
  const { start_time, end_time, location, title } = request.body

  pool.query('INSERT INTO event (start_time, end_time, location, title) VALUES ($1, $2, $3, $4) RETURNING *', [start_time, end_time, location, title], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send(`Event added with ID: ${results.rows[0].id}`)
  })
}

const updateEvent = (request, response) => {
  const id = parseInt(request.params.id)
  const { start_time, end_time, location, title } = request.body

  pool.query(
    'UPDATE event SET start_time = $1, end_time = $2, location = $3, title = $4, WHERE id = $5',
    [start_time, end_time, location, title, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`Event modified with ID: ${id}`)
    }
  )
}

const deleteEvent = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM event WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`Event deleted with ID: ${id}`)
  })
}

module.exports = {
  getEvents,
  getEventById,
  createEvent,
  updateEvent,
  deleteEvent,
}
