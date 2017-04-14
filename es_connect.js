/**
 * Created by dtran on 4/14/17.
 */

// We define an EsConnector module that depends on the elasticsearch module.
var EsConnector = angular.module('EsConnector', ['elasticsearch']);

// Create the es service from the esFactory
EsConnector.service('es', function (esFactory) {
    return esFactory({ host: 'search-covance-rsz4k7ac66qrxfvlzi3wzkozhe.us-west-2.es.amazonaws.com:80' });
});

// We define an Angular controller that returns the server health
// Inputs: $scope and the 'es' service

EsConnector.controller('ServerHealthController', function($scope, es) {

    es.cluster.health(function (err, resp) {
        if (err) {
            $scope.data = err.message;
        } else {
            $scope.data = resp;
        }
    });
});

// We define an Angular controller that returns query results,
// Inputs: $scope and the 'es' service

EsConnector.controller('QueryController', function($scope, es) {

// search for documents
    es.search({
        index: 'covance',
        size: 50,
        body: {
            "query":
            {
                "match": {
                    first_name: "rupa"
                }
            },
        }

    }).then(function (response) {
        $scope.hits = response.hits.hits;
    });

});


