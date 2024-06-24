module.exports = function solveSemanticUi(source) {
  return source.replace(/;;/g, ';').replace(/--.0/g, '-.0');
};
