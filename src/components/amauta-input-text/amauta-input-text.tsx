import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';
import { Utils } from './utils';

@Component({
  tag: 'amauta-input-text',
  shadow: false,
})
export class AmautaInputText {
  @Prop() inputId: string = '';
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() type: string = '';
  @Prop() value: any = '';
  @Prop() typeValidate: string = '';
  @Prop() readonly: boolean = false;
  @Prop() validForm: boolean = false;

  @Prop() paramClass: string;
  @State() paramClassObject: any = {
    containerClass: 'container-class',
    labelClass: 'label-class',
    containerInputClass: 'container-input-class',
    inputClass: 'input-class'
  };

  @Event() eventOnFocusin: EventEmitter<any>;
  @Event() eventOnFocusout: EventEmitter<any>;
  @Event() eventOnChange: EventEmitter<any>;
  @Event() eventOnKeyUp: EventEmitter<any>;

  componentWillLoad() {
    this.parseParamClassProp(this.paramClass);
  }

  @Watch('paramClass')
  parseParamClassProp(newValue: string) {
    if (newValue){
      if(typeof newValue === 'string'){
        this.paramClassObject = JSON.parse(newValue);
      } else if(typeof newValue === 'object'){
        this.paramClassObject = newValue;
      } else {
        console.log('data no defined');
      }
      console.log('paramClassObject', this.paramClassObject);
    }
  }

  handleInput(ev, type){
    const resultData = {
      type: type,
      event: ev.target ? ev.target.value : '',
      validForm: this.validationType(ev.target ? ev.target.value : '')
    }
    switch(type) {
      case 'onFocusin': {
        this.eventOnFocusin.emit(resultData);
        break;
      }
      case 'onFocusout': {
        this.eventOnFocusout.emit(resultData);
        break;
      }
      case 'onChange': {
        this.eventOnChange.emit(resultData);
        break;
      }
      case 'onKeyUp': {
        this.eventOnKeyUp.emit(resultData);
        break;
      }
      default: {
        break;
      }
    }
  }

  validationType(value){
    let validForm = false;
    if(this.readonly){
      return true;
    }
    if(this.validForm){
      return true;
    }
    if(this.type === 'text'){
      if(this.typeValidate === 'name'){
        const regName = Utils.nameRegEx;
        return !!regName.test(value)
      }
      if(this.typeValidate === 'email'){
        const reg = Utils.emailRegEx;
        return !!reg.test(value)
      }
    }
    if(this.type === 'email'){
      const reg = Utils.emailRegEx;
      return !!reg.test(value)
    }
    return validForm;
  }
  render() {
    return (
      <div class={this.paramClassObject?.containerClass}>
        <label id={this.inputId + 'Id'}
               class={this.paramClassObject?.labelClass}
        >{this.label}</label>
        <div class={this.paramClassObject?.containerInputClass}>
          <input id={this.inputId + 'Id'}
                 class={this.paramClassObject?.inputClass}
                 readonly={this.readonly}
                 type={this.type}
                 value={this.value}
                 placeholder={this.placeholder}
                 autocomplete={'off'}
                 onFocusin={(ev) => this.handleInput(ev, 'onFocusin')}
                 onFocusout={(ev) => this.handleInput(ev, 'onFocusout')}
                 onInput={(ev) => this.handleInput(ev, 'onChange')}
                 onKeyUp={(ev) => this.handleInput(ev, 'onKeyUp')}
          />
        </div>
      </div>
    );
  }
}
