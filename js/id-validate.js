const Jumin = function (strJumin) {
    this.strJumin = strJumin;
    this.checkJumin = () => {
        let jumin = this.strJumin.replace('-', '').split('');
        const bits = [2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5];
        let sum = 0;
        for (let i = 0; i < bits.length; i++) {
            sum += Number(jumin[i]) * bits[i];
        }
        let lastNum = Number(jumin[jumin.length - 1]);
        let resultNum = (11 - (sum % 11)) % 10;

        return lastNum == resultNum ? '유효한 주민번호' : '유효하지 않은 주민번호';
    };
};

function validateJumin() {
    const firstPart = document.getElementById('firstPart').value;
    const secondPart = document.getElementById('secondPart').value;

    if (!/^\d+$/.test(firstPart) || !/^\d+$/.test(secondPart)) {
        alert('숫자를 입력해주세요.');
        return;
    }

    const inputJumin = `${firstPart}-${secondPart}`;
    const juminObj = new Jumin(inputJumin);
    const result = juminObj.checkJumin();
    alert(result);
}