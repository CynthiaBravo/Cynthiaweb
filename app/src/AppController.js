/**
 * Main App Controller for the Angular Material Starter App
 * @param UsersDataService
 * @param $mdSidenav
 * @constructor
 */
function AppController(UsersDataService, $mdSidenav) {
  var self = this;

  self.selected     = null;
  self.bancos        = [ ];
  self.selectUser   = selectUser;
  self.toggleList   = toggleUsersList;

  // Load all registered users

  UsersDataService
        .loadAllUsers()
        .then( function( bancos ) {
          self.bancos  = [].concat(bancos);
          self.selected = bancos[0];
        });

  // *********************************
  // Internal methods
  // *********************************

  /**
   * Hide or Show the 'left' sideNav area
   */
  function toggleUsersList() {
    $mdSidenav('left').toggle();
  }

  /**
   * Select the current avatars
   * @param menuId
   */
  function selectUser ( banco ) {
    self.selected = angular.isNumber(banco) ? $scope.bancos[banco] : banco;
  }
}

export default [ 'UsersDataService', '$mdSidenav', AppController ];
