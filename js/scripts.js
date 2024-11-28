var hw = 6;  // number of homeworks

for (var i = 1; i <= hw; i++) {  // number of homeworks
  for (var j = 1; j <= 5; j++) {
    var myC = "#myCheckbox" + i + j;
    d3.select(myC).on("change", update);
  }
}

update();

function update() {
  var scoreTotal = 0;
  var score = 0;
  for (var i = 1; i <= hw; i++) {  // number of homeworks
    score = 0;
    for (var j = 1; j <= 5; j++) {
      var myC = "#myCheckbox" + i + j;
      var myM = "#m" + i + j;
      if (d3.select(myC).property("checked")) {
        score += parseInt(d3.select(myM).html());
      }
    }
    var myT = "#myTotal" + i;
    d3.select(myT).html(score);
    scoreTotal += score;

    // hw5 & hw6 都是 20%
    if (i == 5 || i == 6) {
      scoreTotal += score;
    }
  }
  d3.select("#myTotal").html(scoreTotal);
}


document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".slider").forEach((slider) => {

    const sliderArea = slider.querySelector(".slider-area");
    const buttons = slider.querySelectorAll(".controls button");

    // 確認 buttons 是否抓取成功
    console.log(buttons);

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        const index = parseInt(button.getAttribute("data-index"), 10);
        const offset = -index * 50;

        sliderArea.style.transform = `translateX(${offset}%)`;

        // 更新按鈕樣式
        buttons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
      });
    });

    buttons[0].classList.add("active");

  });
});


 // 平滑滾動
 function scrollToSection(className) {
  const section = document.querySelector(`.${className}`);
  console.log(`Scrolling to section: ${className}`); // 調試信息
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  } else {
      console.error(`No section found for class: ${className}`); // 錯誤信息
  }
}

// 點擊按鈕滾動到事件位置
document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("[data-target]").forEach(link => {
      link.addEventListener("click", function(event) {
          event.preventDefault(); // 防止鏈接的默認行為
          const targetClass = link.dataset.target; // 使用 dataset 獲取值 
          scrollToSection(targetClass);
      });
  });
})
   
      