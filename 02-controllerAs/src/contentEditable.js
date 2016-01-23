class ContentEditable {
  constructor(ngModel) {
    this.restrict = 'A';
    this.require = "ngModel";
    this.scope = {
      ngBlur: "="
    }
  }

  link(scope, element, attr, ngModel) {
    function read() {
      ngModel.$setViewValue(element.html());
    }

    ngModel.$render = function() {
      element.html(ngModel.$viewValue || "");
    };

    element.bind("blur keyup change", function() {
      scope.$apply(read);
    });

    element.bind("blur", function(){
      scope.ngBlur();
    })
  }

  static directiveFactory() {
    return new ContentEditable();
  }

}
ContentEditable.$inject = ['ngModel'];
export default ContentEditable.directiveFactory
