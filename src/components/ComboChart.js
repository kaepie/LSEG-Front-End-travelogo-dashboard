import Chart from './Chart';

function ComboChart({ data, title, yAxis1Label, yAxis2Label, displayLegend = false }) {
  const config = {
    data: {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          type: 'line',
          label: 'checkin', // TODO: add label for first data
          data: data.checkin, // TODO: pass first data here
          yAxisID: 'yAxis1',
          fill: true, // not fill the area under the line
        },
        {
          type: 'bar',
          label: 'booking', // TODO: add label for second data
          data: data.booking, // TODO: pass second data here
          yAxisID: 'yAxis2',
        },
      ],
    },
    options: {
      plugins: {
        title: {
          text: title,
        },
        legend: {
          display: displayLegend,
        },
        tooltip: {
          callbacks: {
            label: (tooltipItem) => {
              let rev = tooltipItem.raw;
              rev = rev.toString().replace(/\B(?=(\d{2})+(?!\d))/g, ',');
              return `${rev}%`;
            },
          },
        },
      },
      scales: {
        y: {
          display: false,
        },
        yAxis1: {
          display: true,
          position: 'left',
          title: {
            display: true,
            text: yAxis1Label,
          },
        },
        yAxis2: {
          display: true,
          position: 'right',
          title: {
            display: true,
            text: yAxis2Label,
          },
        },
      },
    },
  };

  return <Chart config={config}></Chart>;
}

export default ComboChart;
