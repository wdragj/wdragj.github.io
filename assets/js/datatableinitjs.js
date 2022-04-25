$.fn.DataTable.ext.pager.numbers_length = 5;

$(document).ready(function () {
  $('#myTable').DataTable({
    "pagingType": "full_numbers",
    "lengthMenu": [
      [5, 10, 20, -1],
      [5, 10, 20, "All"]
    ],
    language: {
      oPaginate: {
        sNext: '<i class="uil uil-angle-right-b page-button"></i>',
        sPrevious: '<i class="uil uil-angle-left-b page-button"></i>',
        sFirst: '<i class="uil uil-angle-double-left page-button-skip"></i>',
        sLast: '<i class="uil uil-angle-double-right page-button-skip"></i>'
      }
    }
  });
});