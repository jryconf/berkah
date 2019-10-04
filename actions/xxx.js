"use strict";
let datafire = require('datafire');

module.exports = new datafire.Action({
  description: "xxx",
  inputs: [{
    type: "string",
    title: "name",
    default: "jRy",
    maxLength: 6
  }],
  handler: async (input, context) => {
    let result = await Promise.resolve();
    return result;
  },
});
