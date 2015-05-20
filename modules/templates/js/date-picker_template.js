angular.module("lumx.date-picker").run(['$templateCache', function(a) { a.put('date-picker.html', '<div class="lx-date" ng-class="{ \'lx-date--fixed-label\': fixedLabel(),\n' +
    '                                 \'lx-date--with-icon\': icon && fixedLabel() }">\n' +
    '\n' +
    '    <div class="text-field__icon" ng-if="icon && fixedLabel() ">\n' +
    '        <i class="mdi mdi-{{ icon }}"></i>\n' +
    '    </div>\n' +
    '\n' +
    '    <!-- Date picker input -->\n' +
    '    <lx-text-field class="lx-date-input" label="{{ label }}" ng-click="openPicker()">\n' +
    '        <input type="text" ng-model="selected.model" ng-disabled="true">\n' +
    '    </lx-text-field>\n' +
    '\n' +
    '    <!-- Date picker -->\n' +
    '    <div class="lx-date-picker">\n' +
    '        <!-- Current day of week -->\n' +
    '        <div class="lx-date-picker__current-day-of-week">\n' +
    '            <span>{{ moment(selected.date).format(\'dddd\') }}</span>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Current date -->\n' +
    '        <div class="lx-date-picker__current-date">\n' +
    '            <span ng-class="{ \'tc-white-1\': !yearSelection, \'tc-white-3\': yearSelection }">{{ moment(selected.date).format(\'MMM\') }}</span>\n' +
    '            <strong ng-class="{ \'tc-white-1\': !yearSelection, \'tc-white-3\': yearSelection }">{{ moment(selected.date).format(\'DD\') }}</strong>\n' +
    '            <a ng-class="{ \'tc-white-3\': !yearSelection, \'tc-white-1\': yearSelection }" ng-click="displayYearSelection()">{{ moment(selected.date).format(\'YYYY\') }}</a>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Calendar -->\n' +
    '        <div class="lx-date-picker__calendar" ng-if="!yearSelection">\n' +
    '            <div class="lx-date-picker__nav">\n' +
    '                <button class="btn btn--xs btn--teal btn--icon" lx-ripple ng-click="previousMonth()">\n' +
    '                    <i class="mdi mdi-chevron-left"></i>\n' +
    '                </button>\n' +
    '\n' +
    '                <span>{{ activeDate.format(\'MMMM YYYY\') }}</span>\n' +
    '\n' +
    '                <button class="btn btn--xs btn--teal btn--icon" lx-ripple ng-click="nextMonth()">\n' +
    '                    <i class="mdi mdi-chevron-right"></i>\n' +
    '                </button>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="lx-date-picker__days-of-week">\n' +
    '                <span ng-repeat="day in daysOfWeek">{{ day }}</span>\n' +
    '            </div>\n' +
    '\n' +
    '            <div class="lx-date-picker__days">\n' +
    '                <span class="lx-date-picker__day lx-date-picker__day--is-empty"\n' +
    '                      ng-repeat="x in emptyFirstDays">&nbsp;</span><!--\n' +
    '\n' +
    '             --><div class="lx-date-picker__day"\n' +
    '                     ng-class="{ \'lx-date-picker__day--is-selected\': day.selected,\n' +
    '                                 \'lx-date-picker__day--is-today\': day.today }"\n' +
    '                     ng-repeat="day in days">\n' +
    '                    <a ng-click="select(day)">{{ day ? day.format(\'D\') : \'\' }}</a>\n' +
    '                </div><!--\n' +
    '\n' +
    '             --><span class="lx-date-picker__day lx-date-picker__day--is-empty"\n' +
    '                      ng-repeat="x in emptyLastDays">&nbsp;</span>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Year selection -->\n' +
    '        <div class="lx-date-picker__year-selector" ng-show="yearSelection">\n' +
    '            <a class="lx-date-picker__year"\n' +
    '                 ng-class="{ \'lx-date-picker__year--is-active\': year == activeDate.format(\'YYYY\') }"\n' +
    '                 ng-repeat="year in years"\n' +
    '                 ng-click="selectYear(year)"\n' +
    '                 ng-if="yearSelection">\n' +
    '                <span>{{ year }}</span>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '\n' +
    '        <!-- Actions -->\n' +
    '        <div class="lx-date-picker__actions">\n' +
    '            <button class="btn btn--m btn--teal btn--flat" lx-ripple ng-click="closePicker()">Ok</button>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
	 }]);
