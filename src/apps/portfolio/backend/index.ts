//app file
const app = require('./app');
//db conn
import dbConnection from './utils/dbConnection';

app.listen(app.get('port'), () => {
  dbConnection();
  console.log(`Portfolio Server on port ${app.get('port')}`);
});

export default app;
