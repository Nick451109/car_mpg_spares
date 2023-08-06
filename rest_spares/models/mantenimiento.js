const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mantenimiento', {
    idmantenimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    carro: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    encargado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    repuesto: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    servicio: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    carro_placa: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'carro',
        key: 'placa'
      }
    }
  }, {
    sequelize,
    tableName: 'mantenimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idmantenimiento" },
        ]
      },
      {
        name: "fk_mantenimiento_carro1_idx",
        using: "BTREE",
        fields: [
          { name: "carro_placa" },
        ]
      },
    ]
  });
};
