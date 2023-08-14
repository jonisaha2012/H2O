document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.datepicker');
    var instances = M.Datepicker.init(elems,{format:'mm/dd/yyyy'});
  });




document.querySelector("#sub").addEventListener('click', function(event){
        event.preventDefault()
        let startDate =document.querySelector('#StartingDate').value
        let Amount =document.querySelector('#LoanAmount').value

        if (startDate.length<1){
        alert ("Date field is Blank")
        }else{
        //  first remove existing div elements
        let showResult = document.querySelector('#results')
        if (showResult.children.length>0) {
          // console.log(showResult.children)
          showResult.innerHTML = ""
 
        }

          let dateArray = getDaysBetweenDates(new Date(startDate) ,new Date() )
          let total = dateArray.length;
          // alert("Total Data : "+total+" Rows")

          let weeklyPaidAmount = Math.trunc((Number(Amount)+Amount*0.125)/45)

          let autoNumber = 1

          dateArray.forEach(element => {
            let AutoNumber  = autoNumber++
          
            let Balance = weeklyPaidAmount*AutoNumber

        
            var board = document.createElement('div');
            board.className = "card-panel center #7c4dff deep-purple accent-2 col s12";
            
            board.innerHTML = "Serial :"+AutoNumber +" Date :"+ element +" Amount: "+ weeklyPaidAmount +"  Balance : "+Balance;
            document.querySelector('#results').appendChild(board);
  
            // console.log()
          });
// summery of all details
          let paidNumber = autoNumber-1
          let remainNumber = 45 -paidNumber
          let paid = paidNumber*weeklyPaidAmount
          let RemainAmount = Number(Amount) - paid 
          document.getElementById("Summery").innerHTML = "TOTAL PAID AMOUNT IS "+paid+"TK IN "+paidNumber+"-WEEKS AND REMAINING AMOUNT "+RemainAmount+"TK WITHIN "+remainNumber+"-WEEKS";
          



        }


      });

//  This BELOW getDaysBetweenDates function is for calculating only fridays

      function getDaysBetweenDates(start, end) {
        var dayName = "fri";
        var result = [];
        var days = {sun:0,mon:1,tue:2,wed:3,thu:4,fri:5,sat:6};
        var day = days[dayName.toLowerCase().substr(0,3)];
        // Copy start date
        var current = new Date(start);
        // Shift to next of required days
        current.setDate(current.getDate() + (day - current.getDay() + 7) % 7);
        // While less than end date, add dates to result array
        while (current < end) {
          result.push(new Date(+current).toLocaleDateString('en-GB'));
          current.setDate(current.getDate() + 7);
        }
        return result;  
      }

//  This UPPER getDaysBetweenDates function is for calculating only fridays
  
        // Get Wednesdays between 15 December, 2016 and 25 February, 2017.
      // console.log(getDaysBetweenDates(new Date("2022/1/1"),new Date("2023/2/1"))); // ending datw yyyy,mm,dd
      var obj = getDaysBetweenDates(new Date("2022/1/1"),new Date("2023/2/1"));
      
    