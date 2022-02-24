import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';


export default class QuickCreate extends LightningElement {
    @api conFields;
    @api objApiName=ACCOUNT_OBJECT;
    showAllAccFlds = false;
    showAllOptyFlds = false;
    showAllConFlds = false;
    accFields=[NAME_FIELD];

    clearAccField()
    {
        this.template.querySelectorAll('lightning-input-field[data-name="accFields"]').forEach(ele=>{
            ele.value=""});
    }

    btnshowAllAccFldsclicked(event)
    {
        this.showAllAccFlds= !this.showAllAccFlds;
        event.target.label= this.showAllAccFlds==true? "Hide Fields": "Show All Account Fields";
    }
    clearOptyFields()
    {
        this.template.querySelectorAll('lightning-input-field[data-name="optyFields"]').forEach(ele=>
            {ele.value=""});
    }
    btnShowAllOptyFldsClicked(event)
    {
        this.showAllOptyFlds = !this.showAllOptyFlds;
        event.target.label = this.showAllOptyFlds==true? "Hide Fields": "Show All Opportunity Fields";

    }
    clearConFields()
    {
        this.template.querySelectorAll('lightning-input-field[data-name="conFields"]').forEach(ele=>
            {ele.value=""});
    }
    btnShowAllConsClicked(event)
    {
        this.showAllConFlds = !this.showAllConFlds;
        event.target.label=this.showAllConFlds==true?"Hide Fields":"Show All Contact Fields";
    }
}