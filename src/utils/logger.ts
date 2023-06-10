import logger from 'pino'
import dayjs from 'dayjs'

const log = logger({
  // transport: {
  //   target: 'pino-pretty'
  // },
  prettyPrint: true,
  base: {
    pid: false
  },
  timestamp: () => `,"time":"${dayjs().format()}"`
})

export default log