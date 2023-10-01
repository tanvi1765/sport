const joi = require("joi");
const dotenv = require("dotenv");
const Joi = require("joi");

dotenv.config();

const envVarsSchema = joi.object({
    PORT: joi.number().default(7000),
    MONGODB_URL: joi.string().trim().description("mongoodb url"),
    BASE_URL: Joi.string().trim().description("BASE_URL"),
    JWT_SECRET_KEY: Joi.string()
        .description("Jwt sectreat key")
        .default("this is jwtsecreat_key"),
    SMTP_HOST: joi.string().description("server that will send the emails"),
    SMTP_PORT: Joi.number().description("port to connect to the email server"),
    SMTP_USERNAME: Joi.string().description("username for email server"),
    SMTP_PASSWORD: Joi.string().description("password for email server"),
    EMAIL_FROM: Joi.string().description(
        "the from field in the emails sent by the app"
    ),
}).unknown();

const { value: envVars, error } = envVarsSchema
    .prefs({ errors: { label: "key" } })
    .validate(process.env);

if (error) {
    console.log("Config Error: ", error);
}

module.exports = {
    port: envVars.PORT,
    mongodb: {
        url: envVars.MONGODB_URL,
        options: {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        },
    },
    base_url: envVars.BASE_URL,
    jwt: {
        secret_key: envVars.JWT_SECRET_KEY,
    },
    email: {
        smtp: {
            host: envVars.SMTP_HOST,
            port: envVars.SMTP_PORT,
            auth: {
                user: envVars.SMTP_USERNAME,
                pass: envVars.SMTP_PASSWORD,
            },
        },
        from: envVars.EMAIL_FROM,
    }
};