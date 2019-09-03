const {Pool, Client} = require('pg');

const pool = new Pool({
  user: 'zacharypierce',
  host: 'localhost',
  database: 'life',
  password: '',
  port: 5432,
});
pool.connect()
  .then(() => console.log('CONNECTED'))
  .catch(err => console.log(err));

// ====== POST Request ======= 
  // pool.query(`INSERT INTO users (username, email) VALUES ('Haley Jenkins', 'Haley@gmail.com')`, (err, data) => {
  //   if(err) {
  //     console.log('This is ERROR', err);
  //   } else {
  //     console.log('POST Successful');
  //   }
  // });
// ====== Get Request =======
  // pool.query(`SELECT * FROM messages WHERE user_id=1`, (err, messages) => {
  //   if(err) {
  //     console.log('Error Retrieving Data', err);
  //   } else {
  //     console.log('Messages', messages);
  //   }
  // });
// ======== DELETE Request ========
  pool.query(`DELETE FROM messages WHERE id=2`, (err,data) => {
    if(err) {
      console.log('ERROR DELETE ATTEMPT', err);
    } else {
      console.log('SUCCESSFUL DELETE', data);
    }
  });