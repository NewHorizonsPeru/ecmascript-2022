var username = 'admin@newhorizons.edu.pe';
var role = 'ROLE_ADMIN';

//ES 5
console.log(username + '\n' + role);

// ES6
// BACKTICK -> ``
console.log(`${username} 
${role}`);

console.log(`${role === 'ROLE_ADMIN' ? 'Administrador' : 'Usuario'}`);
console.log(`${42 * 55}`);
