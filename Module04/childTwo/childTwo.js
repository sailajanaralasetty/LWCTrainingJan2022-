import { LightningElement,api } from 'lwc';

export default class ChildTwo extends LightningElement {
    @api lblBtnChildTwo = 'Select';
    @api childTwoVariant = 'success';
    btnChildTwoClick(event)
    {
        console.log(event.target.label);
        this.lblBtnChildTwo = event.target.label==='Select'? 'Deselect': 'Select';
        this.childTwoVariant = event.target.label==='Select'? 'Destructive': 'success';
        this.dispatchEvent(new CustomEvent('childtwobtnclick',{bubbles:true,composed:true,detail:{val:event.target.label}}));
    }
    /*@api
    Reset()
    {
        this.lblBtnChildOne = 'Select';
        this.childOneVariant = 'success';
    }*/
}