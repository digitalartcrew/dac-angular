app.service('Auth', function($state) {

  this.authorized = false;
  this.memorizedState = null;

  var
  clear = function() {
    this.authorized = false;
    this.memorizedState = null;
  },

  go = function(fallback) {
    this.authorized = true;
    var targetState = this.memorizedState ? this.memorizedState : fallback;
    $state.go(targetState);
  };

  return {
    authorized: this.authorized,
    memorizedState: this.memorizedState,
    clear: clear,
    go: go
  };
});

app.service("BlogService",['$resource', function($resource){
  return $resource('/api/user/:userId/blogs/:id', {id: '@_id'}, {
    update : {
      method: 'PUT'
    }
  });
}]);