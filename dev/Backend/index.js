import config from "./conf/configuration.js";
//objeto global de configuracion
globalThis.config = Object.freeze(config);
console.log(config);

import app from "./src/server.js";

app.listen(config.port, config.host, () => {
  console.log(`✅ Servidor corriendo en http://${config.host}:${config.port}`);
});