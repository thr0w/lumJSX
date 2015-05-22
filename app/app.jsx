var RaisedButton = mui.RaisedButton;

setTimeout(function () {
    React.render(React.createElement(RaisedButton, {
        label: "Default"
    }), document.getElementById("content"));
}, 100);
