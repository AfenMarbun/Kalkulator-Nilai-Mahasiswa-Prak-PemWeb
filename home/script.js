document.getElementById("submit-btn").addEventListener("click", function () {
  const nilaiTugas = parseFloat(document.getElementById("nilai-tugas").value);
  const nilaiUTS = parseFloat(document.getElementById("nilai-uts").value);
  const nilaiUAS = parseFloat(document.getElementById("nilai-uas").value);

  if (
    isNaN(nilaiTugas) ||
    isNaN(nilaiUTS) ||
    isNaN(nilaiUAS) ||
    nilaiTugas < 0 ||
    nilaiTugas > 100 ||
    nilaiUTS < 0 ||
    nilaiUTS > 100 ||
    nilaiUAS < 0 ||
    nilaiUAS > 100
  ) {
    alert("Please enter valid numbers between 0 and 100 for all fields.");
    return;
  }

  const tugasWeight = 0.3;
  const utsWeight = 0.3;
  const uasWeight = 0.4;

  let weightedAverage =
    nilaiTugas * tugasWeight + nilaiUTS * utsWeight + nilaiUAS * uasWeight;
  let grade;
  let status;

  if (weightedAverage >= 90) {
    grade = "A";
    status = "Lulus";
  } else if (weightedAverage >= 80) {
    grade = "B";
    status = "Lulus";
  } else if (weightedAverage >= 70) {
    grade = "C";
    status = "Lulus";
  } else if (weightedAverage >= 60) {
    grade = "D";
    status = "Lulus";
  } else {
    grade = "E";
    status = "Gagal";
  }

  window.location.href = `../result/result.html?nilaiTugas=${nilaiTugas}&nilaiUTS=${nilaiUTS}&nilaiUAS=${nilaiUAS}&weightedAverage=${weightedAverage.toFixed(
    2
  )}&grade=${grade}&status=${status}`;
});

document.getElementById("reset-btn").addEventListener("click", function () {
  document.getElementById("nilai-tugas").value = "";
  document.getElementById("nilai-uts").value = "";
  document.getElementById("nilai-uas").value = "";
});
