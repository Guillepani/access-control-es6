//Importa una librería nativa de Node.js
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

/*
Crea una organización (nivel ORGANIZATION).
- name: nombre comercial
- cif: identificador fiscal (CIF/NIF según caso)
- phone/email: contacto opcional
*/
export const createOrganization = ({
  name,
  cif,
  phone = null,
  email = null,
  active = true,
} = {}) => {
  if (!name) throw new Error('createOrganization: name is required');
  if (!cif) throw new Error('createOrganization: cif is required');

  return {
    ...withCommonFields({ active }),
    name,
    cif,
    phone,
    email,
  };
};

/*
Crea una red (NETWORK) dentro de una organización.
- organizationId: a qué Organization pertenece
- taxId: identificador fiscal de la red
- name: nombre de la red
- phone/email/notes: opcionales
*/
export const createNetwork = ({
  organizationId,
  taxId,
  name,
  phone = null,
  email = null,
  notes = null,
  active = true,
} = {}) => {
  if (!organizationId) throw new Error("createNetwork: organizationId is required");
  if (!taxId) throw new Error("createNetwork: taxId is required");
  if (!name) throw new Error("createNetwork: name is required");

  return {
    ...withCommonFiles ({ active }),
    organizationId,
    taxId,
    name,
    phone,
    email,
    notes,
  };
};

























