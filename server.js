//var express = require('express');
//
//
//var server = express();
//server.configure(function(){
//
//});
//
//server.listen(3000);


var express = require("express");
var app = express();

var port = process.env.PORT || 8080;

app.use('/thirdparty', express.static(__dirname + '/thirdparty'));
app.use('/font-icons/style.css', express.static(__dirname + '/app/style.css'));
app.use('/js/lumx.js', express.static(__dirname + '/dist/lumx.js'));
app.use('/lumx.css', express.static(__dirname + '/dist/lumx.css'));
app.use('/libs', express.static(__dirname + '/libs'));
app.use('/js/date-picker/date-picker_directive.js', express.static(__dirname + '/modules/date-picker/js/date-picker_directive.js'));
app.use('/js/templates/date-picker_template.js', express.static(__dirname + '/modules/templates/js/date-picker_template.js'));
app.use('/js/dropdown/dropdown_directive.js', express.static(__dirname + '/modules/dropdown/js/dropdown_directive.js'));
app.use('/js/dialog/dialog_directive.js', express.static(__dirname + '/modules/dialog/js/dialog_directive.js'));
app.use('/js/file-input/file-input_directive.js', express.static(__dirname + '/modules/file-input/js/file-input_directive.js'));
app.use('/js/notification/notification_service.js', express.static(__dirname + '/modules/notification/js/notification_service.js'));
app.use('/js/ripple/ripple_directive.js', express.static(__dirname + '/modules/ripple/js/ripple_directive.js'));
app.use('/js/templates/dropdown_template.js', express.static(__dirname + '/modules/templates/js/dropdown_template.js'));
app.use('/js/templates/file-input_template.js', express.static(__dirname + '/modules/templates/js/file-input_template.js'));
app.use('/js/progress/progress_service.js', express.static(__dirname + '/modules/progress/js/progress_service.js'));
app.use('/js/templates/progress_template.js', express.static(__dirname + '/modules/templates/js/progress_template.js'));
app.use('/js/scrollbar/scrollbar_directive.js', express.static(__dirname + '/modules/scrollbar/js/scrollbar_directive.js'));
app.use('/js/search-filter/search-filter_directive.js', express.static(__dirname + '/modules/search-filter/js/search-filter_directive.js'));
app.use('/js/templates/search-filter_template.js', express.static(__dirname + '/modules/templates/js/search-filter_template.js'));

app.use('/js/select/select_directive.js', express.static(__dirname + '/modules/select/js/select_directive.js'));
app.use('/js/templates/select_template.js', express.static(__dirname + '/modules/templates/js/select_template.js'));
app.use('/js/tabs/tabs_directive.js', express.static(__dirname + '/modules/tabs/js/tabs_directive.js'));
app.use('/js/templates/tabs_template.js', express.static(__dirname + '/modules/templates/js/tabs_template.js'));
app.use('/js/text-field/text-field_directive.js', express.static(__dirname + '/modules/text-field/js/text-field_directive.js'));
app.use('/js/templates/text-field_template.js', express.static(__dirname + '/modules/templates/js/text-field_template.js'));
app.use('/js/thumbnail/thumbnail_directive.js', express.static(__dirname + '/modules/thumbnail/js/thumbnail_directive.js'));
app.use('/js/tooltip/tooltip_directive.js', express.static(__dirname + '/modules/tooltip/js/tooltip_directive.js'));
app.use('/js/utils/transclude_directive.js', express.static(__dirname + '/modules/utils/js/transclude_directive.js'));
app.use('/js/utils/transclude-replace_directive.js', express.static(__dirname + '/modules/utils/js/transclude-replace_directive.js'));


app.use('/includes/modules/button', express.static(__dirname + '/modules/button/demo'));


app.use(express.static(__dirname + '/app'));


console.log("Iniciando servidor HTTP");
console.log("  porta " + port);

app.listen(port);
