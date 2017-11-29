<img src="https://gramps-graphql.github.io/gramps-express/assets/img/gramps-banner.png" alt="GrAMPS · An easier way to manage the data sources powering your GraphQL server" width="450">

# GrAMPS GraphQL Data Source Base

[![Build Status](https://travis-ci.org/kriswep/data-source-restaurant.svg?branch=master)](https://travis-ci.org/kriswep/data-source-restaurant)
[![Maintainability](https://api.codeclimate.com/v1/badges/ac264833fac1fbd1afe0/maintainability)](https://codeclimate.com/github/kriswep/data-source-restaurant/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/ac264833fac1fbd1afe0/test_coverage)](https://codeclimate.com/github/kriswep/data-source-restaurant/test_coverage)

This is a minimal example and boilerplate for a GrAMPS data source. Inside,
you’ll find:

* **Connector** — how to access the data source (e.g. a REST API)
* **Model** — methods to retrieve/modify data from the data source (e.g. a CRUD
  wrapper)
* **Schema** — description for GraphQL to interpret the data (see the
  [GraphQL docs on schemas](http://graphql.org/learn/schema/))
* **Resolvers** — functions to map the results of calls to model methods to the
  schema

Each file contains a `TODO` comment explaining the changes you’ll need to make
to create a working data source.

The goal of this repo is to provide enough code to allow a working example of a
data source and its related tests, but to limit how much boilerplate needs to be
edited to get your own data source implemented.

## Code Quality and Continuous Integration

To help ensure a reliable, easy-to-maintain data source, this example also
includes:

* Configuration for Travis CI (for automated testing) and Code Climate (for
  quality analysis)
* Starts you off right with test coverage at 💯
* Provides testing helpers for common resolver testing patterns
* Comes with docs! https://ibm.biz/graphql-data-source

## Quickstart

**NOTE:** Replace all instances of `YOUR_DATA_SOURCE_NAME` with the actual name
you want to use (e.g. `data-source-companyname-datatype`).

```sh
# Clone the repo
git clone git@github.com:kriswep/data-source-restaurant.git data-source-YOUR_DATA_SOURCE_NAME

# Move into it
cd data-source-YOUR_DATA_SOURCE_NAME/

# Change the remote repo
git remote set-url origin git@github.com:USER_OR_ORG/YOUR_REPO_NAME.git

# IMPORTANT: Make sure to edit the name, description, contributors, and
# repository fields in package.json

# Install dependencies
yarn install
```

### To Develop with Mock Data

Start the app with the following command:

```sh
# Develop with mock data
yarn mock-data
```

### To Develop with Live Data

Once you’ve got your data source configured to load live data, you can enable
live data in development:

```sh
# Develop with live data
yarn live-data
```

### Notes for Developers

Currently, there is no watch capability (PRs welcome!), so the service needs to
be stopped (`control` + `C`) and restarted (`yarn [mock-data|live-data]`) to
reflect new changes to the data source.
