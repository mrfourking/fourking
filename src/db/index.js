import path from 'path'
import dbPath from './data.yml'
import low from 'lowdb'
import FileSync from 'lowdb/adapters/FileSync'
import yml from 'js-yaml'
const adapter = new FileSync(path.join(__dirname, dbPath), { deserialize: yml.load })
const db = new low(adapter)

const getSections = () => {
    const collection = db.get('sections')

    return collection
}

export {
    getSections
}