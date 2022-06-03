/** NO EXISTE HOISTING **/
let globlaScopeVar = 'Variable Global Scope';
console.log(globlaScopeVar);

// FUNCTION SCOPE
function functionScope() {
  let functionScopeVar = 'Variable Function Scope';
  console.log(functionScopeVar);
}

functionScope();

// BLOCK SCOPE

if (true) {
  let blockScopeVar = 'Variable Block Scope';
}

console.log(blockScopeVar);
