/* eslint-disable camelcase */

const { PgType } = require("node-pg-migrate");

exports.shorthands = undefined;

exports.up = pgm => {
    pgm.createTable('users', {
        id: {
            type: 'VARCHAR(50)',
            notNull: true
        },
        name: {
            type: 'TEXT',
            notNull: true
        }
    })
};

exports.down = pgm => {
    pgm.dropTable('users')
};
