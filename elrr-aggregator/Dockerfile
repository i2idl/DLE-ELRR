FROM registry1.dso.mil/ironbank/redhat/openjdk/openjdk17:1.17

WORKDIR /app

COPY ./target/elrraggregator-0.0.1-SNAPSHOT.jar /app

ENTRYPOINT ["java","-Dcom.redhat.fips=false","-jar","elrraggregator-0.0.1-SNAPSHOT.jar"]
