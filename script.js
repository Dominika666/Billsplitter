const price = document.querySelector('#price')
const people = document.querySelector('#people') 
const tipSelect = document.querySelector('#tip')
const countBtn = document.querySelector('.count')
const error = document.querySelector('.error')
const costInfo = document.querySelector('.cost_info')
let cost = document.querySelector('.cost')

const showBill = () => {

    if( price.value == '' || people.value == ''|| tipSelect.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none'
    } else { 
        error.style.display = ''
        countBill()
    }
};


const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tipSelect.value);

    const sum = (newPrice + newPrice * newTip) / newPeople;
    costInfo.style.display = 'block';

    cost.textContent = sum.toFixed(2)

}


countBtn.addEventListener('click', showBill)


