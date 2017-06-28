var app = angular.module('app');

/*
 * wistiaFileUpload - component to upload file to wistia
 * usage:
 *    <wistia-file-upload token="<token>"></wistia-file-upload>
 */
app.component('wistiaFileUpload', {
  bindings: {
    token: "="
  },
  controller: function($scope, $rootScope, $sce, uploadManager) {
    $scope.progress = 0;
    $scope.error = '';
    $scope.firstTime = true;
    $scope.files = [];
    $scope.percentage = 0;

    this.$onInit = function() {
      $scope.token = this.token;
    }

    $rootScope.$on('fileAdded', function (e, data) {
      $scope.files.push(data);
      uploadManager.upload($scope.token);
      $scope.percentage = 0;
      $scope.error = '';
      $scope.showProgressBar = true;
      $scope.$apply();
    });
    $rootScope.$on('uploadProgress', function (e, data) {
      $scope.percentage = data;
      $scope.$apply();
    });
    $rootScope.$on('done', function (e, data) {
      $scope.videoSrc = $sce.trustAsResourceUrl(data);
      $scope.showProgressBar = false;
      $scope.$apply();
    });
    $rootScope.$on('fail', function (e, data) {
      $scope.showProgressBar = false;
      $scope.error = data;
      $scope.$apply();
    });

    this.uploadMore = function() {
      $scope.videoSrc = null;
    }
  },
  templateUrl: './templates/fileUpload.html'
});
