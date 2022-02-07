import path from 'path'
import dbPath from './data.json'
import { JSONFileSync, Low } from 'lowdb/lib';

const adapter = new JSONFileSync(path(__dirname, dbPath))
const db = new Low(adapter)

const getSections = () => {
    console.log(db.get('sections'));
}

export {
    getSections
}