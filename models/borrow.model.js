import Sequelize from "sequelize";
import { sequelize } from "../db/dbconnect.js"

const Borrow = sequelize.define('borrow', {
  borrow_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },

  return_date: {
    type: Sequelize.DATEONLY,
    allowNull: true
  },

  book_title: {
    type: Sequelize.STRING(250),
    allowNull: false
  },

  member_id: {
    type: Sequelize.INTEGER,
    allowNull: false
  },

  borrow_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },


  member_name: {
    type: Sequelize.STRING(250),
    allowNull: false
  },
  status: {
    type: Sequelize.STRING(250),
    allowNull: false
  },



},
  {
    sequelize,
    tableName: 'borrow',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "borrow_id" },
        ]
      },
    ]
  });

export default Borrow;