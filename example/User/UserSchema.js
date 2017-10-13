/**
 * Mongoose schema Object
 */
export default {
  email: {
    type: String,
    unique: true,
    required: true
  },
  firstName: String,
  lastName: String
};
