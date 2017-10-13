<p align="center">
  <a href="https://david-dm.org/kettanaito/graphql-mongo">
    <img src="https://david-dm.org/kettanaito/graphql-mongo/status.svg" alt="Dependencies status" />
  </a>
</p>

<h1 align="center">GraphQL Mongo</h1>

## Introduction
This library is meant to make it easier and faster to get started using GraphQL with your existing MongoDB setup.

## API
| Class | Description |
| - | ----------- |
| `GraphQLDocument` | Wraps mongoose Schema definition, GraphQL queries/mutations/subscriptions into a managable Object, allowing easier GraphQL types composition and referencing. |

## Usage example
There is a minimal example of usage included within the library. Please see its [source code](./example) or run it locally on your machine, following the instructions below:

1. Fork the repository.
1. Install the dependencies with `npm install`.
2. Run `npm start` from the repository directory. This will create a simple Express server with the connection to the test Mongo database.
3. Navigate to [http://localhost:8040](http://localhost:8040). Play around with the GraphQL using an amazing GraphiQL IDE.

## Special thanks
* [express-graphql](https://github.com/graphql/express-graphql). Easy way to establish a GraphQL end-point in your Express server.
* [mongoose-schema-to-graphql](https://github.com/sarkistlt/mongoose-schema-to-graphql). Responsible for converting mongoose Schema to GraphQL types.
