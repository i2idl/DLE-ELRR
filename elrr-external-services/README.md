# ELRR External Services
ELRR External Services is a proxy for LRS or other (future) external data sources which is used by ELRR to get new xapi data for processing.

This repository is home to a Docker Container deployment configuration of ELRR External Services using the IronBank ELRR External Services Container. For information about the building the software itself and to build it locally see the [Github page](https://github.com/adlnet/elrr-aggregator).

# Requirements
For running the container, you only need Docker.

# Environment Variables
Configuration variables for running the application

## Required
- ELRR_LRS_URL: URL to access LRS. Should include host, port, protocol and path (e.g. `https://lrs.domain.org/xapi`)
- ELRR_LRS_USERNAME: LRS API Key
- ELRR_LRS_PASSWORD: LRS API Secret

## Optional (has defaults)
- ELRR_PORT: Port to deploy on (default 8088)
- ELRR_CHECK_HEADERS: Strict header checking (default false)
- JASYPT_ENCRYPTOR_PASSWORD: Needed only if using Jasypt `ENC(-)` cyphertext for LRS details above
