# Angular + Elasticsearch Example

This is an example project designed to connect to AWS elasticsearch server thru Angular.

## Prerequisites

In order to run this example, you will need to have the following installed

* [elasticsearch] Make sure that you have an elasticsearch domain in AWS. Here I use the domain called 'covance' and the endpoint is 'search-covance-rsz4k7ac66qrxfvlzi3wzkozhe.us-west-2.es.amazonaws.com' 
   You can test the health of your Elasticsearch AWS by the command:
  
`curl -XGET search-covance-rsz4k7ac66qrxfvlzi3wzkozhe.us-west-2.es.amazonaws.com`
   
Port 80 is used by default, so specifying it is optional.
   
Test receiving data from Elasticsearch:
   
`curl -XGET search-covance-rsz4k7ac66qrxfvlzi3wzkozhe.us-west-2.es.amazonaws.com/covance/users/46?pretty`
  
* Done. Nothing else. Actually, for now I hijacked elasticsearch.angular.js and use it here.



## To run the example:
Point your browser to the index.html and it should see
 
 `Search result: `
 `Rupa	Roychowdhury`


Congratulations!!
You now have a working Elasticsearch backend and AngularJS frontend.