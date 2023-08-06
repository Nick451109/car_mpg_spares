const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('persona_has_mantenimiento', {
    persona_idpersona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'persona',
        key: 'idpersona'
      }
    },
    mantenimiento_idmantenimiento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'mantenimiento',
        key: 'idmantenimiento'
      }
    }
  }, {
    sequelize,
    tableName: 'persona_has_mantenimiento',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "persona_idpersona" },
          { name: "mantenimiento_idmantenimiento" },
        ]
      },
      {
        name: "fk_persona_has_mantenimiento_mantenimiento1_idx",
        using: "BTREE",
        fields: [
          { name: "mantenimiento_idmantenimiento" },
        ]
      },
      {
        name: "fk_persona_has_mantenimiento_persona1_idx",
        using: "BTREE",
        fields: [
          { name: "persona_idpersona" },
        ]
      },
    ]
  });
};
