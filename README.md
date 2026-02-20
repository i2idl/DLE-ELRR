# DLE-ECCR
The ECCR is a set of microservices that aggregate all learner data within the DLE to a single learner profile

## Email Services
These services are designed to use Platform One's [P1PS server](https://p1ps-docs.dso.mil/documents/what-is-p1ps) instead of a standard SMTP server.  A good starting point if moving away from P1 P1 may be [SMTP2Go](https://developers.smtp2go.com/docs/getting-started-with-templates).

## Installing node packages
Because this was built for a PartyBus deployment, the following code must be run in the root directory before you can build some systems:
```
npm install
```

*Note*: These repos are based off the already open sourced [ELRR repos](https://github.com/search?q=org%3Aadlnet+ELRR&type=repositories), and have been packaged in this repo for ease of integration with other DLE service repos. 
