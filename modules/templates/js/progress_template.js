angular.module("lumx.progress").run(['$templateCache', function(a) { a.put('progress.html', '<div class="progress-circular-container" ng-if="type === \'circular\'">\n' +
    '    <div class="progress-circular progress-circular--is-small progress-circular--is-shown">\n' +
    '        <svg class="progress-circular__svg">\n' +
    '            <circle class="progress-circular__path" cx="50" cy="50" r="20" fill="none" stroke-miterlimit="10" stroke="{{ color }}"></circle>\n' +
    '        </svg>\n' +
    '    </div>\n' +
    '</div>');
	 }]);
