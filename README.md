# gimmevent

A Application to Search for nearby Events with Keywords. 
Data will be fetched by Eventbrite API, eventually also Meetup and LinkedIn. 

# Why

To have a central Application where I can search for upcoming Networking events in the area without having to check each Website seperately.

## Technologies

- Node.Js
- express




## Folder structure

### HTTP logic layer

Routes - handle HTTP requests that hit the API and route them to appropriate controllers
Controllers - take a request object, pull out data from the request, validate  and then send it to services

### Business logic layer

Services - Contains majority of the business logic, calls the data access layer or models, calls the external API's
 
