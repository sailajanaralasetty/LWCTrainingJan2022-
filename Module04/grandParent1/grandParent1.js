import { LightningElement } from 'lwc';

export default class GrandParent1 extends LightningElement {
    cnt=0;
    setCount(event)
    {
        this.cnt+=parseInt(event.detail.cnt);
    }
    resetAll()
    {
        this.cnt = 0;
        this.template.querySelector('c-parent1').resetChild();        
    }
}