const knex = require('./knex')

const getChecksForUserAndLabels = ({userId, labels}) => {
  let query = knex
    .select('*')
    .from('skill_checks')
    .where({user_id: userId})

  if (labels && labels.length > 0)
    query = query.whereIn('label', labels)

  return query.then(hashChecksByLabel)
}

const getCheckLogsForUsers = userIds => {
  return knex
    .select('*')
    .from('event_logs')
    .where('type', 'check')
    .whereIn('user_id', userIds)
    .orderBy('occurred_at', 'asc')
    .then(checkLogs => {
      const checkLogsByUserId = {}
      userIds.forEach(userId => {
        checkLogsByUserId[userId] = checkLogs.filter(checkLog =>
          checkLog.user_id === userId
        )
      })
      return checkLogsByUserId
    })
}

const hashChecksByLabel = checks => {
  const checkedMap = {}
  checks.forEach(check => {
    checkedMap[check.label] = true
  })
  return checkedMap
}

const addOrUpdateStarRating = (userId, moduleId, rating) => {
  return knex.raw(`
    INSERT INTO "module_ratings" ( "user_id", "module_id", "rating") values (?, ?, ?)
    ON CONFLICT ("module_id", "user_id")
    DO UPDATE SET "rating" = ?
    `, [userId, moduleId, rating, rating])
    .then(() => console.log('Rating has been added.'))
}

const getStarRating = (userId, moduleId) => {
  return knex('module_ratings')
    .select('rating')
    .where({user_id: userId, module_id: moduleId})
    .then(rating => rating)
}

const getModuleRatingStats = (moduleId) => {
  return knex('module_ratings')
    .avg('rating')
    .count('rating')
    .first()
}

module.exports = {
  getChecksForUserAndLabels,
  getCheckLogsForUsers,
  addOrUpdateStarRating,
  addOrUpdateStarRating,
  getModuleRatingStats,
}
