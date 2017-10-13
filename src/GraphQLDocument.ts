import * as mongoose from 'mongoose';
import createGraphQLType from 'mongoose-schema-to-graphql';
import { TGraphQLDocumentOptions, TGraphQLQueryCollection } from './index.d';

const defaultOptions: TGraphQLDocumentOptions = {
  schema: {},
  typeOptions: {
    class: 'GraphQLObjectType',
    exclude: /^__/
  }
};

export default class GraphQLDocument {
  schema: mongoose.Schema;
  Model: Object;
  type: Object;
  queries: Object;
  mutations: Object;
  subscriptions: Object;

  constructor(options: TGraphQLDocumentOptions) {
    const documentOptions: TGraphQLDocumentOptions = { ...defaultOptions, ...options };
    const {
      name,
      description,
      schema: schemaDefinition,
      typeOptions,
      queries,
      mutations,
      subscriptions
    } = documentOptions;

    /* Create mongoose schema */
    this.schema = new mongoose.Schema(schemaDefinition);
    this.Model = mongoose.model(name, this.schema);

    /* Create GraphQL type from the mongoose schema */
    this.type = createGraphQLType({
      name,
      description,
      class: typeOptions.class,
      schema: this.schema,
      exclude: typeOptions.exclude
    });

    /* Append GraphQL queries */
    if (queries) this.queries = this.appendGraphQLQueries(queries);
    if (mutations) this.mutations = this.appendGraphQLQueries(mutations);
    if (subscriptions) this.subscriptions = this.appendGraphQLQueries(subscriptions);

    return this;
  }

  appendGraphQLQueries = (queries: TGraphQLQueryCollection): Object => {
    return Object.keys(queries).reduce((allQueries, queryName) => {
      const getQuery = queries[queryName];

      allQueries[queryName] = getQuery({
        type: this.type,
        schema: this.schema,
        Model: this.Model
      });

      return allQueries;
    }, {})
  }
}
