var React = require('react'),
    RaisedButton = require('material-ui/lib/raised-button'),
    ThemeManager = require('material-ui/lib/styles/theme-manager')(),
    Colors = require('material-ui/lib/styles/colors'),
    mui = require("material-ui");

var IconButton = mui.IconButton,
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar,
    RaisedButton = mui.RaisedButton;

var Gbutton = React.render(React.createElement(IconButton, {
    className: "github-icon-button",
    iconClassName: "muidocs-icon-custom-github",
    href: "https://github.com/callemall/material-ui",
    linkButton: true
}), document.body);


//React.render(React.createElement(Gbutton, {
//        label: "Default"
//    }), document.body);
//
//
////React.render(<Gbutton />, document.body);
//
//module.exports = Gbutton;
