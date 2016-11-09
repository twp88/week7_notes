var expect = {
  isTrue: function(expectToCheck) {
    if (!expectToCheck) {
      throw new Error("Expect failed: " + expectToCheck + " is not truthy");
    }
    else {
      console.log("Congrats, you passed!")
    };
  }
};
