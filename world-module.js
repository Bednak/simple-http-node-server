module.exports = {
  helloWorld: function() {
    const fs = require('fs');
    fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
      if (err) throw err;

      console.log('Success')
    });
  },

};
