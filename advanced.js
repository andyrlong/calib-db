var table;
$(document).ready(function () {
    table = $('#myAdvancedTable').DataTable();
    table.MakeCellsEditable({
        "onUpdate": myCallbackFunction,
        "inputCss":'my-input-class',
        "columns": [0,1,2,3,4],
        "allowNulls": {
            "columns": [5],
            "errorClass": 'error'
        },
        "confirmationButton": { // could also be true
            "confirmCss": 'my-confirm-class',
            "cancelCss": 'my-cancel-class'
        },
        "inputTypes": [
            {
                "column": 0,
                "type": "text",
                "options": null
            },
            {
                "column": 1,
                "type": "text",
                "options": null
            },
            {
                "column": 2,
                "type": "text",
                "options": null
            },
            {
                "column": 3,
                "type": "text",
                "options": null
            },
            {
                "column": 4,
                "type": "text",
                "options": null
            }
        ]
    });

});

function myCallbackFunction (updatedCell, updatedRow, oldValue) {
    console.log("The new value for the cell is: " + updatedCell.data());
    console.log("The old value for that cell was: " + oldValue);
    console.log("The values for each cell in that row are: " + updatedRow.data());
}

function destroyTable() {
    if ($.fn.DataTable.isDataTable('#myAdvancedTable')) {
        table.destroy();
        table.MakeCellsEditable("destroy");
    }
}