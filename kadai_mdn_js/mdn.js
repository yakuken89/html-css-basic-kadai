const dateControl = document.querySelector('input[type="date"]');
dateControl.value = "2024-10-12";
console.log(dateControl.value); // "2024-10-24" と表示
console.log(dateControl.valueAsNumber); // 1496275200000 と JavaScript タイムスタンプを表示