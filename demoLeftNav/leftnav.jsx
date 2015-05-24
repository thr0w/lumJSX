//var Types = {
//  LINK: 'LINK',
//  SUBHEADER: 'SUBHEADER',
//  NESTED: 'NESTED'
//};
//
//
//
//var menuItems = [
//
//
//  { route: 'get-started', text: 'Get Started' },
//  { route: 'css-framework', text: 'CSS Framework' },
//  { route: 'components', text: 'Components' },
//  { type: Types.SUBHEADER, text: 'Resources' },
//  {
//     type: Types.LINK,
//     payload: 'https://github.com/callemall/material-ui',
//     text: 'GitHub'
//  },
//  {
//     text: 'Disabled',
//     disabled: true
//  },
//  {
//     type: Types.LINK,
//     payload: 'https://www.google.com',
//     text: 'Disabled Link',
//     disabled: true
//  },
//];
//
//
//var LeftNav = React.createClass({
//
//
//    render: function() {
//        return (
//        <div  >
//        <button onClick={this._onHeaderClick}>Left menu</button>
//        <div className="mui-left-nav-menu mui-paper mui-z-depth-2">
//            <div className="mui-paper-container mui-z-depth-bottom">
//                <div className="mui-menu mui-visible mui-paper mui-z-depth-0 mui-rounded">
//                    <div className=" mui-paper-container mui-z-depth-bottom">
//                    <div className="mui-menu-item"></div>
//                    </div>
//                </div>
//            </div>
//        </div>
//        </div>
//        );
//    },
//
//    _onHeaderClick: function(){
//        alert('teste');
//    },
//
//});
//React.render(<LeftNav />, document.body);
//
//




var React = require('react'),
  mui = require('material-ui');
//  RaisedButton = mui.RaisedButton;

var SomeAwesomeComponent = React.createClass({

  render: function() {
    return (
        "<button />"
    );
  }

});

React.render(<SomeAwesomeComponent />, document.body);

module.exports = MyAwesomeReactComponent;
