 let input = document.getElementById("input");
 let output = document.getElementById("output");
 
 function getInput(data){
     
     switch(data) {
         case '=':
            output.innerHTML = eval(input.innerHTML);
            break;
            case 'C':
                input.innerHTML = input.innerHTML.substr(0, input.innerHTML.length -1);
                output.innerHTML = eval(input.innerHTML.substr(0, input.innerHTML.length -1)); 
                break;
                case 'AC':
                    input.innerHTML = '';
                    output.innerHTML = '0';
                    break;
                    
                    default:
                        input.innerHTML += data;
                    }
                    output.innerHTML = eval(input.innerHTML)===undefined? 0:output.innerHTML = eval(input.innerHTML);    
                }