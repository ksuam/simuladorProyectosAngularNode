import { Model, DataTypes } from 'sequelize';
import dbmy from '../db/connectionMysql';


class Persona extends Model {}

Persona.init({
    // id_persona:{
    //     type: DataTypes.INTEGER
    // },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  apellido: {
    type: DataTypes.STRING,
    allowNull: true 
  },
 
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: dbmy, 
  modelName: 'Persona', 
  tableName: 'persona', 
  timestamps: false 
});



export default Persona;


