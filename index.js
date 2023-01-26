import * as Sentry from "@sentry/node";
import * as Tracing from "@sentry/tracing";
import * as dotenv from "dotenv";
import DBconnector from "./Repository/connector.js";
import app from "./Delivery/index.js";

dotenv.config();

const port = process.env.PORT;

Sentry.init({
    dsn: process.env.DSN,
    integrations: [
      new Sentry.Integrations.Http({ tracing: true }),
      new Tracing.Integrations.Express({ app }),
    ],
  
    tracesSampleRate: 1.0,
  });

  app.listen(port, () => {
    DBconnector.createConnection();
    console.log(`Server running at http://localhost:${port}/`);
  });