const express = require('express');
const app = express();
const port = 3030;

app.get('/', payloader);
app.listen(port, () => console.log(`Example app listening on port ${port}! PID: ${process.pid}`));

function payloader(req, res) {
  let iter = 3e8;
  while (iter>=0) {
    //console.log(iter);
    let a = 12;
    let b = Math.sin(a);
    let c =Math.log(a);
    iter--;
  }
  res.send('Done');
}