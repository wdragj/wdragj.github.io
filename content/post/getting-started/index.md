---
title: Docker and its basic concepts
subtitle: Docker is a tool that allows developers, sys-admins etc. to easily
  deploy their applications in a sandbox (called containers) to run on the host
  operating system i.e. Linux.
date: 2022-10-05T13:27:19.172Z
summary: Docker is a tool that allows developers, sys-admins etc. to easily
  deploy their applications in a sandbox (called containers) to run on the host
  operating system i.e. Linux.
draft: false
featured: false
authors: []
lastmod: 2020-12-13T00:00:00.000Z
tags:
  - Docker
categories:
  - Docker
projects: []
image:
  caption: ""
  focal_point: ""
  placement: 2
  preview_only: true
  filename: featured.png
---
## W﻿hat is Docker?

Docker is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly. With Docker, you can manage your infrastructure in the same ways you manage your applications. By taking advantage of Docker’s methodologies for shipping, testing, and deploying code quickly, you can significantly reduce the delay between writing code and running it in production.



## What are the benefits of Docker?

* The key benefit of Docker is that it allows users to **package an application with all of its dependencies into a standardized unit** for software development
* Unlike virtual machines, containers do not have high overhead and hence enable more efficient usage of the underlying system and resources



## Terminology

* *Dockerfile*

  * Is a simple text file with instructions to build a Docker image.
* *Images*

  * The blueprints of our application which form the basis of containers.
  * An image is a combination of a file system and parameters.
* *Containers*

  * Created from Docker images and run the actual application.
  * Containers are instances of Docker images that can be run using the Docker run command.
  * The basic purpose of Docker is to run containers.
* *Docker Daemon*

  * The background service running on the host that manages building, running and distributing Docker containers
  * The daemon is the process that runs in the operating system which clients talk to.
* *Docker Client*

  * The command line tool that allows the user to interact with the daemon. More generally, there can be other forms of clients too - such as [Kitematic](https://kitematic.com/) which provide a GUI to the users.
  * The command line tool that allows the user to interact with the daemon
  * More generally, there can be other forms of clients too - such as [Kitematic](https://kitematic.com/) which provide a GUI to the users.
* *Docker Hub*

  * A [registry](https://hub.docker.com/search?q=&type=image) of Docker images.
  * You can think of the registry as a directory of all available Docker images.
  * If required, one can host their own Docker registries and can use them for pulling images.



## Docker architecture

Docker uses a client-server architecture. The Docker *client* talks to the Docker *daemon*, which does the heavy lifting of building, running, and distributing your Docker containers. The Docker client and daemon *can* run on the same system, or you can connect a Docker client to a remote Docker daemon. The Docker client and daemon communicate using a REST API, over UNIX sockets or a network interface. Another Docker client is Docker Compose, that lets you work with applications consisting of a set of containers.

![Docker Architecture Diagram](https://docs.docker.com/engine/images/architecture.svg)



### The Docker daemon[](https://docs.docker.com/get-started/overview/#the-docker-daemon)

The Docker daemon (`dockerd`) listens for Docker API requests and manages Docker objects such as images, containers, networks, and volumes. A daemon can also communicate with other daemons to manage Docker services.



### The Docker client[](https://docs.docker.com/get-started/overview/#the-docker-client)

The Docker client (`docker`) is the primary way that many Docker users interact with Docker. When you use commands such as `docker run`, the client sends these commands to `dockerd`, which carries them out. The `docker` command uses the Docker API. The Docker client can communicate with more than one daemon.

### Docker Desktop[](https://docs.docker.com/get-started/overview/#docker-desktop)

Docker Desktop is an easy-to-install application for your Mac, Windows or Linux environment that enables you to build and share containerized applications and microservices. Docker Desktop includes the Docker daemon (`dockerd`), the Docker client (`docker`), Docker Compose, Docker Content Trust, Kubernetes, and Credential Helper. For more information, see [Docker Desktop](https://docs.docker.com/desktop/).

### Docker registries[](https://docs.docker.com/get-started/overview/#docker-registries)

A Docker *registry* stores Docker images. Docker Hub is a public registry that anyone can use, and Docker is configured to look for images on Docker Hub by default. You can even run your own private registry.

When you use the `docker pull` or `docker run` commands, the required images are pulled from your configured registry. When you use the `docker push` command, your image is pushed to your configured registry.

### Docker objects[](https://docs.docker.com/get-started/overview/#docker-objects)

When you use Docker, you are creating and using images, containers, networks, volumes, plugins, and other objects. This section is a brief overview of some of those objects.

#### Images

An *image* is a read-only template with instructions for creating a Docker container. Often, an image is *based on* another image, with some additional customization. For example, you may build an image which is based on the `ubuntu` image, but installs the Apache web server and your application, as well as the configuration details needed to make your application run.

You might create your own images or you might only use those created by others and published in a registry. To build your own image, you create a *Dockerfile* with a simple syntax for defining the steps needed to create the image and run it. Each instruction in a Dockerfile creates a layer in the image. When you change the Dockerfile and rebuild the image, only those layers which have changed are rebuilt. This is part of what makes images so lightweight, small, and fast, when compared to other virtualization technologies.

#### Containers

A container is a runnable instance of an image. You can create, start, stop, move, or delete a container using the Docker API or CLI. You can connect a container to one or more networks, attach storage to it, or even create a new image based on its current state.

By default, a container is relatively well isolated from other containers and its host machine. You can control how isolated a container’s network, storage, or other underlying subsystems are from other containers or from the host machine.

A container is defined by its image as well as any configuration options you provide to it when you create or start it. When a container is removed, any changes to its state that are not stored in persistent storage disappear.