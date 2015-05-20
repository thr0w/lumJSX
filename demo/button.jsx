React.render(<div className="main-section">
        <h3 className="main-section__title">Buttons</h3>
        <div className="main-section__content">
            <h4 className="main-section__subtitle">Types</h4>
            <div className="example mt++">
                <div className="example__content">
                    <button className="btn btn--m btn--blue btn--raised" lx-ripple={{x: "x"}}>Button</button>
                    <button className="btn btn--m btn--blue btn--flat" lx-ripple>Button</button>
                    <button className="btn btn--m btn--blue btn--fab" lx-ripple><i className="mdi mdi-plus"></i>
                    </button>
                    <button className="btn btn--m btn--blue btn--icon" lx-ripple><i className="mdi mdi-plus"></i>
                    </button>
                </div>

                <div className="example__code" language="html">Blábláblá</div>
            </div>
        </div>
    </div>, document.body);
