import app from '../app';
import { createServer, Server } from 'http';
import logger from '../logger';

export class ApiServer {

  port: string;
  server: Server;

  setup() {
    this.port = this.normalizePort(process.env.PORT || '3100');

    /**
     * Get port from environment and store in Express.
     */
    app.set('port', this.port);

    /**
     * Create HTTP server.
     */
    this.server = createServer(app);
  }

  start() {

    /**
     * Listen on provided port, on all network interfaces.
     */
    this.server.listen(this.port, this.onListening);
    this.server.on('error', this.onError);
  }

  /**
   * Normalize a port into a number, string, or false.
   */
  normalizePort = (val: string): string => {
    let port = parseInt(val, 10);

    if (isNaN(port)) {

      // named pipe
      return val;
    }

    if (port >= 0) {

      // port number
      return String(port);
    }

    throw new Error(`Cannot normalize port ${val}`);
  };

  /**
   * Event listener for HTTP server "error" event.
   */
  onError = error => {
    if (error.syscall !== 'listen') {
      throw error;
    }

    let bind = typeof this.port === 'string'
      ? 'Pipe ' + this.port
      : 'Port ' + this.port;

      // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        logger.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        logger.error(bind + ' is already in use');
        process.exit(1);
        break;
      default:
        throw error;
    }
  };

  /**
   * Event listener for HTTP server "listening" event.
   */
  onListening = () => {
    let addr = this.server.address();
    let bind = typeof addr === 'string'
      ? 'pipe ' + addr
      : 'port ' + addr.port;
    logger.info(`Listening on ${bind}`);
  };
}
