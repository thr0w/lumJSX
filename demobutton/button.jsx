var TiposBotoes = {
  componentWillMount: function(element) {
    this.classRipple = [];
  },
  componentWillUnmount: function() {
    $timeout.cancel(timeout);
  },
  Hclick: function(element){
      element.target.setAttribute("style", "position: relative; overflow: hidden;");

      var ripple;

      if(element.target.getElementsByClassName('.ripple').length === 0){
          if(this.classRipple.indexOf("ripple") == -1)
              this.classRipple.push("ripple");

          if(this.props.lxRipple){
            classRipple.push('bgc-' + attrs.lxRipple);
          }
          ripple = React.createElement("span", {className: this.classRipple});
      }
      else{
          ripple = element.target.getElementsByClassName('.ripple');
      }
      var idx = this.classRipple.indexOf('ripple--is-animated');
      this.classRipple.slice(idx, 1);

      if(!ripple.height && !ripple.width){
        var diameter = Math.max(element.currentTarget.offsetWidth, element.currentTarget.offsetHeight);
        var style = {
            height: diameter,
            width: diameter
        };
        ripple = React.createElement("span", {className: this.classRipple, style: style});

      }

      var x = 200 - element.target.offsetLeft - element.currentTarget.offsetWidth / 2;
      var y = 200 - element.target.offsetTop - element.currentTarget.offsetHeight / 2;


      if(this.classRipple.indexOf("ripple--is-animated") == -1)
              this.classRipple.push("ripple--is-animated");

       var style = {
            height: diameter,
            width: diameter,
            top: y+"px",
            left: x+"px"

        };

        ripple = React.createElement("span", {className: this.classRipple, style: style});

        var filhosAux = [];
        filhosAux.push(ripple)
        this.setState({filhos: filhosAux});

                /*

            var x = e.pageX - element.offset().left - ripple.width() / 2;
            var y = e.pageY - element.offset().top - ripple.height() / 2;

            ripple.css({ top: y+'px', left: x+'px' }).addClass('ripple--is-animated');

            timeout = $timeout(function()
            {
                ripple.removeClass('ripple--is-animated');
            }, 651);
        });
*/
  },
  tipo: function(){
    var buttons = {
       simples: "btn btn--m btn--blue btn--raised",
       fundoTransparente: "btn btn--m btn--blue btn--flat",
       redondo: "btn btn--m btn--blue btn--fab",
       iconTransparent: "btn btn--m btn--blue btn--icon"
    }

    return buttons[this.props.tipo];
  },
  icon: function(){
    var icons = {
        plus: function(){
            return React.createElement("i", {className: "mdi mdi-plus"});
        },
        facebook: function(){
            return React.createElement("i", {className: "mdi mdi-facebook"});
        }
    }
    return icons[this.props.icon]();

  }
};

var HButton = React.createClass({
  mixins: [TiposBotoes],
  getInitialState: function () {
        return {
            filhos: []
        };
    },
  render: function() {
  if(this.props.icon){
      this.state.filhos.push(this.icon());
    }
   if(this.props.nome)
      this.state.filhos.push(this.props.nome);
    return (
      React.createElement("button", {className: this.tipo(), onClick: this.Hclick},
         this.state.filhos)
    );
  }
});

React.render(
<div className="main-section">
    <h3 className="main-section__title">Buttons</h3>
    <div className="main-section__content">
        <h4 className="main-section__subtitle">Types</h4>
        <div className="example mt++">
            <div className="example__content">
                <HButton nome={"Botão 1"} tipo={"simples"}/>
                <HButton nome={"Botão 2"} tipo={"fundoTransparente"}/>
                <HButton icon={"plus"} tipo={"redondo"} />
                <HButton icon={"plus"} tipo={"iconTransparent"} />
                <HButton icon={"facebook"} tipo={"redondo"} />
            </div>
        </div>
    </div>

</div> ,
document.body);
