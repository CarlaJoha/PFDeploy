const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Category",
    {
      type: {
        // type: DataTypes.ENUM(
        //   "clothing",
        //   "shoes",
        //   "accessories",
        //   "sports",
        //   "sustainable collection"
        // ),
        type: DataTypes.STRING,
      },
      // description: {
      //   type: DataTypes.TEXT,
      //   allowNull: false,
      // },
    },
    {
      timestamps: false,
    }
  );
};
