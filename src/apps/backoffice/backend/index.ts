const app = require('./app');
import dbConnection from './utils/dbConnection';

app.listen(app.get('port'), () => {
  dbConnection();
  console.log(`Backoffice Server on port ${app.get('port')}`);
});
