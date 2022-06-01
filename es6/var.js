var globlaScopeVar = 'Variable Global Scope';

// FUNCTION SCOPE
function functionScope() {
  var functionScopeVar = undefined;
  console.log(functionScopeVar);
  functionScopeVar = 'Variable Function Scope';
}

functionScope();

// BLOCK SCOPE
console.log(blockScopeVar);

if (true) {
  var blockScopeVar = 'Variable Block Scope';
}

var blockScopeVar = undefined;
console.log(blockScopeVar);

if (true) {
  blockScopeVar = 'Variable Block Scope';
}
