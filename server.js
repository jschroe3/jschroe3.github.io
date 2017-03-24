const express = require( "express" );
const path = require( "path" );
const bodyParser = require( "body-parser" );
const app = express();

const port = process.env.PORT || 3000;

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );

app.use( "/", express.static( path.join( __dirname, "public" ) ) );

// CUSTOM API
app.post( "/api/itunes", ( req, res ) => {

  // get parameters from form
  // get results from itunes
  // send results back to user
  res.json( { } );
} );

app.listen( port, () => {
  console.log( `App listening on port ${port}!` );
} );
