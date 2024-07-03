function generateTable() {
    // creates a <table> element and a <tbody> element
    const tbl = document.createElement("table");
    
    const tblBody = document.createElement("tbody");
  for (var i = 0;i < 25;i++) {
    // creates a table row
    
    const row = document.createElement("tr");
    if(i==0){
        
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`Time/date`);
        cell.appendChild(cellText);
        row.appendChild(cell);
        
    }
    else{
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`Hrs ${i}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
    }
    

    for (let j = 1 ; j < 32; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      if(i==0){
        const cell = document.createElement("td");
        const cellText = document.createTextNode(`July ${j}`);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
      else{
        const cell = document.createElement("td");
      const cellText = document.createTextNode(` `);
      cell.id="row_"+i+ ",column_"+j
      

      cell.appendChild(cellText);
      row.appendChild(cell);
      }
      
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  document.body.appendChild(tbl);
  // border attribute of tbl to '2'
  tbl.setAttribute("border","1");
  tbl.setAttribute("id","myTable")
}

generateTable()

 function taskCalendar(){
    const fromDate=document.getElementById("fromDate").value
    const tillDate=document.getElementById("tillDate").value
    const fromTime=document.getElementById("fromTime").value
    const tillTime=document.getElementById("tillTime").value
    const event=document.getElementById("eventDay").value

    const string1="row_"+fromTime+",column_"+fromDate
    console.log(string1)
    const td=document.getElementById(string1)
    console.log(td)

    const adcol=""+tillDate-fromDate+1
    console.log(adcol)
    const adrow=""+tillTime-fromTime+1
    console.log(adrow)
    td.setAttribute('colspan',adcol)
    td.setAttribute('rowspan',adrow)
    
    // var row = document.getElementById(string1);
    // console.log(row)
    // var col = document.getElementById(string1);
    // console.log(col)
    // for(i=row;i<=tillTime;i++){
    // row.removeAttribute('id')
     for(let i = fromTime; i<parseInt(fromTime) + parseInt(adrow); i++){
         for(let j = fromDate; j < parseInt(fromDate) + parseInt(adcol); j++){
             const removeElement = 'row_' + i + ',column_' + j;
             if(i == fromTime && j == fromDate){
                 continue;
             }
             else{
                 const element = document.getElementById(removeElement);
                 element.parentNode.removeChild(element);
             }
         }
     }    
}
