const EntitySchema = require('typeorm').EntitySchema;
const {student}=require("./studententity");

const address = new EntitySchema({
  name: 'address',
  tableName: 'address',
  columns: {
    addressid: {
      primary: true,
      type: 'int',
      generated: true
    },
    address: {
      type: 'varchar',
    },
  },
  relations:{
    student:{
        target:student,
        type:'one-to-one',
        joinColumn:true,
        joinTable: true,
        inverseSide:"student",
        cascade: true,
        eager: true
    }
}
});

module.exports = {address};
