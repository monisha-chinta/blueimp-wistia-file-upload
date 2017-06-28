var app = angular.module('app');

/*
 * upload - directive to handle file upload events
 */
app.directive('upload', ['uploadManager', function factory(uploadManager) {
  return {
    restrict: 'A',
    link: function (scope, element, attrs) {
      $(element).fileupload({
        url : 'https://upload.wistia.com',
        add: function (e, data) {
          uploadManager.add(data);
        },
        progressall: function (e, data) {
          var progress = parseInt((data.loaded / data.total) * 100);
          uploadManager.progress(progress);
        },
        done: function (e, data) {
          if(data && data.result) {
            var url = 'https://fast.wistia.net/embed/iframe/' + data.result.hashed_id;
            uploadManager.done(url);
          }
        },
        fail: function(e, data) {
          if(data && data._response) {
            var response = JSON.parse(data._response.jqXHR.responseText);
            uploadManager.fail(response.error);
          }
        }
      });
    }
  };
}]);
