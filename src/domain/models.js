import crypto from 'node:crypto';

// Genera un UUID (identificador único)
export const generateId = () => crypto.randomUUID();

//Devuelve la fecha actual en formato ISO (string)
export const nowIso = () => new Date().toISOString();

// Campos comunes que tendrán todas las entidades "administrables"
export const withCommonFields = ({
  id = generateId(),
  active = true,
} = {}) => ({
  id,
  active,
  createdAt: nowIso(),
  deactivatedAt: null,
});

/*
Crea un usuario del sistema (login + perfil).
 - loginEmail: email único para iniciar sesión
 - contactEmails: emails extra del perfil (opcionales)
 - scope: a qué nivel pertenece (org/network/company/worker)
*/
export const createUser = ({
  role,
  loginEmail,
  passwordHash = 'TODO_HASH',
  contactEmails = [],
  scope = {},
  active = true,
} = {}) => {
  if (!role) throw new Error('createUser: role is required');
  if (!loginEmail) throw new Error('createUser: loginEmail is required');

  return {
    ...withCommonFields({ active }),
    role,
    loginEmail,
    contactEmails,
    passwordHash,
    scope,
  };
};
