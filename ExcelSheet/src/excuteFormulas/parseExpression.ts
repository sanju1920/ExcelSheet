export class ParseExpression{
   private regularExpression = /[(+-/*),]/g;

   public parseFormula(expression:string):number{        
        return this.evaluateExpression(this.getExpression(expression));
    }

    private getExpression(expression:string):string[]{
        let opertor = expression.match(this.regularExpression);
        expression = expression.replace(this.regularExpression,' @@ ');
        opertor.forEach(element => {
            expression = expression.replace('@@',element);
        });
        return expression.split(' ');
    }

    private applyOpertor(param1:string,param2:string , opertor:string):number{ 
        let a = Number(param1);
        let b = Number(param2);

        switch(opertor){ 
            case '+': return a + b; 
            case '-': return a - b; 
            case '*': return a * b; 
            case '/': return a / b; 
        } 
    } 

    private precedence(op:string):number{ 
        if(op == '+'||op == '-') 
        return 1; 
        if(op == '*'||op == '/') 
        return 2; 
        return 0; 
    }
    private evaluateExpression(tokens:string[]):number{ 
        
        let ops=[];
        let values =[];
        for(let token of tokens){ 
              
            if(!token) 
                continue; 
              
            else if(token == '('){ 
                ops.push(token); 
            }              
            else if(!this.regularExpression.test(token)){                  
                    values.push(token); 
            }  
            else if(token == ')') 
            {                
                while(ops.length &&  ops[0] != '(') 
                {                      
                    values.push(this.applyOpertor(values.shift(),  values.shift(), ops.shift()));
                }  
                if(ops.length) 
                   ops.shift(); 
            } 

            else
            { 
                 while(ops.length && this.precedence(ops[0]) 
                                    >= this.precedence(token)){                                  
                    values.push(this.applyOpertor(values.shift(),  values.shift(), ops.shift())); 
                } 
                ops.push(token); 
            } 
        } 
          
        while(ops.length){              
            values.push(this.applyOpertor(values.shift(),  values.shift(), ops.shift())); 
        } 

        return values.shift(); 
    } 

}