React.render(<div flex-container="row" flex-gutter="24" flex-wrap>
 <div flex-item="6">
        <span class="fs-title display-block mb">Text only</span>

        <div class="divider divider--dark"></div>

        <ul class="list mt++">
            <li class="list-row list-row--has-separator">
                <div class="list-row__content">
                    <span>Single-line item</span>
                </div>
            </li>
            <li class="list-row list-row--has-separator">
                <div class="list-row__content">
                    <span>Single-line item</span>
                </div>
            </li>
            <li class="list-row list-row--has-separator">
                <div class="list-row__content">
                    <span>Single-line item</span>
                </div>
            </li>
        </ul>
    </div>
    </div>, document.body);
