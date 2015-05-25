var React = require('react'),
    mui = require('material-ui'),
    RaisedButton = mui.RaisedButton,
    ThemeManager = mui.ThemeManager,
    Colors = mui.Colors;

var IconButton = mui.IconButton,
    AppCanvas = mui.AppCanvas,
    AppBar = mui.AppBar,
    RaisedButton = mui.RaisedButton;

var Gbutton = React.render(React.createElement(IconButton, {
    className: "github-icon-button",
    iconClassName: "muidocs-icon-custom-github",
    href: "https://github.com/callemall/material-ui",
    linkButton: true,
    textContent: "teste"
}), document.getElementById("root"));


//React.render(React.createElement(Gbutton, {
//        label: "Default"
//    }), document.body);
//
//
////React.render(<Gbutton />, document.body);
//
//module.exports = Gbutton;