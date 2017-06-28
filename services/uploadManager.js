var app = angular.module('app');

/*
 * uploadManager - handles file upload events 
 */
app.factory('uploadManager', function($rootScope) {
  var videoFiles = [];
  return {
    add: function(file) {
      videoFiles.push(file);
      $rootScope.$broadcast('fileAdded', file.files[0].name);
    },
    clear: function() {
      videoFiles = [];
    },
    upload: function(api_token) {
      $.each(videoFiles, function (index, file) {
        file.formData = Object.assign({api_password: api_token});
        file.submit();
      });
      this.clear();
    },
    progress : function(percentage) {
      $rootScope.$broadcast('uploadProgress', percentage);
    },
    done: function(url) {
      $rootScope.$broadcast('done', url);
    },
    fail: function(error) {
      $rootScope.$broadcast('fail', error);
    }
  }
});
