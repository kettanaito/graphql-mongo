import { GraphQLDocument } from '../../lib';
import UserSchema from './UserSchema';
import * as UserQueries from './queries';
import * as UserMutations from './mutations';

const User = new GraphQLDocument({
  /* Document name and description */
  name: 'User',
  description: 'User on the website',

  /* Mongoose schema definition */
  schema: UserSchema,

  /* Attach custom hooks for created Schema */
  enhanceSchema(schema) {
    schema.pre('save', (next) => {
      console.log('User (pre-save): User schema is about to be saved!');
      return next();
    })
  },

  /* Provide GraphQL definitions */
  queries: UserQueries,
  mutations: UserMutations
});

export default User;
