var awaitSparql = require('./await-sparql');
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))


// async function main() {
//     var data = await awaitSparql(sparqlQuery);
//     console.log(data);
// }
// main();
function generateQueryForOpposite(lat, long) {
    console.log(`Starting with lat: ${lat}, lng: ${long}`);

    var opposite_lat = -lat;
    var opposite_long = long > 0 ? (180 - long) : (180 + Number(long));
    
    console.log(`Looking for lat: ${opposite_lat}, lng: ${opposite_long}`);
    const sparqlQuery = ` SELECT ?place ?placeLabel ?objecttypeLabel ?image
    WHERE
    {
      ?place wdt:P31 ?objecttype .

       # Search by Nearest
  SERVICE wikibase:around { 
    ?place wdt:P625 ?location . 
    bd:serviceParam wikibase:center "Point(${opposite_long} ${opposite_lat})"^^geo:wktLiteral .
    bd:serviceParam wikibase:radius "10" . 
    bd:serviceParam wikibase:distance ?distance .
  }
      SERVICE wikibase:label { bd:serviceParam wikibase:language "en" }
      OPTIONAL { ?place wdt:P18 ?image }  
   } 
Order by  ?distance

    `;
    return sparqlQuery;

}

app.get('/get_opposite', async (request, response) => {
    console.log(request.query);
    var currentLatitude = request.query.latitude;
    var currentLongitude = request.query.longitude;
    console.log(request.query);
    var sparqlQuery = generateQueryForOpposite(currentLatitude, currentLongitude);
    var data = await awaitSparql(sparqlQuery);
    console.log(data.results.bindings.length);
    response.send({response: data});
});

app.listen(3147, function (err) {
    if (err) {
        throw err
    }
    console.log('Server started on port 3147')
})
