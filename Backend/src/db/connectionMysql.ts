import { Sequelize } from "sequelize";

const dbmy = new Sequelize('test', 'root', 'Tamaguchi13', {
    host: 'localhost',
    dialect: 'mysql'
  });

  
  export default dbmy;
