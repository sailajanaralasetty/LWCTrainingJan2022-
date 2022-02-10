import {LightningElement} from 'lwc';

export default class Calculator extends LightningElement{
    calcExp="";
    result = 0;
    calcResult(event)
    {
        let lbl = event.target.label;
        let result = 0;
        let sym = "";
        let indexes = [];
        this.calcExp+=lbl;
        let splChars=['*','+','-','/'];

        for(let i = 0; i < this.calcExp.length; i++) {
            if(splChars.indexOf(this.calcExp[i]) != -1) 
            {
                indexes.push(i);
            }           
        }
        console.log(indexes);
        for(let j=0;j<indexes.length;j++)
        {
            console.log('j: '+j);
            console.log('indexes[j]: '+indexes[j]);
            console.log('indexes[j-1]: '+parseInt(indexes[j-1]));
            console.log('indexes[j]===indexes[j-1]: '+parseInt(indexes[j])-1===parseInt(indexes[j-1]));
            if(parseInt(indexes[0])=== 0 || parseInt(indexes[j])-1===parseInt(indexes[j-1]))
            {
                this.result="Invalid Expression";
                break;
            }
            let num1 = parseInt(this.calcExp.substring(0,indexes[j]));
            let num2 = parseInt(this.calcExp.substring(indexes[j]+1));
            let nextnum = num2;
            if(!isNaN(nextnum))
            {
                if(this.calcExp[indexes[j]]=="+")
                {
                    if(j==0)
                    {
                        this.result =  num1 + num2;
                    }
                    else
                    {
                        this.result = this.result + num2;
                    }
                }
                else if(this.calcExp[indexes[j]]=="*")
                {
                    if(j==0)
                    {
                        this.result = num1*num2;
                    }
                    else
                    {
                        this.result = this.result * num2;
                    }
                }
                else if(this.calcExp[indexes[j]]=="-")
                {
                    if(j==0)
                    {
                        this.result = num1-num2;
                    }
                    else
                    {
                        this.result = this.result - num2;
                    }
                }
                else if(this.calcExp[indexes[j]]=="/")
                {
                    if(j==0)
                    {
                        this.result = num1/num2;
                    }
                    else
                    {
                        this.result = this.result / num2;
                    }
                }
            }
        }
        console.log('result: '+result);
    }
    clrResult()
    {
        this.result=0;
        this.calcExp = "";
    }


}