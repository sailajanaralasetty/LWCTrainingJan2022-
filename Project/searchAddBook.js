import { LightningElement,wire } from 'lwc';
import checkBookExists from '@salesforce/apex/bookDetails.checkBookExistsByTitle';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import {createRecord} from 'lightning/uiRecordApi';
import TITLE_FIELD from '@salesforce/schema/Books__c.Title__c';
import GOODREADS_ID_FIELD from '@salesforce/schema/Books__c.Goodreads_Id__c';
import AUTHOR_FIELD from '@salesforce/schema/Books__c.Author__c';
import ISBN_FIELD from '@salesforce/schema/Books__c.ISBN__c';
import ISBN13_FIELD from '@salesforce/schema/Books__c.ISBN13__c';
import IMAGE_URL_FIELD from '@salesforce/schema/Books__c.image_url__c';
import AVERAGE_RATING_FIELD from '@salesforce/schema/Books__c.Average_Rating__c';
import PUBLISHER_FIELD from '@salesforce/schema/Books__c.Publisher__c';
import BINDING_FIELD from '@salesforce/schema/Books__c.Binding__c';
import NUMBER_OF_PAGES_FIELD from '@salesforce/schema/Books__c.Number_of_Pages__c';
import YEAR_PUBLISHED_FIELD from '@salesforce/schema/Books__c.Year_Published__c';

export default class SearchAddBook extends LightningElement {
    bookTitle;
    addBook = false;
    isModalOpen = false;

    @wire(checkBookExists,{bookTitle:'$bookTitle'})
    getRec({data,error})
    {
        console.log('book exists - '+ data);
        if(data==undefined)
        {
        }
        else
        {
            if(this.bookTitle!='')
            {
                if(data)
                {         
                    debugger;  
                    const event = new ShowToastEvent({
                                    title: 'Book Status',
                                    variant: 'success',
                                    message: 'Book with name - "'+this.bookTitle + '" already exists!!'
                    });
                    this.dispatchEvent(event);
                }
                else       
                {
                    this.openModal();
                }
            }
        }
    };
    openModal() {
        this.isModalOpen = true;
    }
    closeModal() {
        this.isModalOpen = false;
    }
    searchBook()
    {
        this.bookTitle = this.template.querySelector('lightning-input').value;        
    }
    showInputFields()
    {
        this.addBook = true;
    }
    createBook()
    {
        const allValid=[...this.template.querySelectorAll('lightning-input')].reduce((validSoFar,inputFields)=>{
            inputFields.reportValidity();
            return validSoFar && inputFields.checkValidity;
        },true);
        if(allValid)
        {
            const fields={};
            fields[TITLE_FIELD.fieldApiName] = this.template.querySelector("[data-field='Title__c']").value;
            fields[GOODREADS_ID_FIELD.fieldApiName] = this.template.querySelector("[data-field='Goodreads_Id__c']").value;
            fields[AUTHOR_FIELD.fieldApiName] = this.template.querySelector("[data-field='Author__c']").value;
            fields[ISBN_FIELD.fieldApiName] = this.template.querySelector("[data-field='ISBN__c']").value;
            fields[ISBN13_FIELD.fieldApiName] = this.template.querySelector("[data-field='ISBN13__c']").value;
            fields[IMAGE_URL_FIELD.fieldApiName] = this.template.querySelector("[data-field='image_url__c']").value;
            fields[AVERAGE_RATING_FIELD.fieldApiName] = this.template.querySelector("[data-field='Average_Rating__c']").value;
            fields[PUBLISHER_FIELD.fieldApiName] = this.template.querySelector("[data-field='Publisher__c']").value;
            fields[BINDING_FIELD.fieldApiName] = this.template.querySelector("[data-field='Binding__c']").value;
            fields[NUMBER_OF_PAGES_FIELD.fieldApiName] = this.template.querySelector("[data-field='Number_of_Pages__c']").value;
            fields[YEAR_PUBLISHED_FIELD.fieldApiName] = this.template.querySelector("[data-field='Year_Published__c']").value;
            
            const recInput = {'apiName':'Books__c',fields};
            createRecord(recInput).then(()=>{
                this.bookTitle= '';
                this.closeModal();
            })
            .catch(error => {
                console.log(error);
            });
            
        }
    }
}