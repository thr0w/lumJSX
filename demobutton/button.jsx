var TiposBotoes = {
  componentWillMount: function(element) {
    this.classRipple = [];
  },
  componentWillUnmount: function() {
    $timeout.cancel(timeout);
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
  mixins: [TiposBotoes, Hripple],
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
      React.createElement("button", {className: this.tipo()},
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
