/*Import*/ 
import express from 'express';

/*Initializacion*/
const app = express();

/*Setting*/
app.set('port', process.env.PORT || 3000);

/*Middlewares*/


/*routes
Public files
Run server*/
app.listen(app.get('port'), () => {
    console.log('server listening on port', app.get('port'));
});
