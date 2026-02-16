/*
 -Roles oficiales del sistema
 -Se congelan para evitar cambios accidentales
 */
export const ROLES = Object.freeze({
  GOD: "GOD",
  ORGANIZATION: "ORGANIZATION",
  NETWORK: "NETWORK",
  COMPANY: "COMPANY",
  WORKER: "WORKER",
});

//Acciones básicas que se pueden ejecutar sobre un recurso
export const ACTIONS = Object.freeze({
  CREATE: "CREATE",
  READ: "READ",
  UPDATE: "UPDATE",
  DELETE: "DELETE",
  ACTIVATE: "ACTIVATE",
  DEACTIVATE: "DEACTIVATE",
});
