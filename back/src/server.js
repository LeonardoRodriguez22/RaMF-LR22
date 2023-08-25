const server = require("./app");
const PORT = 3001;
const { conn } = require('./DB_connection');

conn.sync({force: false})

server.listen(PORT, () => {
  console.log("Server raised in port " + PORT);
});



//          2da forma de sincronizar el servidor y la base de datos

// conn.sync({force:true}).then(()=>{
  
//   server.listen(PORT, () => {
//     console.log("Server raised in port " + PORT);
//   });
  
// })