import { Component, Event, EventEmitter, h, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'amauta-input-text',
  shadow: true,
})
export class AmautaInputText {
  @Prop() paramIn: string;
  @State() paramInObject: any = {
    label: 'no label',
    type: 'text',
    value: 'no param'
  };

  @Prop() paramClass: string;
  @State() paramClassObject: any = {
    container: '',
    label: '',
    input: ''
  };

  componentWillLoad() {
    this.parseParamInProp(this.paramIn);
    this.parseParamClassProp(this.paramClass);
  }

  @Watch('paramIn')
  parseParamInProp(newValue: string) {
    console.log(newValue);
    if (newValue){
      if(typeof newValue === 'string'){
        this.paramInObject = JSON.parse(newValue);
      } else if(typeof newValue === 'object'){
        this.paramInObject = newValue;
      } else {
        console.log('data no defined');
      }
      console.log('paramInObject', this.paramInObject);
    }
  }

  @Watch('paramClass')
  parseParamClassProp(newValue: string) {
    console.log(newValue);
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

  @Event() inputEvent: EventEmitter<any>;

  handleChange(ev) {
    ev.target ? ev.target.value : null;
    this.inputEvent.emit({
      type: 'onChange',
      event: ev.target ? ev.target.value : ''
    });
  }
  handleKeyUp(ev){
    ev.target ? ev.target.value : null;
    this.inputEvent.emit({
      type: 'keyUp',
      event: ev.target ? ev.target.value : ''
    });
  }
  render() {
    return (
      <div class={this.paramClassObject?.container}>
        <label class={this.paramClassObject?.label}>{this.paramInObject?.label}</label>
        <input type={this.paramInObject?.type}
               value={this.paramInObject?.value}
               class={this.paramClassObject?.input}
               onInput={(ev) => this.handleChange(ev)}
               onKeyUp={(ev) => this.handleKeyUp(ev)}
        />
      </div>
    );
  }
}
