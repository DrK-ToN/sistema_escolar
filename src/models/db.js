const Sequelize = require("sequelize"); //Conexão com o banco de dados
const sequelize = new Sequelize("escola", "root", "root", {
    host: "localhost",
    port: "3306",
    dialect: "mysql",
});

//exportando as variáveis
module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
};
