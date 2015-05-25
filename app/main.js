var mui = require("material-ui"),
    React = require("react"),
var IconButton = mui.IconButton;

var githubButton = (
    React.createElement(IconButton, {
        className: "github-icon-button",
        iconClassName: "muidocs-icon-custom-github",
        href: "https://github.com/callemall/material-ui",
        linkButton: true
    })
);

React.render(React.createElement(AppCanvas, {
    predefinedLayout: 1
}, React.createElement(AppBar, {
        className: "mui-dark-theme",
        title: "Happa5",
        zDepth: 0
    }, [githubButton]

)), document.body);

document.head.innerHTML = '<link rel="stylesheet" type="text/css" href="main.css">';
