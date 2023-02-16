---
title: Docker - Images
subtitle: Docker Images are read-only templates comprised of multiple layers
  which act as a blueprint of the container environment.
date: 2022-10-06T17:04:33.407Z
summary: Docker Images are read-only templates comprised of multiple layers
  which act as a blueprint of the container environment.
draft: false
featured: false
tags:
  - Docker
categories:
  - Docker
image:
  filename: featured.png
  focal_point: Smart
  preview_only: true
---
**Docker Images** are read-only templates comprised of multiple layers which act as a blueprint of the container environment.

Docker Images are built by specifying instructions inside a special file called **Dockerfile**.

Dockerfile allows us to define instructions to create a customized container environment.

We can execute the Docker build command on a Dockerfile to create a Docker Image.

This Docker image can then be used to create one or more instances of Docker containers associated with that image.

![Docker Process](https://s3.us-west-2.amazonaws.com/secure.notion-static.com/4575d8e2-ac32-44f1-a285-937288680f07/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221006%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221006T170717Z&X-Amz-Expires=86400&X-Amz-Signature=f05453ff7180559c129793efea80aebb878d3365d0e454880ad6afdc8d4c4ce5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Untitled.png%22&x-id=GetObject)

### **Running Containers from Docker Image**

Steps to create a Docker Image and run a Container

**Step 1:**

* Create a Dockerfile.

**Step 2:**

* Run the following command in the terminal and it will create a docker image of the application and download all the necessary dependencies needed for the application to run successfully.
* `docker build -t <tag to give to your image>`
* This will start building the image.

**Step 3:**

* We have successfully created a Dockerfile and a respective Docker image for the same.

**Step 4:**

* Run the following command in the terminal and it will create a running container with all the needed dependencies and start the application.
* `docker run -p 9000:80 <tag-name>`
* The 9000 is the port we want to access our application on.
* 80 is the port the container is exposing for the host to access.

### Useful Docker Image commands:

`docker images` See the list of Docker images on the system

`docker build -t <tag name> .` Build the container image

`docker run -dp 3000:3000 <tag name>` Start the app container using the image

`docker rmi <Image ID>` Removing Docker Images

`docker images -q` Return the Image ID’s only

`docker inspect <name>` Used to see the details fo an image or container