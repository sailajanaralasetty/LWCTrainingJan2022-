import { LightningElement,track } from 'lwc';
import pubsub from 'c/pubsub';

export default class Subscriber extends LightningElement {
    conList=[];
    contactAdded='';
    connectedCallback()
    {
        this.registerEvent();
    }
    registerEvent()
    {
        pubsub.register("addContact",this.handleEvent.bind(this));
    }
    handleEvent(paramFromPublisher)
    {
        console.log(paramFromPublisher);
        this.contactAdded = paramFromPublisher.Name;
        this.conList.push(paramFromPublisher.Name);
    }

}