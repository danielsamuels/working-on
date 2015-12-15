var browserSync = require('browser-sync')
var config      = require('../config')
var gulp        = require('gulp')

var browserSyncTask = function() {
  browserSync.init(config.tasks.browserSync)

  gulp.watch('working_on/**/*.html', browserSync.reload)
}
gulp.task('browserSync', browserSyncTask)
module.exports = browserSyncTask
