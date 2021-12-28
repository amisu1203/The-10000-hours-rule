// 인풋창 출력 함수
function showResult() {
    const job = document.getElementById('inpJob').value;
    const hour = document.getElementById('inpHour').value;
    let perHour = 10000/(parseInt(hour));
    document.getElementById('jobValue').textContent = job;
    document.getElementById('hourValue').textContent = Math.ceil(perHour);
    document.querySelector('.outputArea').scrollIntoView(true);
}
const btnSubmit = document.querySelector('.btnSubmit');
btnSubmit.addEventListener('click', showResult);
