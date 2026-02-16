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

/*
 - Tipos de recurso del sistema sobre los que se aplican permisos
 - Se usarán junto con rol + acción para evaluar acceso.
 */
export const RECORD_TYPES = Object.freeze({
  ORGANIZATION: "ORGANIZATION",
  NETWORK: "NETWORK",
  COMPANY: "COMPANY",
  WORKER: "WORKER",
  USER: "USER",
});

/*
 -Matriz RBAC (según jerarquía real)
 - Estructura: ROLE -> RECORD_TYPE -> acciones permitidas
 */
const PERMISSIONS = Object.freeze({
  [ROLES.ORGANIZATION]: {
    [RECORD_TYPES.NETWORK]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.COMPANY]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.WORKER]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.USER]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
  },

  [ROLES.NETWORK]: {
    [RECORD_TYPES.COMPANY]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.WORKER]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.USER]: [ACTIONS.READ],
  },

  [ROLES.COMPANY]: {
    [RECORD_TYPES.WORKER]: [ACTIONS.CREATE, ACTIONS.READ, ACTIONS.UPDATE, ACTIONS.DELETE, ACTIONS.ACTIVATE, ACTIONS.DEACTIVATE],
    [RECORD_TYPES.USER]: [ACTIONS.READ],
  },

  [ROLES.WORKER]: {
    [RECORD_TYPES.WORKER]: [ACTIONS.READ],
  },
});

/*
 - Comprueba si un rol tiene permitida una acción sobre un tipo de recurso.
 - Consulta la matriz PERMISSIONS.
 */
export function isRoleAllowed({ role, action, recordType }) {
  if (!role || !action || !recordType) return false;

  const rolePermissions = PERMISSIONS[role];
  if (!rolePermissions) return false;

  const allowedActions = rolePermissions[recordType];
  if (!allowedActions) return false;

  return allowedActions.includes(action);
}



















