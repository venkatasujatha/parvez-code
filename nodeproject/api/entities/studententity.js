const EntitySchema = require('typeorm').EntitySchema;

const student = new EntitySchema({
  name: 'student',
  tableName: 'student',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: true
    },
    firstname: {
      type: 'varchar',
    },
    lastname: {
      type: 'varchar',
    },
    email: {
      type: 'varchar',
    },
  },
});

module.exports = {student};
