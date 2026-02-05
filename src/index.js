const user = {
  name: 'Alice',
  role: 'support',
};

const action = 'delete';

const resource = {
  type: 'ticket',
};

// Función que evalúa si un usuario puede realizar una acción en un recurso
const evaluateAccess = (user, action, resource) => {
  if (user.role === 'admin') {
    return {
      allowed: true,
      reason: 'Admin users can perform any action',
    };
  } else if (
    user.role === 'support' &&
    action === 'read' &&
    resource.type === 'ticket'
  ) {
    return {
      allowed: true,
      reason: 'Support users can read tickets',
    };
  }

  return {
    allowed: false,
    reason: 'Users does not have permission',
  };
};

const decision = evaluateAccess(user, action, resource);

console.log(
  `Decision: ${decision.allowed ? 'ALLOW' : 'DENY'} - ${decision.reason}`
);
