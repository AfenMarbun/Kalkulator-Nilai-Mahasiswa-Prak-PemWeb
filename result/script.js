document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const nilaiTugas = urlParams.get('nilaiTugas');
    const nilaiUTS = urlParams.get('nilaiUTS');
    const nilaiUAS = urlParams.get('nilaiUAS');
    const weightedAverage = urlParams.get('weightedAverage');
    const grade = urlParams.get('grade');
    const status = urlParams.get('status');

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
      <p>Nilai Tugas: ${nilaiTugas} (30%)</p>
      <p>Nilai UTS: ${nilaiUTS} (30%)</p>
      <p>Nilai UAS: ${nilaiUAS} (40%)</p>
      <p>Rata-rata: ${weightedAverage}</p>
      <p>Grade: ${grade}</p>
      <p>Status: <span style="color: ${status === 'Lulus' ? 'green' : 'red'}">${status}</span></p>
    `;
  });
