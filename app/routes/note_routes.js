// routes/note_routes.js

module.exports = function(app, db) {
    app.post('/user', (req, res) => {
        const user = { text: req.body.name, title: req.body.email };
        db.collection('users').insert(user, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops[0]);
          }
        });
    });
    app.get('/user', (req, res) => {
        res.send('Hello world\n');
    });
  };