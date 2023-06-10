import mongoose from 'mongoose'
import config from 'config'
import logger from './logger'

async function connect() {
  const dbUri = config.get<string>("dbUri")

  try {
    await mongoose.connect(dbUri)
    logger.info('DB connected');
  } catch (error) {
    logger.error('Could not connect to db')
    process.exit(1)
  }
}
// docker run --name mongodb -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=123 mongo

export default connect