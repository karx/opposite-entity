// var SparqlHttp = require('sparql-http-client');
var fetch = require('isomorphic-fetch')
// SparqlHttp.fetch = fetch;
// var endpoint = new SparqlHttp({endpointUrl: 'https://query.wikidata.org/sparql'})

// module.exports = async (value) => {
//     return endpoint.selectQuery(value);
// }
    
class SPARQLQueryDispatcher {
	constructor( endpoint ) {
		this.endpoint = endpoint;
	}

	query( sparqlQuery ) {
		const fullUrl = this.endpoint + '?query=' + encodeURIComponent( sparqlQuery );
		const headers = { 'Accept': 'application/sparql-results+json' };

		return fetch( fullUrl, { headers } ).then( body => body.json() );
	}
}

const endpointUrl = 'https://query.wikidata.org/sparql';

const queryDispatcher = new SPARQLQueryDispatcher( endpointUrl );
// queryDispatcher.query( sparqlQuery ).then( console.log );

        
module.exports = async (value) => {
    return queryDispatcher.query( value )
}
     

// endpoint.selectQuery(query)
//     .then( (result) => {
//         console.log(result);
//         return result.text();
//     })
//     .then( (result) => {
//         // parse the body for pretty print
//         console.log(result)
//         var result = JSON.parse(result)

//         // output the complete result object
//         console.log(JSON.stringify(result, null, ' '))

//     }).catch( (reason) => {
//         console.error(reason);
//     });