## Estructura general del proyecto
```
├── Frontend
│   ├── env/
│   │   ├── .env.development
│   │   └── .env.production
│   ├── node_modules/
│   ├── public/
│   │   ├── assets/
│   │   │   └── elevare.svg
│   │   └── vite.svg
│   ├── src
│   │   ├── assets/
│   │   │   ├── images/
│   │   │   │   ├── home/
│   │   │   │   │   └── hero/
│   │   │   │   │       ├── foto-hero-1.avif
│   │   │   │   │       └── foto-hero-2.avif
│   │   │   │   └── pages/
│   │   │   │   │    └── icons/
│   │   │   │   │    │    ├── Auth/
│   │   │   │   │    │    │    └── Login
│   │   │   │   │    │    │    │   └── logo-google-svg
│   │   │   │   │    │    ├── general/
│   │   │   │   │    │    │    ├── line_head.svg
│   │   │   │   │    │    │    ├── logo-app.svg
│   │   │   │   │    │    │    ├── logo-appv1.svg
│   │   │   │   │    │    │    ├── logo-facebook.svg
│   │   │   │   │    │    │    ├── logo-git.svg
│   │   │   │   │    │    │    ├── logo-instagram.svg
│   │   │   │   │    │    │    ├── logo-x-2.svg
│   │   │   │   │    │    │    ├── logo-x.svg
│   │   │   │   │    │    │    └── logo-youtube.svg
│   │   │   │   │    │    ├── home/
│   │   │   │   │    │    │    └── feature/
│   │   │   │   │    │    │    │   ├── eye.svg
│   │   │   │   │    │    │    │   ├── mosaic.svg
│   │   │   │   │    │    │    │   ├── upload.svg
│   │   │   │   │    │    │    │   └── versions.svg
│   │   │   └── react.svg
│   │   ├── components/
│   │   │   ├── common/
│   │   │   │   ├── header/
│   │   │   │   │   └── HeaderHome.jsx
│   │   │   │   └── footer/
│   │   │   │       └── FooterHome.jsx
│   │   │   ├── layouts/
│   │   │   │   ├── auth/
│   │   │   │   │   └── AuthLayout.jsx
│   │   │   │   └── home/
│   │   │   │       └── HomeLayout.jsx
│   │   │   └── ui/
│   │   │   │    ├── card/
│   │   │   │    │   └── FeatureCard.jsx
│   │   │   │    └── containers/
│   │   │   │    │   ├── Container.jsx
│   │   │   │    │   ├── ContainerCustom.jsx
│   │   │   │    │   └── ContainerExpandMobile.jsx
│   │   │   ├── index.js
│   │   ├── config/
│   │   │   └── config.project.js
│   │   ├── features/
│   │   │   ├── auth/
│   │   │   │   ├── ForgotPass.jsx
│   │   │   │   ├── LoginForm.jsx
│   │   │   │   └── register/
│   │   │   │   │   ├── hooks/
│   │   │   │   │   │  └── useRegisterForm.js
│   │   │   │   │   ├── schema/
│   │   │   │   │   │  └── register.schema.js
│   │   │   │   │   ├── service/
│   │   │   │   │   │  └── register.service.js
│   │   │   │   │   └── ui/
│   │   │   │   │      ├── RegisterPage.jsx
│   │   │   │   │      └── RegisterForm.jsx
│   │   │   ├── Counter/
│   │   │   │   ├── Counter.css
│   │   │   │   ├── Counter.jsx
│   │   │   │   └── index.css
│   │   │   └── home/
│   │   │   │   ├── DifferenceProduct.jsx
│   │   │   │   ├── FeatureSection.jsx
│   │   │   │   ├── HeroSection.jsx
│   │   │   │   ├── ProblemSection.jsx
│   │   │   │   ├── SolutionSection.jsx
│   │   │   │   └── Home.jsx
│   │   ├── router/
│   │   │   └── AppRouter.jsx
│   │   ├── shared/
│   │   │   ├── lib/
│   │   │   │   ├── http.js
│   │   │   │   └── validators.js
│   │   └── styles/
│   │   │   └── index.css
│   │   ├── main.jsx
│   │   ├── App.jsx
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package-lock.json
│   ├── package.json
│   ├── README.md
│   ├── tailwind.config.js
│   └── vite.config.js
```
---