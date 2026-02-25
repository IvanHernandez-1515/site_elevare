## Estructura general del proyecto
```
├── Backend
│   ├── conf/
│   │   └── configuration.js
│   ├── node_modules/
│   └── src/
│   │   ├── db/
│   │   │   └── pool.js
│   │   ├── middlewares/
│   │   │   ├── errorHandler.js
│   │   │   └── notFound.js
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   │   └── google/
│   │   │   │   │   ├── google.controller.js
│   │   │   │   │   ├── google.repository.js
│   │   │   │   │   ├── google.routes.js
│   │   │   │   │   ├── google.service.js
│   │   │   │   │   └── google.validators.js
│   │   │   │   └── register/
│   │   │   │   │   ├── auth.controller.js
│   │   │   │   │   ├── auth.repository.js
│   │   │   │   │   ├── auth.routes.js
│   │   │   │   │   ├── auth.service.js
│   │   │   │   │   └── auth.validators.js
│   │   │   │   └── tokens/
│   │   │   │   │   ├── token.controller.js
│   │   │   │   │   ├── token.routes.js
│   │   │   │   │   ├── token.verify.service.js
│   │   │   │   │   └── tokens.repository.js
│   │   │   └── initial/
│   │   │   │   └── initial.routes.js
│   │   ├── routes/
│   │   │   └── AppRouter.js
│   │   ├── utils/
│   │   │   ├── httpError.js
│   │   │   └── mailer.js
│   │   └── app.js
│   ├── index.js
│   ├── package-lock.json
│   ├── package.json
│   └── README.md
```