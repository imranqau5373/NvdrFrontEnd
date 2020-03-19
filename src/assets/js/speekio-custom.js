function charts() {
  var options = {
    chart: {
      type: "area",
      height: 300,
      foreColor: "#999",
      scroller: {
        enabled: true,
        track: {
          height: 7,
          background: '#e0e0e0'
        },
        thumb: {
          height: 10,
          background: '#94E3FF'
        },
        scrollButtons: {
          enabled: true,
          size: 9,
          borderWidth: 2,
          borderColor: '#1999E3',
          fillColor: '#1999E3'
        },
        padding: {
          left: 30,
          right: 20
        }
      },
      stacked: true,
      dropShadow: {
        enabled: true,
        enabledSeries: [0],
        top: -2,
        left: 2,
        blur: 5,
        opacity: 0.06
      }
    },
    colors: ['#00E396', '#1999E3'],
    stroke: {
      curve: "smooth",
      width: 3
    },
    dataLabels: {
      enabled: false
    },
    series: [{
      name: 'Candidates applied',
      data: generateDayWiseTimeSeries(0, 18)
    }, {
      name: 'Candidates left',
      data: generateDayWiseTimeSeries(1, 18)
    }],
    markers: {
      size: 0,
      strokeColor: "#fff",
      strokeWidth: 3,
      strokeOpacity: 1,
      fillOpacity: 1,
      hover: {
        size: 6
      }
    },
    xaxis: {
      type: "datetime",
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false
      }
    },
    yaxis: {
      labels: {
        offsetX: 24,
        offsetY: -5
      },
      tooltip: {
        enabled: true
      }
    },
    grid: {
      padding: {
        left: -5,
        right: 5
      }
    },
    tooltip: {
      x: {
        format: "dd MMM yyyy"
      },
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left'
    },
    fill: {
      type: "solid",
      fillOpacity: 0.7
    }
  };

  var chart = new ApexCharts(document.querySelector("#timeline-chart"), options);

  chart.render();

  function generateDayWiseTimeSeries(s, count) {
    var values = [
      [
        4, 3, 10, 9, 29, 19, 25, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5
      ],
      [
        2, 3, 8, 7, 22, 16, 23, 7, 11, 5, 12, 5, 10, 4, 15, 2, 6, 2
      ]
    ];
    var i = 0;
    var series = [];
    var x = new Date("11 Nov 2012").getTime();
    while (i < count) {
      series.push([x, values[s][i]]);
      x += 86400000;
      i++;
    }
    return series;
  }





}


function chart2() {


  var data = [{
      x: "03-01-2019 GMT",
      y: 1
    },
    {
      x: "03-02-2019 GMT",
      y: 2
    },
    {
      x: "03-03-2019 GMT",
      y: 3
    },
    {
      x: "03-04-2019 GMT",
      y: 4
    },
    {
      x: "03-05-2019 GMT",
      y: 5
    },
    {
      x: "03-06-2019 GMT",
      y: 4
    },
    {
      x: "03-07-2019 GMT",
      y: 3
    },
    // {
    //   x: "03-08-2019 GMT",
    //   y: 4
    // },
    // {
    //   x: "03-09-2019 GMT",
    //   y: 3
    // },
    // {
    //   x: "03-10-2019 GMT",
    //   y: 4
    // },
    // {
    //   x: "03-11-2019 GMT",
    //   y: 1
    // },
    // {
    //   x: "03-12-2019 GMT",
    //   y: 2
    // },
    // {
    //   x: "03-13-2019 GMT",
    //   y: 3
    // },
    // {
    //   x: "03-14-2019 GMT",
    //   y: 5
    // }
  ];
  var data2 = [{
      x: "03-01-2019 GMT",
      y: 2
    },
    {
      x: "03-02-2019 GMT",
      y: 3
    },
    {
      x: "03-03-2019 GMT",
      y: 2
    },
    {
      x: "03-04-2019 GMT",
      y: 3
    },
    {
      x: "03-05-2019 GMT",
      y: 4
    },
    {
      x: "03-06-2019 GMT",
      y: 4
    },
    {
      x: "03-07-2019 GMT",
      y: 3
    },
    // {
    //   x: "03-08-2019 GMT",
    //   y: 4
    // },
    // {
    //   x: "03-09-2019 GMT",
    //   y: 3
    // },
    // {
    //   x: "03-10-2019 GMT",
    //   y: 5
    // },
    // {
    //   x: "03-11-2019 GMT",
    //   y: 2
    // },
    // {
    //   x: "03-12-2019 GMT",
    //   y: 3
    // },
    // {
    //   x: "03-13-2019 GMT",
    //   y: 2
    // },
    // {
    //   x: "03-14-2019 GMT",
    //   y: 3
    // }
  ];

  var options = {
    chart: {
      height: 200,

      type: "line",
      zoom: {
        enabled: false
      }
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "straight",
      width: [2, 2]
    },
    series: [{
        name: "Sample",
        data: data
      }
    ],
    markers: {
      size: 0
    },
    xaxis: {
      type: "datetime"
    },
    yaxis: [{
        min: 1,
        max: 5,
        tickAmount: 4,
        // logarithmic: true,
      },
      {
        min: 1,
        max: 5,
        opposite: true,
        tickAmount: 4,
      }
    ]
  };

  var chart = new ApexCharts(document.querySelector("#chart2"), options);

  chart.render();


}


function chart3() {

  
       var options = {
          series: [
          {
            name: 'Bob',
            data: [
              {
                x: 'Design',
                y: [
                  new Date('2019-03-05').getTime(),
                  new Date('2019-03-08').getTime()
                ]
              },
              {
                x: 'Code',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-05').getTime()
                ]
              },
              {
                x: 'Code',
                y: [
                  new Date('2019-03-05').getTime(),
                  new Date('2019-03-07').getTime()
                ]
              },
              {
                x: 'Test',
                y: [
                  new Date('2019-03-03').getTime(),
                  new Date('2019-03-09').getTime()
                ]
              },
              {
                x: 'Test',
                y: [
                  new Date('2019-03-08').getTime(),
                  new Date('2019-03-11').getTime()
                ]
              },
              {
                x: 'Validation',
                y: [
                  new Date('2019-03-11').getTime(),
                  new Date('2019-03-16').getTime()
                ]
              },
              {
                x: 'Design',
                y: [
                  new Date('2019-03-01').getTime(),
                  new Date('2019-03-03').getTime()
                ]
              }
            ]
          },
          {
            name: 'Joe',
            data: [
              {
                x: 'Design',
                y: [
                  new Date('2019-03-02').getTime(),
                  new Date('2019-03-05').getTime()
                ]
              },
              {
                x: 'Test',
                y: [
                  new Date('2019-03-06').getTime(),
                  new Date('2019-03-16').getTime()
                ]
              },
              {
                x: 'Code',
                y: [
                  new Date('2019-03-03').getTime(),
                  new Date('2019-03-07').getTime()
                ]
              },
              {
                x: 'Deployment',
                y: [
                  new Date('2019-03-20').getTime(),
                  new Date('2019-03-22').getTime()
                ]
              },
              {
                x: 'Design',
                y: [
                  new Date('2019-03-10').getTime(),
                  new Date('2019-03-16').getTime()
                ]
              }
            ]
          },
          {
            name: 'Dan',
            data: [
              {
                x: 'Code',
                y: [
                  new Date('2019-03-10').getTime(),
                  new Date('2019-03-17').getTime()
                ]
              },
              {
                x: 'Validation',
                y: [
                  new Date('2019-03-05').getTime(),
                  new Date('2019-03-09').getTime()
                ]
              },
            ]
          }
        ],
          chart: {
          height: 450,
          type: 'rangeBar'
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '80%'
          }
        },
        xaxis: {
          type: 'datetime'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [50, 0, 100, 100]
          }
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left'
        }
        };

        var chart = new ApexCharts(document.querySelector("#chart3"), options);
        chart.render();
      
      
    
      
      
    


}


function sidebarToggle() {
  $(document).on('click', '.icon-sidebar', function (e) {
    const element = document.querySelector('.sidebar');
    element.classList.toggle('expand');
    /* $('.aside').removeClass('expand');
     $('.icon-aside').removeClass('active');*/
    $(this).toggleClass('active');
  });
}





function nestedToggle() {
  $(document).on('click', '.nested', function (e) {
    $(this).toggleClass("open");
    $(this).find('ul').toggleClass("visible");
  });
}


function customScroller() {

   {
    OverlayScrollbars(document.querySelectorAll('.group-card-content-panels'),

      {
        className: "os-theme-thick-dark",
        scrollbars: {
          autoHide: "false",
          dragScrolling: true,
          clickScrolling: false,
          touchSupport: true,
        }

      },
                      
                      
  
                      
                      

    );
  

        OverlayScrollbars(document.querySelectorAll('.candidate-swimlane-container'), {
        className: "os-theme-thick-dark",
    });
                      
       
       
}
    
   
    
    
    
    
    
    
}


function tooltip() {

 $('[data-toggle="tooltip"]').tooltip({
   container: 'body'
});


}





function validations() {



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();






}




function datatable() {

  $(document).ready(function () {
    $('#myTable').DataTable(


      {

        paging: true,
        pagingType: "full_numbers",
        info: false,
        keys: true,
        colReorder: {
          realtime: false
        },
        responsive: true,
        lengthMenu: [
          [5, 10, 25, 50, -1],
          [5, 10, 25, 50, "All"]
        ],
        pageLength: 10,


        initComplete: (settings, json) => {
          $('#myTable_paginate').appendTo('.table-pagination');
          $('#myTable_length').appendTo('.table-entries');
          $('#myTable_filter').appendTo('.search-bar');

        },
        "language": {
          "paginate": {
            "previous": "<",
            "next": ">",
            "first": "<<",
            "last": ">>",
          }
        }
      }


    );
  });


}












function layoutReviewer() {





  $("#menu-toggle").click(function(e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
  });



  var alterClass = function() {
    var ww = document.body.clientWidth;
    if (ww <= 991) {
      $('#wrapper').removeClass('toggled');
    } else {
      $('#wrapper').addClass('toggled');
    };
  };
  $(window).resize(function(){
    alterClass();
  });
  //Fire it when the page first loads:
  alterClass();



 
    var docHeight = $(window).outerHeight();
    var headerHeight = $("header").outerHeight();
    var sidebarWidth = $("#sidebar-wrapper").outerWidth();
    var sidebarHeight = docHeight - headerHeight + 'px';
    //alert(sidebarWidth);
    $('.sidebar-brand').css('min-width', sidebarWidth - '15' + 'px');
    $('#sidebar-wrapper').css('height', sidebarHeight);





}



function charttest() {

    
    
    
    var canvasSize = 200,
    centre = canvasSize/2,
    radius = canvasSize*0.8/2,
    s = Snap('#svg'),
    path = "",
    arc = s.path(path),    
    startY = centre-radius,
    runBtn = document.getElementById('run'),
    percDiv = document.getElementById('percent'),
    input = document.getElementById('input');

input.onkeyup = function(evt) {
    if(isNaN(input.value)) {
      input.value = '';
    }
};

runBtn.onclick = function() {
  run(input.value/100);
};

function run(percent) {
    var endpoint = percent*360;
    Snap.animate(0, endpoint,   function (val) {
        arc.remove();

        var d = val,
            dr = d-90;
            radians = Math.PI*(dr)/180,
            endx = centre + radius*Math.cos(radians),
            endy = centre + radius * Math.sin(radians),
            largeArc = d>180 ? 1 : 0;  
            path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
  
        arc = s.path(path);
        arc.attr({
          stroke: '#1999E3',
          fill: 'none',
          strokeWidth: 12
        });
        percDiv.innerHTML =    Math.round(val/360*100) +'%';

    }, 2000, mina.easeinout);  
}

run(input.value/100);








}













function richTextEditor() {
    
    
    
    // RICH EDITOR support	
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
   

    [{
        'header': 1
    }, {
        'header': 2
    }], // custom button values
    [{
        'list': 'ordered'
    }, {
        'list': 'bullet'
    }],
    
    [{
        'indent': '-1'
    }, {
        'indent': '+1'
    }], // outdent/indent
    [{
        'direction': 'rtl'
    }], // text direction

    [{
        'size': ['small', false, 'large', 'huge']
    }], // custom dropdown
    [{
        'header': [1, 2, 3, 4, 5, 6, false]
    }],

    [{
        'color': []
    }, {
        'background': []
    }], // dropdown with defaults from theme
    
    [{
        'align': []
    }],

    ['clean'] // remove formatting button
];


var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions,
       
    },

    theme: 'snow',
     
});
    
    var quill = new Quill('#editor2', {
    modules: {
        toolbar: toolbarOptions
    },

    theme: 'snow'
});


// Store accumulated changes
var change = new Delta();
quill.on('text-change', function (delta) {
    change = change.compose(delta);
});

// Save periodically
setInterval(function () {
    if (change.length() > 0) {
        console.log('Saving changes', change);
        /* 
        Send partial changes
        $.post('/your-endpoint', { 
          partial: JSON.stringify(change) 
        });
    
        Send entire document
        $.post('/your-endpoint', { 
          doc: JSON.stringify(quill.getContents())
        });
        */
        change = new Delta();
    }
}, 5 * 1000);

// Check for unsaved data
window.onbeforeunload = function () {
        if (change.length() > 0) {
            return 'There are unsaved changes. Are you sure you want to leave?';
        }
    }
// END RICH EDITOR SUPPORT	
    
    
    
}




function printProfile(divName)
 {
     var printContents = document.getElementById(divName).innerHTML;
     var originalContents = document.body.innerHTML;

     document.body.innerHTML = printContents;

     window.print();

     document.body.innerHTML = originalContents;
}






function candidateTimer()

{
    
    
    var minutes = $( '#set-time' ).val();

var target_date = new Date().getTime() + ((minutes * 60 ) * 1000); // set the countdown date
var time_limit = ((minutes * 60 ) * 1000);
/*//set actual timer
setTimeout(
  function() 
  {
    alert( 'done' );
  }, time_limit );*/

var days, hours, minutes, seconds; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

	// find the amount of "seconds" between now and target
	var current_date = new Date().getTime();
	var seconds_left = (target_date - current_date) / 1000;
  
if ( seconds_left >= 0 ) {
  console.log(time_limit);
   if ( (seconds_left * 1000 ) < ( time_limit / 2 ) )  {
     $( '#tiles' ).removeClass('color-full');
     $( '#tiles' ).addClass('color-half');

		} 
    if ( (seconds_left * 1000 ) < ( time_limit / 4 ) )  {
    	$( '#tiles' ).removeClass('color-half');
    	$( '#tiles' ).addClass('color-empty');
    }
  
	days = pad( parseInt(seconds_left / 86400) );
	seconds_left = seconds_left % 86400;
		 
	hours = pad( parseInt(seconds_left / 3600) );
	seconds_left = seconds_left % 3600;
		  
	minutes = pad( parseInt(seconds_left / 60) );
	seconds = pad( parseInt( seconds_left % 60 ) );

	// format countdown string + set tag value
	countdown.innerHTML = "<span>" + hours + ":</span><span>" + minutes + ":</span><span>" + seconds + "</span>"; 
  

  
}
   
  
  
}

function pad(n) {
	return (n < 10 ? '0' : '') + n;
}
    
    
    
    
}






function tableRowClickable()

{
    
    
    
  
    $(".table-row").click(function() {
        window.document.location = $(this).data("href");
    });


    
    
    
    
    
    
}



function hiringFlow()
{
     var ds = {
     'name': 'Hiring flow',
     'title': 'Company XYZ',
     'children': [
       { 'name': 'Step-1', 'title': 'Applied' },
       { 'name': 'Step-2', 'title': 'Phone interview' },
        { 'name': 'Step-3', 'title': 'On-site interview' },
        { 'name': 'Step-4', 'title': 'Offer' },
         { 'name': 'Step-5', 'title': 'Hired' }
      ]
    };

    var oc = $('#chart-container').orgchart({
      'data' : ds,
      'nodeContent': 'title',
      'draggable': true,
        'pan': true,
      'zoom': true
    });
    
     
    $('#togglePan').on('click', function() {
      // of course, oc.setOptions({ 'pan': this.checked }); is also OK.
      oc.setOptions('pan', this.checked);
    });
    
    $('#toggleZoom').on('click', function() {
      // of course, oc.setOptions({ 'zoom': this.checked }); is also OK.
      oc.setOptions('zoom', this.checked);
    });

    
    oc.$chart.on('nodedrop.orgchart', function(event, extraParams) {
      console.log('draggedNode:' + extraParams.draggedNode.children('.title').text()
        + ', dragZone:' + extraParams.dragZone.children('.title').text()
        + ', dropZone:' + extraParams.dropZone.children('.title').text()
      );
    });
    
}




function treeSelect()
{
    
      var tree = $('#tree').tree({
                    primaryKey: 'id',
                    uiLibrary: 'bootstrap',
                    //dataSource: '/Locations/Get',
                    // dataSource: [ { id: 12, text: 'foo', children: [ { id: 23, text: 'bar' } ] } ]
                    dataSource: [
        				{ id: 1, text: 'Math', children: [ { id: 2, text: 'Analytical' } ] },
        				{ id: 3, text: 'Physics', children: [
        													{ id: 4, text: 'Newton Laws' },
        													{ id: 5, text: 'Inventions of Physics' },
        												 ]
        				}
        			],
                    checkboxes: true
                });
                $('#btnSave').on('click', function () {
                    var checkedIds = tree.getCheckedNodes();
                    alert(checkedIds);
                });
    
}


