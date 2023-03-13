// const path = require("path")

// module.exports = {
//   create: (context) => {
//     const { base: basename } = path.parse(context.getFilename());
//     return {
//       Program: function (node) {
//         const lowerName = basename.split("").reduce((p, c, i, arr) => {
//           if (c === c.toUpperCase() && c !== c.toLowerCase()) {
//             if (i === 0) return p + c;
//             if (arr[i - 1] === ".") return p + c.toLowerCase();
//             return `${p}-${c.toLowerCase()}`
//           }
//           return p + c
//         }, "")

//         if (lowerName !== basename) {
//           context.report({
//             node,
//             message: `Avoid to use camelCase in our project, the file name could be: ${lowerName}`,
//           });
//         }
//       },
//     }
//   },
// };