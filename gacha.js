(function(){
  'use strict';

  const resArea = document.getElementById('result');
  const gachaBtn = document.getElementById('gacha');

  let gacha = ["★5キタ━（・∀・）━！！！！", "★4か", "★3(´･ω･`)"];
  let prob = [5, 20, 75];
  let hitTable = [];
  let total = 0;
  let pullNum = 0;

  for (let i=0; i<gacha.length; i++) {
    total += prob[i];
    hitTable.push(total);

    // debug
    console.log(`i=${i}, total[${i}]=${total}`);
  }

  gachaBtn.onclick = (event) => {
    pullNum++;
    pullGacha(11);
  };

  function pullGacha(num) {

    // 何回目か分かるように
    const area = document.createElement(`div`);
    resArea.prepend(area);
    area.appendChild(document.createElement('hr'));
    const header = document.createElement('p');
    header.innerHTML = `11連${pullNum}回目`
    area.appendChild(header);

    for (let i=0; i<num; i++) {
      let res = getResult(Math.random() * 100);
      console.log(`result=${res}`)

      const p = document.createElement('p');
      p.innerHTML = res;
      area.appendChild(p);
    }
  }

  function getResult(input) {
    console.log(`input=${input}`);
    for (let i=0; i<gacha.length; i++) {
      if (input < parseFloat(hitTable[i])) {
        return gacha[i];
      }
      else {
        console.log(`input(${input}) is higher than hitTable[{$i}]=${hitTable[i]}.`);
      }
    }
    return gacha[gacha.length-1];
  }

})();