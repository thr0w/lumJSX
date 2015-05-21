var Hripple = {
    Hripple: function(element){
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
  }
}
