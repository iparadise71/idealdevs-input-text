import { Component, Event, EventEmitter, h, Prop, Watch } from '@stencil/core';
import { Utils } from './utils';

@Component({
  tag: 'amauta-input-text',
  shadow: false,
})
export class AmautaInputText {
  @Prop({attribute: 'input_id'}) inputId: string = '';
  @Prop() label: string = '';
  @Prop() placeholder: string = '';
  @Prop() type: string = '';
  @Prop() value: any = '';
  @Prop() readonly: boolean = false;

  @Prop({attribute: 'type_validate'}) typeValidate: string = '';
  @Prop({attribute: 'valid_form'}) validForm: boolean = false;
  @Prop({attribute: 'param_class'}) paramClass: any = {
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
    console.log('param inputId', this.inputId);
    console.log('param label', this.label);
    console.log('param placeholder', this.placeholder);
    console.log('param type', this.type);
    console.log('param value', this.value);
    console.log('param type_validate', this.typeValidate);
    console.log('param readonly', this.readonly);
    console.log('param valid_form', this.typeValidate);
    console.log('param param_class', this.paramClass);
  }

  @Watch('paramClass')
  parseParamClassProp(newValue: string) {
    if (newValue){
      console.log('@Watch param_class', this.paramClass);
    }
  }

  async handleInput(ev, type){
    const resultData = {
      type: type,
      event: ev.target ? ev.target.value : '',
      validForm: await this.validationType(ev.target ? ev.target.value : '')
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

  async validationType(value){
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
    console.log('valid', value);
    return true;
  }
  render() {
    return (
      <div class={this.paramClass?.containerClass}>
        <label id={this.inputId + 'Id'}
               class={this.paramClass?.labelClass}
        >{this.label}</label>
        <div class={this.paramClass?.containerInputClass}>
          <input id={this.inputId + 'Id'}
                 class={this.paramClass?.inputClass}
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
