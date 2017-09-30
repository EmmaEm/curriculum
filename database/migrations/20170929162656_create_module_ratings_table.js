
exports.up = knex =>
  knex.schema.createTable('module_ratings', table => {
    table.string('user_id').notNullable().index()
    table.string('module_id').notNullable().index()
    table.integer('rating')
    table.unique(['user_id', 'module_id'])
  })

exports.down = knex =>
  knex.schema.dropTable('module_ratings')
