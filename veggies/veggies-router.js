const knex = require("knex");
const knexFile = require("../knexfile");

const environment = process.env.NODE_ENV || "development";
const dbConfig = knexFile[environment];
const db = knex(dbConfig);