# Backend

This section uses node, express and mongodb.

To get up and running:

- install all dependencies. You can run `yarn` or `npm i` to o this.
- Make a copy of the `.env.example` to `.env`, you can change the values to match your preference.
- Run the project with `yarn dev` to start the server.

This project is modelled after the popular ruby on rails/laravel setup. All project routes, controllers and models can be found in the `app` directory. `lib` holds some important libraries which aren't exactly part of the app, ...

## dependencies

- "bcrypt": "^5.0.1",
- "cors": "^2.8.5",
- "dotenv": "^8.2.0",
- "express": "^4.17.1",
- "helmet": "^4.5.0",
- "jsonwebtoken": "^8.5.1",
- "mongoose": "^5.12.5"
