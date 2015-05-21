var Hripple = {
    componentDidMount: function () {
        var self = this;
        var html_element = React.findDOMNode(this);
        html_element.addEventListener('mousedown', function (ev) {
            self.handleMouseDown(ev, html_element);
        });
        this.ripple_active = false;
    },
    componentWillUnmount: function () {
        var html_element = React.findDOMNode(this);
        html_element.removeEventListener('mousedown', this.handleMouseDown);
        this.deactivate_ripple();
    },
    handleMouseDown: function (ev, element) {

        element = $(element);

        var diameter = Math.max(element.outerWidth(), element.outerHeight());

        var x = ev.pageX - element.offset().left - diameter / 2;
        var y = ev.pageY - element.offset().top - diameter / 2;

        this.deactivate_ripple();
        this.activate_ripple();

        this.setState({
            ripple_css: {
                top: y + 'px',
                left: x + 'px',
                height: diameter,
                width: diameter
            }
        });

    },
    ripple: function (attrs, children) {
        attrs.style = attrs.style || {};
        attrs.style.position = 'relative';
        attrs.style.overflow = 'hidden';
        if (!this.ripple_active)
            return;

        var ripple_attrs = {
            className: 'ripple ripple--is-animated',
            style: this.state.ripple_css
        };
        if (this.props['lxRipple'])
            ripple_attrs += ' bgc-' + this.props['lxRipple'];
        var ripple = React.createElement('span', ripple_attrs);
        children.push(ripple);
    },
    activate_ripple: function () {
        this.ripple_active = setTimeout(this.deactivate_ripple.bind(this), 651);
    },
    deactivate_ripple: function () {
        clearTimeout(this.ripple_active);
        this.ripple_active = false;
        this.setState({});
    }
}
