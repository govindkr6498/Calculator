import { LightningElement } from 'lwc';
export default class Calculator extends LightningElement {
    num1 = "";
    num2 = "";
    result = 0;
    changeHandler(event){
       let {name,value} = event.target;
       if(name === "Number1"){
           this.num1 = value
       }else if(name === "Number2"){
           this.num2 = value
       }
    }
    calculateInput(event){
        let labelElement = event.target.label;
        if(labelElement === "Add"){
            this.result = parseInt(this.num1) +  parseInt(this.num2);
        }else if(labelElement === "Sub"){
            this.result = parseInt(this.num1) -  parseInt(this.num2);
        }else if(labelElement === "Mul"){
            this.result = parseInt(this.num1) *  parseInt(this.num2);
        }else if(labelElement === "Div"){
            this.result = parseInt(this.num1) /  parseInt(this.num2);
        }

        // reset the input Value.
            this.num1 = "";
            this.num2 = "";
    }
}
