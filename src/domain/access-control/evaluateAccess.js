/**
 * Motor central de autorización.
 * Evalúa si un usuario puede ejecutar una acción sobre un recurso.
 * No accede a base de datos ni modifica nada.
 * Devuelve siempre { allowed, reason }.
 */
export const evaluateAccess = ({ user, action, resource } = {}) => {
  if (!user) return { allowed: false, reason: "Missing user" };
  if (!action) return { allowed: false, reason: "Missing action" };
  if (!resource) return { allowed: false, reason: "Missing resource" };
  if (!user.active) return { allowed: false, reason: "User inactive" };
  if (user.role === "GOD") return { allowed: true, reason: "GOD can access everything" };
//si ninguna regla anterior permite el acceso -> denegar acceso
  return { allowed: false, reason: "Acces denied"};
};

