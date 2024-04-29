
import { handler } from "@api/handler";
import { endpoints } from "@api/routers";
import * as configure from "@api/configure";
import express from "express";


const server = express();
configure.serverBefore?.(server);

const { 
  HOST = '0.0.0.0', 
  PORT = 3000, 
  BASE = API_ROUTES.BASE,
  BASE_API = API_ROUTES.BASE_API,
  PUBLIC_DIR = API_ROUTES.PUBLIC_DIR,
} = process.env;

const SERVER_URL = `http://${HOST}:${PORT}${BASE}`;

server.use(BASE, express.static(PUBLIC_DIR));
server.use(BASE_API, handler);

configure.serverAfter?.(server);

server.listen(PORT, HOST, (error) => {
  if(error){
    console.error(`Error at ${SERVER_URL}`, error);
    configure.serverError?.(server, error);
  } else {
    console.log(`Ready at ${SERVER_URL}`);
    configure.serverListening?.(server, endpoints);
  }
});
