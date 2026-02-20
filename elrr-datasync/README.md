# ELRR Datasync
The Datasync component of ELRR is a periodic process which polls data sources (at this time just the [External Services](https://github.com/adlnet/elrr-external-services) proxy) to collect xAPI data and put it into a Kafka Topic for consumption and processing by ELRR.

This repository is home to a Docker Container deployment configuration of ELRR Datasync using the IronBank ELRR Datasync Container. For information about the building the software itself and to build it locally see the [Github page](https://github.com/adlnet/elrr-datasync).

# Requirements
For running the container, you only need Docker.

# Configuration and Environment Variables
Please see the full list of [configuration options and environment variables here](https://github.com/adlnet/elrr-datasync#properties-and-environment-variables)
