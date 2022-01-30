 import {LightningElement,track} from 'lwc';

export default class Address extends LightningElement{
    permaddr = {addr1:"", addr2:"",landmark:"",zip:""};
    curraddr = {addr1:"",addr2:"",landmark:"", zip:""};
    handlepermaddrchange(){
        this.template.querySelectorAll('lightning-input').forEach(elem=> {
            if(elem.name=="permaddrAddline1")
            {
                this.permaddr.addr1 = elem.value;
            }
            if(elem.name=='permaddrAddline2')
            {
                this.permaddr.addr2 = elem.value;
            }
            if(elem.name=='permaddrLandmark')
            {
                this.permaddr.landmark = elem.value;
            }
            if(elem.name=='permaddrZip')
            {
                this.permaddr.zip = elem.value;
            }
        });

    }
    /*handlepermaddrchange(event){
        if(event.target.name=='permaddrAddline1')
        {
            this.permaddr.addr1 = event.detail.value;
        }
        if(event.target.name=='permaddrAddline2')
        {
            this.permaddr.addr2 = event.target.value;
        }
        if(event.target.name=='permaddrLandmark')
        {
            this.permaddr.landmark = event.target.value;
        }
        if(event.target.name=='permaddrZip')
        {
            this.permaddr.zip = event.target.value;
        }
    }*/
    setCurrAddrtoPermAddr(event)
    {
        if(event.target.checked==true)
        {
            this.template.querySelectorAll('lightning-input').forEach(elem=>{
                if(elem.name=="curraddrAddline1")
                {
                    elem.value=this.permaddr.addr1;
                }
                if(elem.name=="curraddrAddline2")
                {
                    elem.value=this.permaddr.addr2;
                }
                if(elem.name=="curraddrLandmark")
                {
                    elem.value=this.permaddr.landmark;
                }
                if(elem.name=="curraddrZip")
                {
                    elem.value=this.permaddr.zip;
                }
            });
        }
        else
        {
            this.template.querySelectorAll('lightning-input').forEach(elem=>{
                if(elem.name=="curraddrAddline1" || elem.name=="curraddrAddline2" || elem.name=="curraddrLandmark" || elem.name=="curraddrZip")
                {
                    elem.value="";
                }
            });
        }
    }
}