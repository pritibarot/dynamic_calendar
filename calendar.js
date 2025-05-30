let selectedColor = '#4CAF50'; // Default color

function generateTable() {
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");

    for (var i = 0; i < 25; i++) {
        const row = document.createElement("tr");

        if (i == 0) {
            const cell = document.createElement("td");
            const cellText = document.createTextNode("Time/Date");
            cell.appendChild(cellText);
            row.appendChild(cell);
        } else {
            const cell = document.createElement("td");
            const cellText = document.createTextNode(`${i}:00`);
            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        for (let j = 1; j < 32; j++) {
            if (i == 0) {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(`July ${j}`);
                cell.appendChild(cellText);
                row.appendChild(cell);
            } else {
                const cell = document.createElement("td");
                const cellText = document.createTextNode(" ");
                cell.id = "row_" + i + ",column_" + j;
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
        }
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblBody);
    document.body.appendChild(tbl);
    tbl.setAttribute("border", "1");
    tbl.setAttribute("id", "myTable");
}

function taskCalendar() {
    const fromDate = parseInt(document.getElementById("fromDate").value);
    const tillDate = parseInt(document.getElementById("tillDate").value);
    const fromTime = parseInt(document.getElementById("fromTime").value);
    const tillTime = parseInt(document.getElementById("tillTime").value);
    const eventName = document.getElementById("eventName").value;

    // Validation
    if (!fromDate || !tillDate || !fromTime || !tillTime || !eventName) {
        alert("Please fill in all fields");
        return;
    }

    if (fromDate > tillDate || fromTime > tillTime) {
        alert("'From' values should be less than or equal to 'Till' values");
        return;
    }

    if (fromDate < 1 || tillDate > 31 || fromTime < 1 || tillTime > 24) {
        alert("Please enter valid date (1-31) and time (1-24) values");
        return;
    }

    const string1 = "row_" + fromTime + ",column_" + fromDate;
    const td = document.getElementById(string1);

    if (!td) {
        alert("Invalid cell selection");
        return;
    }

    const adcol = tillDate - fromDate + 1;
    const adrow = tillTime - fromTime + 1;

    // Set the event name and styling
    td.innerHTML = eventName;
    td.style.backgroundColor = selectedColor;
    td.classList.add('event-cell');
    td.setAttribute('colspan', adcol);
    td.setAttribute('rowspan', adrow);

    // Remove overlapping cells
    for (let i = fromTime; i < fromTime + adrow; i++) {
        for (let j = fromDate; j < fromDate + adcol; j++) {
            const removeElement = 'row_' + i + ',column_' + j;
            if (i == fromTime && j == fromDate) {
                continue;
            } else {
                const element = document.getElementById(removeElement);
                if (element) {
                    element.parentNode.removeChild(element);
                }
            }
        }
    }

    // Clear form
    document.getElementById("fromDate").value = "";
    document.getElementById("tillDate").value = "";
    document.getElementById("fromTime").value = "";
    document.getElementById("tillTime").value = "";
    document.getElementById("eventName").value = "";
}

// Color picker functionality
document.addEventListener('DOMContentLoaded', function () {
    const colorOptions = document.querySelectorAll('.color-option');

    colorOptions.forEach(option => {
        option.addEventListener('click', function () {
            // Remove selected class from all options
            colorOptions.forEach(opt => opt.classList.remove('selected'));

            // Add selected class to clicked option
            this.classList.add('selected');

            // Update selected color
            selectedColor = this.getAttribute('data-color');
        });
    });
});

// Generate the table when page loads
generateTable();