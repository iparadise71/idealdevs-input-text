/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AmautaInputText {
        "inputId": string;
        "label": string;
        "paramClass": any;
        "placeholder": string;
        "readonly": boolean;
        "type": string;
        "typeValidate": string;
        "validForm": boolean;
        "value": any;
    }
}
declare global {
    interface HTMLAmautaInputTextElement extends Components.AmautaInputText, HTMLStencilElement {
    }
    var HTMLAmautaInputTextElement: {
        prototype: HTMLAmautaInputTextElement;
        new (): HTMLAmautaInputTextElement;
    };
    interface HTMLElementTagNameMap {
        "amauta-input-text": HTMLAmautaInputTextElement;
    }
}
declare namespace LocalJSX {
    interface AmautaInputText {
        "inputId"?: string;
        "label"?: string;
        "onEventOnChange"?: (event: CustomEvent<any>) => void;
        "onEventOnFocusin"?: (event: CustomEvent<any>) => void;
        "onEventOnFocusout"?: (event: CustomEvent<any>) => void;
        "onEventOnKeyUp"?: (event: CustomEvent<any>) => void;
        "paramClass"?: any;
        "placeholder"?: string;
        "readonly"?: boolean;
        "type"?: string;
        "typeValidate"?: string;
        "validForm"?: boolean;
        "value"?: any;
    }
    interface IntrinsicElements {
        "amauta-input-text": AmautaInputText;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "amauta-input-text": LocalJSX.AmautaInputText & JSXBase.HTMLAttributes<HTMLAmautaInputTextElement>;
        }
    }
}
