import config from "./conf/configuration.js";
import { initPool } from "./src/db/pool.js";
import CreateApp from "./src/app.js";

//objeto global de configuracion
globalThis.config = Object.freeze(config);
initPool(config); //inicializa dbObject

//crea express para usar
const app = CreateApp();

app.listen(config.port, config.host, () => {
  console.log(`✅ Servidor corriendo en http://${config.host}:${config.port} url front:${config.frontUrl}`);
});