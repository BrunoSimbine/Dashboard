var ctx = document.getElementById('canva').getContext('2d');

// <canvas id="mixed-chart" width="800" height="450"></canvas>
new Chart(document.getElementById('canva'), {
  type: 'bar',
  data: {
    labels: ['1900', '1950', '1999', '2050', '2051', '2504', '2550', '2650'],
    datasets: [
      {
        label: 'Contribuicao de Simpativantes',
        type: 'line',
        borderColor: '#1cc88a',
        data: [808, 747, 975, 734, 833, 921, 783, 2478],
        fill: false,
      },
      {
        label: 'Contribuicao de Socios',
        type: 'bar',
        backgroundColor: '#36b9cc',
        backgroundColorHover: '#3e95cd',
        data: [133, 221, 783, 478, 133, 221, 383, 278],
      },
    ],
  },
  options: {
    responsive: true,
    legend: {
        position: 'bottom'
    },
    title: {
      
      display: false,
      text: 'Contribuicao Mensal',
    },
  },
});

const accordion = document.getElementsByClassName('accordion-expandable');

console.log(accordion.length)
for (i = 0; i < accordion.length; i++){
  accordion[i].addEventListener('click', function() {
    this.classList.toggle('active')
  })
}
