const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('carro_has_repuesto', {
    carro_idCarro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'carro',
        key: 'idCarro'
      }
    },
    repuesto_idrepuesto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'repuesto',
        key: 'idrepuesto'
      }
    }
  }, {
    sequelize,
    tableName: 'carro_has_repuesto',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "carro_idCarro" },
          { name: "repuesto_idrepuesto" },
        ]
      },
      {
        name: "fk_carro_has_repuesto_repuesto1_idx",
        using: "BTREE",
        fields: [
          { name: "repuesto_idrepuesto" },
        ]
      },
      {
        name: "fk_carro_has_repuesto_carro1_idx",
        using: "BTREE",
        fields: [
          { name: "carro_idCarro" },
        ]
      },
    ]
  });
};
