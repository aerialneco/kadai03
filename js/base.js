//線が伸びるための設定を関数でまとめる
function ScrollTimelineAnime(){
	$('.timeline li').each(function(){// それぞれのli要素の
		let elemPos = $(this).offset().top;// 上からの高さ取得
		let scroll = $(window).scrollTop();// スクロール値取得
		let windowHeight = $(window).height();// windowの高さ取得
		let startPoint = 120; //線をスタートさせる位置を指定※レイアウトによって調整要
		if (scroll >= elemPos - windowHeight-startPoint){				
			let H = $(this).outerHeight(true)//liの余白と高さを含めた数値を取得
			//スクロール値から要素までの高さを引いた値を、liの高さの半分のパーセントで出す
			// let percent = (scroll+startPoint - elemPos) / (H/2) *200;//liの余白と高さの半分で線を150％に伸ばす
            let percent = (scroll+startPoint - elemPos) / (H/3) *300;

			// 100% を超えたらずっと100%を入れ続ける
			if(percent  > 100){
				percent  = 100;
			}
			// ボーダーの長さをセット
			$(this).children('.border-line').css({
				height: percent + "%", //CSSでパーセント指定
			});
		} 
	});
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).on('scroll', function(){
	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
});

// ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load', function(){
// 	ScrollTimelineAnime();// 線が伸びる関数を呼ぶ
// });


// テキストエリアのクリア

function clearInput1() {
  document.getElementById("insight_1").value = "";
}

function clearInput2() {
  document.getElementById("insight_2").value = "";
}

function clearInput3() {
  document.getElementById("insight_3").value = "";
}

function clearInput4() {
  document.getElementById("insight_4").value = "";
}

function clearInput5() {
  document.getElementById("insight_5").value = "";
}

function clearInput6() {
  document.getElementById("insight_6").value = "";
}

function clearInput7() {
  document.getElementById("insight_7").value = "";
}



// テキストエリア長さをテキストの量によって調整
$(document).ready(function(){
    $("#insight_1").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_2").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_3").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_4").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_5").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_6").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});

$(document).ready(function(){
    $("#insight_7").on("input", function(){
      this.style.height = "auto";
      this.style.height = (this.scrollHeight) + "px";
    });
});


// descriptionのddタグをクリックで追加

document.getElementById("maincharacter").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "description1";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("challenge1").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "challengeDesc1Pre";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("partner").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "description2";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("challenge2").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "challengeDesc2Pre";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("team").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "description3";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("challenge3").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "challengeDesc3Pre";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });

document.getElementById("result").addEventListener("click", function(event) {
    const parentElement = this.parentNode.parentNode;
    const ddElements = parentElement.getElementsByTagName("dd");
    
    const newDescription = document.createElement("dd");
    newDescription.id = "descriptionPre";
    
    if (ddElements.length >= 4) {
      parentElement.insertBefore(newDescription, ddElements[3]);
    } else {
      parentElement.appendChild(newDescription);
    }
}, { once: true });



// アコーディオン 
const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  
  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


