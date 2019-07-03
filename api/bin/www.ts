#!/usr/bin/env node

/**
 * Module dependencies.
 */
import { ApiServer } from '../server/ApiServer';

const server = new ApiServer();

server.setup();
server.start();

export default server;
