class UserDetailsController  {

  /**
   * Constructor
   *
   * @param $mdBottomSheet
   * @param $log
   */
  constructor($mdBottomSheet, $log) {
    this.$mdBottomSheet = $mdBottomSheet;
    this.$log = $log;
  }

  /**
   * Show the bottom sheet
   */
  share() {
    var banco = this.selected;
    var $mdBottomSheet = this.$mdBottomSheet;

    $mdBottomSheet.show({
      parent: angular.element(document. getElementById('content')),
      templateUrl: 'src/users/components/details/ContactSheet.html',
      controller: [ '$mdBottomSheet', UserSheetController],
      controllerAs: "$ctrl",
      bindToController : false
    }).then((clickedItem) => {
      this.$log.debug( clickedItem.name + ' clicked!');
    });

    /**
     * Bottom Sheet controller for the Avatar Actions
     */
    function UserSheetController( $mdBottomSheet ) {
      this.banco = banco;
      this.items = [
        { name: 'Phone'       , icon: 'phone'       , icon_url: 'assets/svg/phone.svg'}

      ];
      this.performAction = (action) => {
        $mdBottomSheet.hide(action);
      };
    }
  }

}
export default UserDetailsController;
