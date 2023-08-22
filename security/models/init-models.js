var DataTypes = require("sequelize").DataTypes;
var _carro = require("./carro");
var _carro_has_repuesto = require("./carro_has_repuesto");
var _mantenimiento = require("./mantenimiento");
var _persona = require("./persona");
var _persona_has_mantenimiento = require("./persona_has_mantenimiento");
var _repuesto = require("./repuesto");
var _usuario = require("./usuario");

function initModels(sequelize) {
  var carro = _carro(sequelize, DataTypes);
  var carro_has_repuesto = _carro_has_repuesto(sequelize, DataTypes);
  var mantenimiento = _mantenimiento(sequelize, DataTypes);
  var persona = _persona(sequelize, DataTypes);
  var persona_has_mantenimiento = _persona_has_mantenimiento(sequelize, DataTypes);
  var repuesto = _repuesto(sequelize, DataTypes);
  var usuario = _usuario(sequelize, DataTypes);

  carro.belongsToMany(repuesto, { as: 'repuesto_idrepuesto_repuestos', through: carro_has_repuesto, foreignKey: "carro_idCarro", otherKey: "repuesto_idrepuesto" });
  mantenimiento.belongsToMany(persona, { as: 'persona_idpersona_personas', through: persona_has_mantenimiento, foreignKey: "mantenimiento_idmantenimiento", otherKey: "persona_idpersona" });
  persona.belongsToMany(mantenimiento, { as: 'mantenimiento_idmantenimiento_mantenimientos', through: persona_has_mantenimiento, foreignKey: "persona_idpersona", otherKey: "mantenimiento_idmantenimiento" });
  repuesto.belongsToMany(carro, { as: 'carro_idCarro_carros', through: carro_has_repuesto, foreignKey: "repuesto_idrepuesto", otherKey: "carro_idCarro" });
  carro_has_repuesto.belongsTo(carro, { as: "carro_idCarro_carro", foreignKey: "carro_idCarro"});
  carro.hasMany(carro_has_repuesto, { as: "carro_has_repuestos", foreignKey: "carro_idCarro"});
  mantenimiento.belongsTo(carro, { as: "carro_idCarro_carro", foreignKey: "carro_idCarro"});
  carro.hasMany(mantenimiento, { as: "mantenimientos", foreignKey: "carro_idCarro"});
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
    usuario,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
