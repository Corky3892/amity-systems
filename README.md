# amity-systems
A just for fun project building tools for our discord server.

# Bootstrapping Guide
To help enable community engagement we want to make it as easy as possible to get you into the code. These steps should help to get a development environment up and running.

### Help my terminal sucks
Please see: https://git-scm.com/.

### Getting Started With Docker
We are going to use Docker Compose to build out a development environment.

  1. Install Docker - https://docs.docker.com/desktop/windows/install/, for windows users this is a pretty straightfoward process. For the rest of us please see Docker Provisioning below before proceeding to step 2.
  2. Copy the [docker compose file](./bootstrap/docker-compose.yaml) into Docker desktop and launch the environment.
  3. Navigate to http://localhost:8443 and enter you development environment.

### Docker Provisioning
If you are not using Docker Desktop to manage your containers then you will need to install the Docker Engine on some unix based OS (Sorry MacOS users you are on your own here..). 

  1. If you already have a running Linux machine head over to https://docs.docker.com/get-docker/ and follow the instructions for your distro.
  2. Checkout [Portainer](https://docs.portainer.io/v/ce-2.9/start/install) if you would like a GUI to manage your containers.

I use [vagrant](https://www.vagrantup.com/) to create and provision VM's ontop of my windows environment. If you are interested in this approach checkout [vangrantfile](./bootstrap/Vagrantfile) to quickly provsion a Fedora server with Docker & Portainer installed.

