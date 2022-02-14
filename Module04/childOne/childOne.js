import { LightningElement,api } from 'lwc';

export default class ChildOne extends LightningElement {
    @api lblBtnChildOne = 'Select';
    @api childOneVariant = 'success';
    btnChildOneClick(event)
    {
        console.log(event.target.label);
        this.lblBtnChildOne = event.target.label==='Select'? 'Deselect': 'Select';
        this.childOneVariant = event.target.label==='Select'? 'Destructive': 'success';
        this.dispatchEvent(new CustomEvent('childonebtnclick',{bubbles:true,composed:true,detail:{val:event.target.label}}));
    }
    /*@api
    Reset()
    {
        this.lblBtnChildOne = 'Select';
        this.childOneVariant = 'success';
    }*/
}