# Deployment Instructions for Angular Application using Docker

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) installed on your host machine.

## Step 1: Build the Docker Image

open your cmd or Terminal window and go to the project folde
Enter the command :
docker build -t Vehicle-Monitoring-System .

This command builds the Docker image from the provided Dockerfile and tags it as "Vehicle-Monitoring-System". You can change the tag to your preferred image name.

## Step 2: Run the Docker Container

docker run -d -p 8081:80 --name Vehicle-Monitoring-System-container Vehicle-Monitoring-System

This command runs the Docker container in detached mode, maps port 8081 on the host to port 80 in the container, and gives it the name "Vehicle-Monitoring-System-container".

## Step 3: Access Your Application
You can access the application by opening a web browser and navigating to http://localhost:8081. If the application is hosted on a different port, replace 8081 with the appropriate port number.

## Step 4: Stopping and Cleaning Up

To stop the container:
docker stop Vehicle-Monitoring-System

To remove the container:
docker rm Vehicle-Monitoring-System
