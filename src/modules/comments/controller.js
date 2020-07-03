// import all elements
import * as ele from  '../elements/commentElements';

// import comment database 
import COMMENTDB from '../data/db';

// import date object
import {holdDate, currentTime} from '../dates/dates';

// imported view
import VIEW from '../elements/createViews'






// exporting appendchild function
export function appendComment (e) {
    e.preventDefault();


// message input value and name value set
    let  msg_value = ele.MESSAGE.value
    let  name_value = ele.USERNAME.value

// object that holds the comment values and later append to the comment database
    let obj = {
        msg_value,
        name_value,
        holdDate,
        currentTime
    }

// checking the inputs for values
    if(msg_value.length < 1 || name_value.length < 1) {
        return
    }  
    else if (msg_value.length < 1 || name_value.length > 1) {
        // ele.USERNAME.classList.add('red_border');
        ele.COMMENT_ERR.style.display = "block"
    }
    else {
// append to the DOM 
    ele.CONTAINER.insertAdjacentHTML('beforeend',  VIEW(obj) );


// reset all styles
   ele.NAME_ERR.style.display = 'none'; 
   ele.USERNAME.classList.remove('red_border');


// reset inputs    
    ele.FOAM.reset()


}



// sets the comment to the localStorage
    localStorage.setItem('comments', ele.CONTAINER.innerHTML);

}



// gets the comment from the localStorage
let getFromLocalStorage = localStorage.getItem('comments')

// if(getFromLocalStorage) ele.CONTAINER.innerHTML = getFromLocalStorage;
























