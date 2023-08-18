const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carro', {
    idCarro: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    placa: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    anio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    kmgal: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    persona_idpersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'persona',
        key: 'idpersona'
      }
    }
  }, {
    sequelize,
    tableName: 'carro',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idCarro" },
        ]
      },
      {
        name: "fk_carro_persona_idx",
        using: "BTREE",
        fields: [
          { name: "persona_idpersona" },
        ]
      },
    ]
  });
};
