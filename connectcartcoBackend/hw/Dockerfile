FROM openjdk:17-oracle
COPY target/*.jar hw.jar
EXPOSE 8089
ENTRYPOINT ["java", "-jar", "hw.jar"]
