const Sequelize = require('sequelize');
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/managers_react_router');

const Employee = db.define('employee', {
  name: Sequelize.STRING
});

Employee.belongsTo(Employee, { as: 'manager' });

const sync = () => {
  return db.sync({ force: true });
};

const data = [
  { name: 'Melchior' },
  { name: 'Gaspiar' },
  { name: 'Baltazar' },
];

const seed = () => {
  return Promise.all(data.map(employee => {
    return Employee.create(employee);
  }))
  .then(([melchior, gaspiar, baltazar]) => {
    gaspiar.setManager(baltazar);
    melchior.setManager(baltazar);
  });
};

module.exports = {
  sync,
  seed,
  models: {
    Employee
  }
};
