import { LightningElement,api } from 'lwc';

export default class ChildThree extends LightningElement {
    @api lblBtnChildThree = 'Select';
    @api childThreeVariant = 'success';
    btnChildThreeClick(event)
    {
        console.log(event.target.label);
        this.lblBtnChildThree = event.target.label==='Select'? 'Deselect': 'Select';
        this.childThreeVariant = event.target.label==='Select'? 'Destructive': 'success';
        this.dispatchEvent(new CustomEvent('childthreebtnclick',{bubbles:true,composed:true,detail:{val:event.target.label}}));
    }
}