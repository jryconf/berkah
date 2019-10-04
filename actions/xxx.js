"use strict";
let datafire = require('datafire');

let myActions = datafire.Project.main().actions;
module.exports = new datafire.Action({
  description: "xxx",
  inputs: [{
    type: "string",
    title: "nam",
    default: "jRy",
    maxLength: 6
  }, {
    type: "string",
    title: "xx"
  }],
  handler: async (input, context) => {
    let result = await Promise.resolve();
    return result;
  },
});
