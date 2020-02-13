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
        name: 'Total Views',
        data: generateDayWiseTimeSeries(0, 18)
      }, {
        name: 'Total candidates applied',
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
      var values = [[
        4,3,10,9,29,19,25,9,12,7,19,5,13,9,17,2,7,5
      ], [
        2,3,8,7,22,16,23,7,11,5,12,5,10,4,15,2,6,2
      ]];
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
    
    
    
    
    var data = [
  {
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
var data2 = [
  {
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
  series: [
    {
      name: "Sample",
      data: data
    },
    {
      name: "Sample2",
      data: data2
    }
  ],
  markers: {
    size: 0
  },
  xaxis: {
    type: "datetime"
  },
  yaxis: [
    {
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
    
    Apex.grid = {
  padding: {
    right: 0,
    left: 0
  }
}

Apex.dataLabels = {
  enabled: false
}

var randomizeArray = function (arg) {
  var array = arg.slice();
  var currentIndex = array.length, temporaryValue, randomIndex;
  
  while (0 !== currentIndex) {

    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

// data for the sparklines that appear below header area
var sparklineData = [47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46];

// the default colorPalette for this dashboard
//var colorPalette = ['#01BFD6', '#5564BE', '#F7A600', '#EDCD24', '#F74F58'];
var colorPalette = ['#00D8B6','#008FFB',  '#FEB019', '#FF4560', '#775DD0']

var spark1 = {
  chart: {
    id: 'sparkline1',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Engagement ratio',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: '2.93%',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Engagement ratio',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var spark2 = {
  chart: {
    id: 'sparkline2',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Average likes per post',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  yaxis: {
    min: 0
  },
  xaxis: {
    type: 'datetime',
  },
  title: {
    text: '154.37',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Average likes per post',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

var spark3 = {
  chart: {
    id: 'sparkline3',
    group: 'sparklines',
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true
    },
  },
  stroke: {
    curve: 'straight'
  },
  fill: {
    opacity: 1,
  },
  series: [{
    name: 'Average comments per post',
    data: randomizeArray(sparklineData)
  }],
  labels: [...Array(24).keys()].map(n => `2018-09-0${n+1}`),
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    min: 0
  },
  title: {
    text: '5.38',
    offsetX: 30,
    style: {
      fontSize: '24px',
      cssClass: 'apexcharts-yaxis-title'
    }
  },
  subtitle: {
    text: 'Average comments per post',
    offsetX: 30,
    style: {
      fontSize: '14px',
      cssClass: 'apexcharts-yaxis-title'
    }
  }
}

new ApexCharts(document.querySelector("#spark1"), spark1).render();
new ApexCharts(document.querySelector("#spark2"), spark2).render();
new ApexCharts(document.querySelector("#spark3"), spark3).render();

    
    
     
    
}





function richTextEditor() {
    
    
    
    // RICH EDITOR support	
var toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'], // toggled buttons
    ['blockquote', 'code-block'],

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
        'script': 'sub'
    }, {
        'script': 'super'
    }], // superscript/subscript
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
        'font': []
    }],
    [{
        'align': []
    }],

    ['clean'] // remove formatting button
];


var Delta = Quill.import('delta');
var quill = new Quill('#editor', {
    modules: {
        toolbar: toolbarOptions
    },

    theme: 'snow'
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














