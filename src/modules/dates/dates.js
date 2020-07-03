
    //  date/time
    const dt = new Date();
        let minute = dt.getMinutes();
        let hour = dt.getHours()
        let prepend = hour >= 12? "PM":"AM";
        let currentTime = hour + ":" + minute + " " + prepend;
        
        //get day and month
        let month = dt.getMonth();
        let year = dt.getFullYear();
        let todayDate = dt.getDate();
    
        let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        let holdDate = `${todayDate} ${months[month]}  ${year}`;
  
  export {holdDate, currentTime};



