var expect = {
    toEqual: function(toCheck, toBe){
      if (toCheck !== toBe){
        throw new Error("expected "+ toCheck + " to be " + toBe);
      }
      else {
        console.log("test passed!");
      }
    }
};
