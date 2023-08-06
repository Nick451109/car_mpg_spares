const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carro', {
    placa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    modelo: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    marca: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    year: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    'km/gal': {
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
          { name: "placa" },
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
