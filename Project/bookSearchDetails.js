import { LightningElement,wire } from 'lwc';
import getbookrecs from '@salesforce/apex/bookDetails.getBookRecs';
import pubsub from 'c/pubsub';

export default class SearchDetails extends LightningElement {

    bookResults=[];
    searchText='';
    searchCnt=0;
    /*@wire(getbookrecs,{searchText:'$searchText'})
    bookResults;*/
    changeBookSearchResults(event)
    {
        console.log('text changed');
        let srcTxt = event.target.value;
        setTimeout(()=>{this.searchText = srcTxt},300);
    }
    @wire(getbookrecs,{searchText:'$searchText'})
    bookRecs({error,data}){
        if(data)
        {
            this.bookResults = data;
            this.searchCnt = data.length;
        }
    };
    selectedBook(event)
    {
        let bookId = event.currentTarget.dataset.id;
        pubsub.fire('bookSelected',{"bookId":bookId});
        console.log('bookSelected event fired!!');
    }
}