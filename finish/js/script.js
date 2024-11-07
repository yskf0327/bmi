let bmiData = [
  {
    category: '低体重',
    min: 0,
    max: 18.5,
    class: 'warning',
  },
  {
    category: '普通体重',
    min: 18.5,
    max: 25,
    class: 'ok',
  },
  {
    category: '肥満(1度)',
    min: 25,
    max: 30,
    class: 'warning',
  },
  {
    category: '肥満(2度)',
    min: 30,
    max: 35,
    class: 'warning',
  },
  {
    category: '肥満(3度)',
    min: 35,
    max: 40,
    class: 'danger',
  },
  {
    category: '肥満(4度)',
    min: 40,
    max: Infinity,
    class: 'danger',
  },
];

let calcBtn = document.getElementById('calc');
let resultElm = document.querySelector('.result');

calcBtn.addEventListener('click', function () {
  let height = parseFloat(document.getElementById('height').value) / 100;
  let weight = parseFloat(document.getElementById('weight').value);

  console.log('height:' + height + ', weight:' + weight);

  let bmi = Math.round((weight / (height * height)) * 10) / 10;

  console.log(bmi);
  resultElm.innerHTML = '<p>あなたのBMIは' + bmi + 'です。</p>';

  let category = bmiData.find((data) => {
    if (data.min <= bmi && data.max > bmi) {
      return data;
    }
  });

  console.log(category);

  if (bmi < 18.5) {
    resultElm.innerHTML += '<p class="warning">低体重です。</p>';
    // resultElm.innerHTML = resultElm.innerHTML + '<p>低体重です。</p>';
  } else if (bmi < 25) {
    resultElm.innerHTML += '<p class="ok">普通体重です。</p>';
  } else if (bmi < 30) {
    resultElm.innerHTML += '<p class="warning">肥満(1度)です。</p>';
  } else if (bmi < 35) {
    resultElm.innerHTML += '<p class="warning">肥満(2度)です。</p>';
  } else if (bmi < 40) {
    resultElm.innerHTML += '<p class="danger">肥満(3度)です。</p>';
  } else {
    resultElm.innerHTML += '<p class="danger">肥満(4度)です。</p>';
  }
});
