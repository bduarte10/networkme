// const path = require("path")

// module.exports = {
//   create: (context) => {
//     const { dir, base: basename } = path.parse(context.getFilename());

//     const reverseDirArr = dir.split(path.sep).reverse();
//     const relativeDir = reverseDirArr.slice(0, reverseDirArr.indexOf("src")).reverse()

//     if (relativeDir.length === 0) return {};

//     return {
//       Program: function (node) {

//         const nameArr = basename.split(".");
//         const minSec = nameArr[nameArr.length - 2] === "d" ? 4 : 3

//         if (nameArr.length < minSec) {
//           context.report({
//             node,
//             message: `This file does not meet the naming rule: "name.type.{tsx,ts}" or "name.type.d.{tsx,ts}"`,
//           });
//         }

//       },
//     }
//   },
// };