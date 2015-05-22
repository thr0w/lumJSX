var TiposBotoes = {
  componentWillMount: function(element) {
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

var ui.button={normal}
var button_normal = React.createClass({
  mixins: [TiposBotoes],

  getInitialState: function() {
  return {ripple_css:{}};
  },

  render: function() {

    var attrs={className: this.tipo()};

    var filhos=this.props.children?(Array.isArray(this.props.children)?this.props.children:[this.props.children]):[];

    if(this.props.icon)
      filhos.push(this.icon());

    if(this.props.nome)
      filhos.push(this.props.nome);

    this.ripple(attrs, filhos);

    return React.createElement("button", attrs, filhos);
  }
});

React.render(
<div className="main-section">
    <h3 className="main-section__title">Buttons</h3>
    <div className="main-section__content">
        <h4 className="main-section__subtitle">Types</h4>
        <div className="example mt++">
            <div className="example__content">
            <HButton tipo={"simples"}> Botão 1 </HButton>
                <HButton nome={"Botão 2"} tipo={"fundoTransparente"}/>
                <HButton icon={"plus"} tipo={"redondo"} />
                <HButton icon={"plus"} tipo={"iconTransparent"} />
                <HButton icon={"facebook"} tipo={"redondo"} />
                <button class="btn btn--m btn--raised bgc-indigo-200 tc-indigo-600"><lx-ripple/>Button</button>
            </div>
        </div>
    </div>

</div> ,
document.body);
