/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface MyDay {
    'eventTemplateFunction': (event: any) => string;
  }
  interface MyDayAttributes extends StencilHTMLAttributes {
    'eventTemplateFunction'?: (event: any) => string;
  }

  interface MyLogin {
    'clientId': string;
    'loginType': string;
  }
  interface MyLoginAttributes extends StencilHTMLAttributes {
    'clientId'?: string;
    'loginType'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyDay': Components.MyDay;
    'MyLogin': Components.MyLogin;
  }

  interface StencilIntrinsicElements {
    'my-day': Components.MyDayAttributes;
    'my-login': Components.MyLoginAttributes;
  }


  interface HTMLMyDayElement extends Components.MyDay, HTMLStencilElement {}
  var HTMLMyDayElement: {
    prototype: HTMLMyDayElement;
    new (): HTMLMyDayElement;
  };

  interface HTMLMyLoginElement extends Components.MyLogin, HTMLStencilElement {}
  var HTMLMyLoginElement: {
    prototype: HTMLMyLoginElement;
    new (): HTMLMyLoginElement;
  };

  interface HTMLElementTagNameMap {
    'my-day': HTMLMyDayElement
    'my-login': HTMLMyLoginElement
  }

  interface ElementTagNameMap {
    'my-day': HTMLMyDayElement;
    'my-login': HTMLMyLoginElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
