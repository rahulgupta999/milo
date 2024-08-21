/* eslint-disable */
/* Generated by Milo */

import{html as q}from"/libs/features/spectrum-web-components/dist/base.js";import{property as p}from"/libs/features/spectrum-web-components/dist/base.js";import{RovingTabindexController as R}from"/libs/features/spectrum-web-components/dist/reactive-controllers.js";import{css as w}from"/libs/features/spectrum-web-components/dist/base.js";var x=w`
    :host{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}:host:lang(ja),:host:lang(ko),:host:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}:host{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}@media (forced-colors:active){.spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{width:240px;--spectrum-web-component-sidenav-font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));display:block}:host(:not([variant=multilevel])){--mod-sidenav-top-level-font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight))}
`,b=x;import{Focusable as _}from"/libs/features/spectrum-web-components/dist/shared.js";import{html as k,nothing as I}from"/libs/features/spectrum-web-components/dist/base.js";import{property as g}from"/libs/features/spectrum-web-components/dist/base.js";import{ifDefined as c}from"/libs/features/spectrum-web-components/dist/base.js";import{LikeAnchor as E}from"/libs/features/spectrum-web-components/dist/shared.js";import{Focusable as j}from"/libs/features/spectrum-web-components/dist/shared.js";import{css as z}from"/libs/features/spectrum-web-components/dist/base.js";var S=z`
    #list{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}:host{margin-inline:0;list-style-type:none}:host([disabled]) #item-link{background-color:var(--highcontrast-sidenav-background-disabled,var(--mod-sidenav-background-disabled,var(--spectrum-sidenav-background-disabled)));color:var(--highcontrast-sidenav-content-disabled-color,var(--mod-sidenav-content-disabled-color,var(--spectrum-sidenav-content-disabled-color)));cursor:default;pointer-events:none}:host([selected]) #item-link{background-color:var(--highcontrast-sidenav-item-background-default-selected,var(--mod-sidenav-item-background-default-selected,var(--spectrum-sidenav-item-background-default-selected)));color:var(--highcontrast-sidenav-content-color-default-selected,var(--mod-sidenav-content-color-default-selected,var(--spectrum-sidenav-content-color-default-selected)))}:host([selected]) #item-link:active{background-color:var(--highcontrast-sidenav-item-background-down-selected,var(--mod-sidenav-item-background-down-selected,var(--spectrum-sidenav-item-background-down-selected)));color:var(--mod-sidenav-content-color-down-selected,var(--spectrum-sidenav-content-color-down-selected))}:host([selected]) #item-link.is-keyboardFocused,:host([selected]) #item-link:focus-visible{background-color:var(--highcontrast-sidenav-background-key-focus-selected,var(--mod-sidenav-background-key-focus-selected,var(--spectrum-sidenav-background-key-focus-selected)));color:var(--mod-sidenav-content-color-key-focus-selected,var(--spectrum-sidenav-content-color-key-focus-selected))}#item-link{padding-inline:var(--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding));box-sizing:border-box;word-break:break-word;hyphens:auto;cursor:pointer;transition:background-color var(--spectrum-animation-duration-100)ease-out,color var(--spectrum-animation-duration-100)ease-out;border-radius:var(--mod-sidenav-border-radius,var(--spectrum-sidenav-border-radius));background-color:var(--highcontrast-sidenav-background-default,var(--mod-sidenav-background-default,var(--spectrum-sidenav-background-default)));color:var(--highcontrast-sidenav-content-color-default,var(--mod-sidenav-content-color-default,var(--spectrum-sidenav-content-color-default)));inline-size:var(--mod-sidenav-width,var(--spectrum-sidenav-width));min-inline-size:var(--mod-sidenav-min-width,var(--spectrum-sidenav-min-width));max-inline-size:var(--mod-sidenav-max-width,var(--spectrum-sidenav-max-width));min-block-size:var(--mod-sidenav-min-height,var(--spectrum-sidenav-min-height));font-family:var(--mod-sidenav-text-font-family,var(--spectrum-sidenav-text-font-family));font-size:var(--mod-sidenav-text-font-size,var(--spectrum-sidenav-text-font-size));font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));font-style:var(--mod-sidenav-text-font-style,var(--spectrum-sidenav-text-font-style));line-height:var(--mod-sidenav-text-line-height,var(--spectrum-sidenav-text-line-height));justify-content:start;margin-block-end:var(--mod-sidenav-gap,var(--spectrum-sidenav-gap));-webkit-text-decoration:none;text-decoration:none;display:inline-flex;position:relative}#item-link #link-text{margin-block-start:var(--mod-sidenav-top-to-label,var(--spectrum-sidenav-top-to-label));margin-block-end:var(--mod-sidenav-bottom-to-label,var(--spectrum-sidenav-bottom-to-label))}#item-link ::slotted([slot=icon]){inline-size:var(--mod-sidenav-icon-size,var(--spectrum-sidenav-icon-size));block-size:var(--mod-sidenav-icon-size,var(--spectrum-sidenav-icon-size));flex-shrink:0;margin-block-start:var(--mod-sidenav-top-to-icon,var(--spectrum-sidenav-top-to-icon));margin-inline-end:var(--mod-sidenav-icon-spacing,var(--spectrum-sidenav-icon-spacing))}@media (hover:hover){:host([selected]) #item-link:hover{background-color:var(--highcontrast-sidenav-background-hover-selected,var(--mod-sidenav-background-hover-selected,var(--spectrum-sidenav-background-hover-selected)));color:var(--mod-sidenav-content-color-hover-selected,var(--spectrum-sidenav-content-color-hover-selected))}#item-link:hover{background-color:var(--highcontrast-sidenav-background-hover,var(--mod-sidenav-background-hover,var(--spectrum-sidenav-background-hover)));color:var(--highcontrast-sidenav-content-color-hover,var(--mod-sidenav-content-color-hover,var(--spectrum-sidenav-content-color-hover)))}}#item-link:active{background-color:var(--highcontrast-sidenav-item-background-down,var(--mod-sidenav-item-background-down,var(--spectrum-sidenav-item-background-down)));color:var(--highcontrast-sidenav-content-color-down,var(--mod-sidenav-content-color-down,var(--spectrum-sidenav-content-color-down)))}#item-link.is-keyboardFocused,#item-link:focus-visible{outline:var(--highcontrast-sidenav-focus-ring-color,var(--mod-sidenav-focus-ring-color,var(--spectrum-sidenav-focus-ring-color)))solid var(--mod-sidenav-focus-ring-size,var(--spectrum-sidenav-focus-ring-size));outline-offset:var(--mod-sidenav-focus-ring-gap,var(--spectrum-sidenav-focus-ring-gap));background-color:var(--highcontrast-sidenav-background-key-focus,var(--mod-sidenav-background-key-focus,var(--spectrum-sidenav-background-key-focus)));color:var(--highcontrast-sidenav-content-color-key-focus,var(--mod-sidenav-content-color-key-focus,var(--spectrum-sidenav-content-color-key-focus)))}#item-link[data-level]{font-family:var(--mod-sidenav-top-level-font-family,var(--spectrum-sidenav-top-level-font-family));font-weight:var(--mod-sidenav-top-level-font-weight,var(--spectrum-sidenav-top-level-font-weight));font-style:var(--mod-sidenav-top-level-font-style,var(--spectrum-sidenav-top-level-font-style));font-size:var(--mod-sidenav-top-level-font-size,var(--spectrum-sidenav-top-level-font-size));line-height:var(--mod-sidenav-top-level-line-height,var(--spectrum-sidenav-top-level-line-height))}#item-link:not([data-level="0"]){font-weight:var(--mod-sidenav-text-font-weight,var(--spectrum-sidenav-text-font-weight));padding-inline-start:var(--mod-sidenav-start-to-content-second-level,var(--spectrum-sidenav-start-to-content-second-level))}#item-link[data-level="2"]{padding-inline-start:var(--mod-sidenav-start-to-content-third-level,var(--spectrum-sidenav-start-to-content-third-level))}.spectrum-SideNav--hasIcon#item-link:not([data-level="0"]){padding-inline-start:var(--mod-sidenav-start-to-content-with-icon-second-level,var(--spectrum-sidenav-start-to-content-with-icon-second-level))}.spectrum-SideNav--hasIcon#item-link[data-level="2"]{padding-inline-start:var(--mod-sidenav-start-to-content-with-icon-third-level,var(--spectrum-sidenav-start-to-content-with-icon-third-level))}@media (forced-colors:active){#list ::slotted([slot=icon]){forced-color-adjust:preserve-parent-color}:host{forced-color-adjust:none;--highcontrast-sidenav-content-disabled-color:GrayText;--highcontrast-sidenav-focus-ring-color:Highlight;--highcontrast-sidenav-content-color-default-selected:SelectedItemText;--highcontrast-sidenav-item-background-default-selected:SelectedItem;--highcontrast-sidenav-background-key-focus-selected:Highlight;--highcontrast-sidenav-background-hover-selected:Highlight;--highcontrast-sidenav-item-background-down-selected:Highlight;--highcontrast-sidenav-item-background-down:Highlight;--highcontrast-sidenav-background-hover:Highlight;--highcontrast-sidenav-content-color-hover:HighlightText;--highcontrast-sidenav-background-key-focus:Highlight;--highcontrast-sidenav-top-level-font-color:ButtonText;--highcontrast-sidenav-content-color-default:ButtonText;--highcontrast-sidenav-content-color-down:HighlightText}}:host{display:block}:host([disabled]){pointer-events:none}a ::slotted(sp-sidenav-item){display:none}
`,l=S;var C=Object.defineProperty,T=Object.getOwnPropertyDescriptor,h=(i,e,t,n)=>{for(var r=n>1?void 0:n?T(e,t):e,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(n?a(e,t,r):a(r))||r);return n&&r&&C(e,t,r),r},v=class f extends E(j){constructor(){super(...arguments),this.value=void 0,this.selected=!1,this.expanded=!1}static get styles(){return[l]}get parentSideNav(){return this._parentSidenav||(this._parentSidenav=this.closest("sp-sidenav")),this._parentSidenav}get hasChildren(){return!!this.querySelector("sp-sidenav-item")}get depth(){let e=0,t=this.parentElement;for(;t instanceof f;)e++,t=t.parentElement;return e}handleSideNavSelect(e){this.selected=e.target===this}handleClick(e){!this.href&&e&&e.preventDefault(),!this.disabled&&(!this.href||e!=null&&e.defaultPrevented)&&(this.hasChildren?this.expanded=!this.expanded:this.value&&this.announceSelected(this.value))}announceSelected(e){let t={value:e},n=new CustomEvent("sidenav-select",{bubbles:!0,composed:!0,detail:t});this.dispatchEvent(n)}click(){this.handleClick()}get focusElement(){return this.shadowRoot.querySelector("#item-link")}update(e){this.hasAttribute("slot")||(this.slot="descendant"),super.update(e)}render(){return k`
            <a
                href=${this.href||"#"}
                target=${c(this.target)}
                download=${c(this.download)}
                rel=${c(this.rel)}
                data-level="${this.depth}"
                @click="${this.handleClick}"
                id="item-link"
                aria-current=${c(this.selected&&this.href?"page":void 0)}
                aria-expanded=${c(this.hasChildren?this.expanded:void 0)}
                aria-controls=${c(this.hasChildren&&this.expanded?"list":void 0)}
            >
                <slot name="icon"></slot>
                <span id="link-text">
                    ${this.label}
                    <slot></slot>
                </span>
            </a>
            ${this.expanded?k`
                      <div id="list" aria-labelledby="item-link" role="list">
                          <slot name="descendant"></slot>
                      </div>
                  `:I}
        `}updated(e){var t;this.hasChildren&&this.expanded&&!this.selected&&(t=this.parentSideNav)!=null&&t.manageTabIndex?this.focusElement.tabIndex=-1:this.focusElement.removeAttribute("tabindex"),super.updated(e)}connectedCallback(){super.connectedCallback(),this.startTrackingSelection()}disconnectedCallback(){this.stopTrackingSelection(),super.disconnectedCallback()}async startTrackingSelection(){let e=this.parentSideNav;if(e&&(await e.updateComplete,e.startTrackingSelectionForItem(this),this.selected=this.value!=null&&this.value===e.value,this.selected===!0&&e.variant==="multilevel")){let t=this.parentElement;for(;t instanceof f;)t.expanded=!0,t=t.parentElement}}stopTrackingSelection(){let e=this.parentSideNav;e&&e.stopTrackingSelectionForItem(this),this._parentSidenav=void 0}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","listitem")}};h([g()],v.prototype,"value",2),h([g({type:Boolean,reflect:!0})],v.prototype,"selected",2),h([g({type:Boolean,reflect:!0})],v.prototype,"expanded",2);var u=v;import{html as O,SpectrumElement as P}from"/libs/features/spectrum-web-components/dist/base.js";import{property as A}from"/libs/features/spectrum-web-components/dist/base.js";import{css as $}from"/libs/features/spectrum-web-components/dist/base.js";var D=$`
    #list{--spectrum-sidenav-focus-ring-size:var(--spectrum-focus-indicator-thickness);--spectrum-sidenav-focus-ring-gap:var(--spectrum-focus-indicator-gap);--spectrum-sidenav-focus-ring-color:var(--spectrum-focus-indicator-color);--spectrum-sidenav-min-height:var(--spectrum-component-height-100);--spectrum-sidenav-width:100%;--spectrum-sidenav-min-width:var(--spectrum-side-navigation-minimum-width);--spectrum-sidenav-max-width:var(--spectrum-side-navigation-maximum-width);--spectrum-sidenav-border-radius:var(--spectrum-corner-radius-100);--spectrum-sidenav-icon-size:var(--spectrum-workflow-icon-size-100);--spectrum-sidenav-icon-spacing:var(--spectrum-text-to-visual-100);--spectrum-sidenav-inline-padding:var(--spectrum-component-edge-to-text-100);--spectrum-sidenav-gap:var(--spectrum-side-navigation-item-to-item);--spectrum-sidenav-top-to-icon:var(--spectrum-component-top-to-workflow-icon-100);--spectrum-sidenav-top-to-label:var(--spectrum-component-top-to-text-100);--spectrum-sidenav-bottom-to-label:var(--spectrum-side-navigation-bottom-to-text);--spectrum-sidenav-start-to-content-second-level:var(--spectrum-side-navigation-second-level-edge-to-text);--spectrum-sidenav-start-to-content-third-level:var(--spectrum-side-navigation-third-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-second-level:var(--spectrum-side-navigation-with-icon-second-level-edge-to-text);--spectrum-sidenav-start-to-content-with-icon-third-level:var(--spectrum-side-navigation-with-icon-third-level-edge-to-text);--spectrum-sidenav-heading-top-margin:var(--spectrum-side-navigation-item-to-header);--spectrum-sidenav-heading-bottom-margin:var(--spectrum-side-navigation-header-to-item);--spectrum-sidenav-background-disabled:transparent;--spectrum-sidenav-background-default:transparent;--spectrum-sidenav-background-hover:var(--spectrum-gray-200);--spectrum-sidenav-item-background-down:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus:var(--spectrum-gray-200);--spectrum-sidenav-item-background-default-selected:var(--spectrum-gray-200);--spectrum-sidenav-background-hover-selected:var(--spectrum-gray-300);--spectrum-sidenav-item-background-down-selected:var(--spectrum-gray-300);--spectrum-sidenav-background-key-focus-selected:var(--spectrum-gray-200);--spectrum-sidenav-header-color:var(--spectrum-gray-600);--spectrum-sidenav-content-disabled-color:var(--spectrum-disabled-content-color);--spectrum-sidenav-content-color-default:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-content-color-default-selected:var(--spectrum-neutral-content-color-default);--spectrum-sidenav-content-color-hover-selected:var(--spectrum-neutral-content-color-hover);--spectrum-sidenav-content-color-down-selected:var(--spectrum-neutral-content-color-down);--spectrum-sidenav-content-color-key-focus-selected:var(--spectrum-neutral-content-color-key-focus);--spectrum-sidenav-text-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-text-font-weight:var(--spectrum-regular-font-weight);--spectrum-sidenav-text-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-text-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-text-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-top-level-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-top-level-font-weight:var(--spectrum-bold-font-weight);--spectrum-sidenav-top-level-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-top-level-font-size:var(--spectrum-font-size-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-line-height-100);--spectrum-sidenav-header-font-family:var(--spectrum-sans-font-family-stack);--spectrum-sidenav-header-font-weight:var(--spectrum-medium-font-weight);--spectrum-sidenav-header-font-style:var(--spectrum-default-font-style);--spectrum-sidenav-header-font-size:var(--spectrum-font-size-75);--spectrum-sidenav-header-line-height:var(--spectrum-line-height-100)}#list:lang(ja),#list:lang(ko),#list:lang(zh){--spectrum-sidenav-text-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-top-level-line-height:var(--spectrum-cjk-line-height-100);--spectrum-sidenav-header-line-height:var(--spectrum-cjk-line-height-100)}#list{flex-direction:column;margin:0;padding:0;list-style-type:none;display:flex}#heading{padding-inline:var(--mod-sidenav-inline-padding,var(--spectrum-sidenav-inline-padding));color:var(--mod-sidenav-header-color,var(--spectrum-sidenav-header-color));font-size:var(--mod-sidenav-header-font-size,var(--spectrum-sidenav-header-font-size));font-weight:var(--mod-sidenav-header-font-weight,var(--spectrum-sidenav-header-font-weight));font-style:var(--mod-sidenav-header-font-style,var(--spectrum-sidenav-header-font-style));line-height:var(--mod-sidenav-header-line-height,var(--spectrum-sidenav-header-line-height));margin-block-start:calc(var(--mod-sidenav-heading-top-margin,var(--spectrum-sidenav-heading-top-margin)) - var(--mod-sidenav-gap,var(--spectrum-sidenav-gap)));margin-block-end:var(--mod-sidenav-heading-bottom-margin,var(--spectrum-sidenav-heading-bottom-margin))}@media (forced-colors:active){#list .spectrum-Icon{forced-color-adjust:preserve-parent-color}}:host{display:block}
`,y=D;var N=Object.defineProperty,F=Object.getOwnPropertyDescriptor,H=(i,e,t,n)=>{for(var r=n>1?void 0:n?F(e,t):e,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(n?a(e,t,r):a(r))||r);return n&&r&&N(e,t,r),r},d=class extends P{constructor(){super(...arguments),this.label=""}static get styles(){return[l,y]}update(e){this.hasAttribute("slot")||(this.slot="descendant"),super.update(e)}render(){return O`
            <h2 id="heading">${this.label}</h2>
            <div id="list" aria-labelledby="heading" role="list">
                <slot name="descendant"></slot>
            </div>
        `}firstUpdated(e){super.firstUpdated(e),this.setAttribute("role","listitem")}};H([A({reflect:!0})],d.prototype,"label",2);import{ifDefined as G}from"/libs/features/spectrum-web-components/dist/base.js";var U=Object.defineProperty,B=Object.getOwnPropertyDescriptor,m=(i,e,t,n)=>{for(var r=n>1?void 0:n?B(e,t):e,s=i.length-1,a;s>=0;s--)(a=i[s])&&(r=(n?a(e,t,r):a(r))||r);return n&&r&&U(e,t,r),r},o=class extends _{constructor(){super(...arguments),this.items=new Set,this.rovingTabindexController=new R(this,{focusInIndex:e=>{let t,n=e.findIndex(r=>(r.value===this.value&&this.isDisabledChild(r)&&(t=r.closest("sp-sidenav-item:not([expanded])")),this.value?!r.disabled&&!this.isDisabledChild(r)&&r.value===this.value:!r.disabled&&!this.isDisabledChild(r)));return n===-1&&t&&(n=e.findIndex(r=>r===t)),n},direction:"vertical",elements:()=>[...this.querySelectorAll("sp-sidenav-item")],isFocusableElement:e=>!e.disabled&&!this.isDisabledChild(e)}),this.manageTabIndex=!1,this.value=void 0,this.variant=void 0,this.label=void 0}static get styles(){return[b]}startTrackingSelectionForItem(e){this.items.add(e),this.rovingTabindexController.clearElementCache()}stopTrackingSelectionForItem(e){this.items.delete(e),this.rovingTabindexController.clearElementCache()}handleSelect(e){if(e.stopPropagation(),this.value===e.detail.value)return;let t=this.value;this.value=e.detail.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0,cancelable:!0}))?this.items.forEach(n=>n.handleSideNavSelect(e)):(this.value=t,e.target.selected=!1,e.preventDefault())}focus(){this.rovingTabindexController.focus()}blur(){this.focusElement!==this&&super.blur()}click(){this.focusElement!==this&&super.click()}get focusElement(){return this.rovingTabindexController.focusInElement||this}isDisabledChild(e){if(e.disabled)return!0;let t=e.parentElement;for(;t instanceof d||!t.disabled&&t instanceof u&&t.expanded;)t=t.parentElement;return t!==this}handleSlotchange(){this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage()}render(){return q`
            <nav
                @sidenav-select=${this.handleSelect}
                aria-label=${G(this.label)}
            >
                <div role="list">
                    <slot
                        name="descendant"
                        @slotchange=${this.handleSlotchange}
                    ></slot>
                </div>
            </nav>
        `}willUpdate(){if(!this.hasUpdated){let e=this.querySelector("[selected]");e&&(this.value=e.value)}}updated(e){super.updated(e),e.has("manageTabIndex")&&(this.manageTabIndex?this.rovingTabindexController.manage():this.rovingTabindexController.unmanage())}};m([p({type:Boolean,reflect:!0,attribute:"manage-tab-index"})],o.prototype,"manageTabIndex",2),m([p({reflect:!0})],o.prototype,"value",2),m([p({reflect:!0})],o.prototype,"variant",2),m([p({reflect:!0})],o.prototype,"label",2);import{defineElement as L}from"/libs/features/spectrum-web-components/dist/base.js";L("sp-sidenav",o);import{defineElement as J}from"/libs/features/spectrum-web-components/dist/base.js";J("sp-sidenav-item",u);
