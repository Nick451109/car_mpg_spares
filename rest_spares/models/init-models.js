var DataTypes = require("sequelize").DataTypes;
var _carro = require("./carro");
var _carro_has_repuesto = require("./carro_has_repuesto");
var _mantenimiento = require("./mantenimiento");
var _persona = require("./persona");
var _persona_has_mantenimiento = require("./persona_has_mantenimiento");
var _repuesto = require("./repuesto");

function initModels(sequelize) {
  var carro = _carro(sequelize, DataTypes);
  var carro_has_repuesto = _carro_has_repuesto(sequelize, DataTypes);
  var mantenimiento = _mantenimiento(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var persona_has_mantenimiento = _persona_has_mantenimiento(sequelize, DataTypes);
  var repuesto = _repuesto(sequelize, DataTypes);

  carro.belongsToMany(repuesto, { as: 'repuesto_idrepuesto_repuestos', through: carro_has_repuesto, foreignKey: "carro_placa", otherKey: "repuesto_idrepuesto" });
  mantenimiento.belongsToMany(persona, { as: 'persona_idpersona_personas', through: persona_has_mantenimiento, foreignKey: "mantenimiento_idmantenimiento", otherKey: "persona_idpersona" });
  persona.belongsToMany(mantenimiento, { as: 'mantenimiento_idmantenimiento_mantenimientos', through: persona_has_mantenimiento, foreignKey: "persona_idpersona", otherKey: "mantenimiento_idmantenimiento" });
  repuesto.belongsToMany(carro, { as: 'carro_placa_carros', through: carro_has_repuesto, foreignKey: "repuesto_idrepuesto", otherKey: "carro_placa" });
  carro_has_repuesto.belongsTo(carro, { as: "carro_placa_carro", foreignKey: "carro_placa"});
  carro.hasMany(carro_has_repuesto, { as: "carro_has_repuestos", foreignKey: "carro_placa"});
  mantenimiento.belongsTo(carro, { as: "carro_placa_carro", foreignKey: "carro_placa"});
  carro.hasMany(mantenimiento, { as: "mantenimientos", foreignKey: "carro_placa"});
  persona_has_mantenimiento.belongsTo(mantenimiento, { as: "mantenimiento_idmantenimiento_mantenimiento", foreignKey: "mantenimiento_idmantenimiento"});
  mantenimiento.hasMany(persona_has_mantenimiento, { as: "persona_has_mantenimientos", foreignKey: "mantenimiento_idmantenimiento"});
  carro.belongsTo(persona, { as: "persona_idpersona_persona", foreignKey: "persona_idpersona"});
  persona.hasMany(carro, { as: "carros", foreignKey: "persona_idpersona"});
  persona_has_mantenimiento.belongsTo(persona, { as: "persona_idpersona_persona", foreignKey: "persona_idpersona"});
  persona.hasMany(persona_has_mantenimiento, { as: "persona_has_mantenimientos", foreignKey: "persona_idpersona"});
  carro_has_repuesto.belongsTo(repuesto, { as: "repuesto_idrepuesto_repuesto", foreignKey: "repuesto_idrepuesto"});
  repuesto.hasMany(carro_has_repuesto, { as: "carro_has_repuestos", foreignKey: "repuesto_idrepuesto"});

  return {
    carro,
    carro_has_repuesto,
    mantenimiento,
    persona,
    persona_has_mantenimiento,
    repuesto,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
