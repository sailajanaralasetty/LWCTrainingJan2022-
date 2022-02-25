import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';

export default class Publisher extends LightningElement {
    contactId='';
    contactName='';
    getContactId(event)
    {
        console.log(event.detail.name);
        this.contactId = event.detail.id;
        this.contactName='';
        this.template.querySelectorAll('lightning-input-field').forEach(element => {
            if(element.fieldName=='LastName'|| element.fieldName=='FirstName')
            {
                this.contactName = this.contactName + ''+element.value;
            }
            element.value='';
            
        });        
        this.publishEvent();
    }
    publishEvent()
    {
        let conName={"Name": this.contactName.trimStart()};
        pubsub.fire('addContact', conName);
        console.log('Event Fired!!');
    }
}