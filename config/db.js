import { Sequelize } from "sequelize";

const db = new Sequelize("skill_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
