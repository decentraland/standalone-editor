module.exports = function solveSemanticUi(source) {
  return source.replace(/;;/g, ';');
};
