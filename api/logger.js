import bunyan from 'bunyan';

const logger = bunyan.createLogger({ name: "node-api" });

export default logger;