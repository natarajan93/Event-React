 FROM maven:3.8.5-openjdk-17 AS build
 COPY . .
 RUN mvn clean package -DskipTests
 
 FROM openjdk:17.0.1-jdk-slim
 COPY --from=build /target/Event-0.0.1-SNAPSHOT.jar Event.jar
 EXPOSE 4040
 RUN echo "This is correct"
 ENTRYPOINT ["java", "-jar", "Event.jar"]

 
