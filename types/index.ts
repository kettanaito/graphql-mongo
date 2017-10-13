import * as mongoose from 'mongoose';
import { ClassFieldType } from 'mongoose-schema-to-graphql';

export type TGraphQLTypeOptions = {
  class: ClassFieldType,
  exclude: RegExp | [string]
}

export type TGraphQLDefinitions = {
  [queryName: string]: (args: {
    type: Object,
    schema: mongoose.Schema,
    Model: mongoose.Model
  }) => Object
}

export type TGraphQLDocumentOptions = {
  name?: string,
  description?: string,
  schema: mongoose.SchemaDefinition,
  enhanceSchema?: (schema: mongoose.Schema) => void,
  typeOptions?: TGraphQLTypeOptions;
  queries?: TGraphQLDefinitions,
  mutations?: TGraphQLDefinitions,
  subscriptions?: TGraphQLDefinitions
}