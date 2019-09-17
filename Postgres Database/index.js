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
  const addUsers = (userData, cb) => {
    console.log('This is USER DATA', userData)
    const { displayName, username, email, password } = userData
    console.log('This is accessing displayname', displayName)
    pool.query(`INSERT INTO users (username, email, password, displayname) VALUES ('${username}', '${email}', '${password}', '${displayName}')`, (err, data) => {
      if(err) {
        console.log('This is an error', err)
      } else {
        cb(null, data)
      }
    })
  }
// ====== Get Request =======
  const getMessages = () => {
    pool.query(`SELECT * FROM messages WHERE user_id=1`, (err, messages) => {
      if(err) {
        console.log('Error Retrieving Data', err);
      } else {
        console.log('Messages', messages);
      }
    });
  }
// ======== DELETE Request ========
  const deleteMessages = () => {
    pool.query(`DELETE FROM messages WHERE id=2`, (err,data) => {
      if(err) {
        console.log('ERROR DELETE ATTEMPT', err);
      } else {
        console.log('SUCCESSFUL DELETE', data);
      }
    });
  }

  module.exports = {
    addUsers, 
    getMessages,
    deleteMessages
  }