const modula = {
    x: 42,
    getX: function () {
      return this.x;
    },
  };
  const modul={
    x:30,
    getX: function () {
        return this.x;
      },
  }
  console.log(modula.getX.toString());
  const unboundGetX = modula.getX;
  console.log(unboundGetX.toString());
  console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined
  
  const boundGetX = unboundGetX.bind(modul);
  console.log(boundGetX.toString());
  console.log(boundGetX());
  // Expected output: 42