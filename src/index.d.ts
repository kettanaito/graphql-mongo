declare module 'graphql-mongo' {
  import * as mongoose from 'mongoose';
  import { ClassFieldType } from 'mongoose-schema-to-graphql';

  type TGraphQLTypeOptions = {
    class: ClassFieldType,
    exclude: RegExp | [string]
  }

  type TGraphQLQueryCollection = {
    [queryName: string]: () => Object
  }

  type TGraphQLDocumentOptions = {
    name?: string,
    description?: string,
    schema: mongoose.SchemaDefinition,
    enhanceSchema?: (schema: mongoose.Schema) => void,
    typeOptions?: TGraphQLTypeOptions;
    queries?: TGraphQLQueryCollection,
    mutations?: TGraphQLQueryCollection,
    subscriptions?: TGraphQLQueryCollection
  }
}
