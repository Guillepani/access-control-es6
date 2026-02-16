/*
 -Roles oficiales del sistema
 -Se congelan con Object.freeze para evitar cambios accidentales
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

/**
 * Tipos de recurso del sistema sobre los que se aplican permisos
 * Se usarán junto con rol + acción para evaluar acceso.
 */
export const RECORD_TYPES = Object.freeze({
  ORGANIZATION: "ORGANIZATION",
  NETWORK: "NETWORK",
  COMPANY: "COMPANY",
  WORKER: "WORKER",
  USER: "USER",
});

