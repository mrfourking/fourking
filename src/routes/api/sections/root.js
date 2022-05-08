import { getSections } from '../../../db'

export async function get(req, res, next) {
    const sections = getSections().value()

    if (sections !== null) {
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify({sections}))
    } else {
      next()
    }
  }