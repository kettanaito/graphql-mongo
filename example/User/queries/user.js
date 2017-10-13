/**
 * Get user by the ID.
 */
import { GraphQLString } from 'graphql';

const user = ({ type: UserType, Model: UserModel }) => ({
  type: UserType,
  args: {
    id: { type: GraphQLString }
  },
  resolve(prev, { id }) {
    return UserModel.findOne({ _id: id }).exec();
  }
});

export default user;
