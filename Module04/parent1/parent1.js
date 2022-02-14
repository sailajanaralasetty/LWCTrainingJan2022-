import { LightningElement,api } from 'lwc';

export default class Parent1 extends LightningElement {
    @api childOneSelected = 'Deselected';
    @api childTwoSelected = 'Deselected';
    @api childThreeSelected = 'Deselected';
    setChildOneText(event)
    {
        console.log(event.detail.val);
        this.childOneSelected = event.detail.val === 'Select'? 'Selected': 'Deselected';
        this.setCount(event.detail.val);
    }
    setChildTwoText(event)
    {
        console.log(event.detail.val);
        this.childTwoSelected = event.detail.val === 'Select'? 'Selected': 'Deselected';
        this.setCount(event.detail.val);
    }
    setChildThreeText(event)
    {
        console.log(event.detail.val);
        this.childThreeSelected = event.detail.val === 'Select'? 'Selected': 'Deselected';
        this.setCount(event.detail.val);
    }
    setCount(value){
        console.log('parent1: '+value);
        var cnt = value==='Select'? 1: -1;
        console.log('cnt: '+cnt);
        this.dispatchEvent(new CustomEvent('setnumberongrandparent',{bubbles:true,composed:true,detail:{cnt: cnt}}));
    }
    @api
    resetChild()
    {
        this.childOneSelected = 'Deselected';
        this.childTwoSelected = 'Deselected';
        this.childThreeSelected = 'Deselected';
        //console.log('resetAll');
        this.template.querySelector('c-child-one').lblBtnChildOne = 'Select';
        this.template.querySelector('c-child-one').childOneVariant = 'success';
        this.template.querySelector('c-child-two').lblBtnChildTwo = 'Select';
        this.template.querySelector('c-child-two').childTwoVariant = 'success';
        this.template.querySelector('c-child-three').lblBtnChildThree = 'Select';
        this.template.querySelector('c-child-three').childThreeVariant = 'success';
    }
}