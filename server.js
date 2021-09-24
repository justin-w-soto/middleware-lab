const app = require ('./lib/app.js');
const pool = require  ('./lib/utils/pool.js');

const PORT = process.env.PORT || 7890;

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server started on ${PORT}`);
});

process.on('exit', () => {
  console.log('Goodbye old friend!');
  pool.end();
});
