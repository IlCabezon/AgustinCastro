//app file
import app from './app';
//config file
import config from './config';

app.listen(app.get('port'), () => {
  console.log(`Server on port ${config.PORT}`);
});

export default app;
