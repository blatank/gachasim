(function(){
  'use strict';

  const resArea = document.getElementById('result');
  const gachaBtn = document.getElementById('gacha');
  const clearBtn = document.getElementById('clear');
  const specArea = document.getElementById('speclist');

  let gacha = ["★5", "★4", "★3"];
  let comment = ["キタ━（・∀・）━！！！！", "か", "(´･ω･`)"];
  let prob = [5, 20, 75];
  let hitTable = [];
  let total = 0;
  let pullNum = 0;

  for (let i=0; i<gacha.length; i++) {
    total += prob[i];
    hitTable.push(total);

    const li = document.createElement("li");
    li.innerHTML = `${gacha[i]}(${prob[i]}%)`;
    specArea.appendChild(li);

    // debug
    // console.log(`i=${i}, total[${i}]=${total}`);
  }

  gachaBtn.onclick = (event) => {
    pullNum++;
    pullGacha(11);
  };

  clearBtn.onclick = (event) => {
    const area = document.getElementsByClassName("res-child");
    for (let i=area.length-1; i>=0; i--) {
      area[i].remove();
    }
    pullNum = 0;
  }

  function pullGacha(num) {

    // 何回目か分かるように
    const area = document.createElement(`div`);
    area.classList.add("res-child");
    resArea.prepend(area);
    area.appendChild(document.createElement('hr'));
    const header = document.createElement('p');
    header.innerHTML = `11連${pullNum}回目`
    area.appendChild(header);

    for (let i=0; i<num; i++) {
      let res = getResult(Math.random() * 100);
      // console.log(`result=${res}`)

      const p = document.createElement('p');
      p.innerHTML = `${gacha[res]} ${comment[res]}`;
      area.appendChild(p);
    }
  }

  function getResult(input) {
    // console.log(`input=${input}`);
    for (let i=0; i<gacha.length; i++) {
      if (input < parseFloat(hitTable[i])) {
        return i;
      }
    }
    return gacha.length - 1;
  }

})();