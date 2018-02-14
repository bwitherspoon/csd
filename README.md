# Composite Scrap Database

The Composite Scrap Database (CSD) is a resource to find information on
composite scrap, available composite scrap, and existing composite recyclers.
Additional information is also provided as an educational tool for technicians
and students. This project is a part of the Composites Recycling Technician
Education Program (CRTEP).

## Dependencies

The following software packages are required:

- [Node.js](https://nodejs.org)
- [npm](https://www.npmjs.com)
- [MongoDB](https://www.mongodb.com)

## Getting Started

After MongoDB is installed and configured the user database can be seeded with
an initial username and password with the provided bootstrap script:

```shell
export MONGODB_URI=mongodb://localhost:27017/csd
export CSD_USERNAME=admin
CSD_PASSWORD=password node server/bootstrap.js
```

Additional project dependencies can be installed locally with the [Node.js](https://nodejs.org) package manager [npm](https://www.npmjs.com):

```shell
npm install
```

The application can also be run using the [Node.js](https://nodejs.org) package manager [npm](https://www.npmjs.com):

```shell
export MONGODB_URI=mongodb://localhost:27017/csd
export PORT=8080
npm start
```
