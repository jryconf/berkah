"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  description: "xxx",
  inputs: [{
    type: "string",
    title: "nam",
    default: "jRy",
    maxLength: 6
  }, {
    type: "string",
    title: "input2"
  }],
  handler: async (input, context) => {
    let result = await Promise.resolve();
    return result;
  },
});
