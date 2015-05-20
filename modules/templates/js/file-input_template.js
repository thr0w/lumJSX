angular.module("lumx.file-input").run(['$templateCache', function(a) { a.put('file-input.html', '<div class="input-file">\n' +
    '    <span class="input-file__label" ng-bind-html="label | unsafe"></span>\n' +
    '    <span class="input-file__filename"></span>\n' +
    '    <input type="file">\n' +
    '</div>\n' +
    '');
	 }]);
