// 主人公表示
$("#maincharacter").on("click", function () {
	const r = Math.ceil(Math.random() * 8);
	let view = "";
	let description = "";
	if (r == 1) {
	  view = '<img src="img/king_p.jpeg" class="card">';
	  description =
		"現実的、筋の通った行動を積み上げて実績にする、損得を考える、物質的な物の扱いが得意";
	}
	if (r == 2) {
	  view = '<img src="img/queen_p.jpeg" class="card">';
	  description =
		"地に足がついている、話を聞いてどう現実化するか考える、有能な右腕、無駄が嫌い";
	}
	if (r == 3) {
	  view = '<img src="img/king_s.jpeg" class="card">';
	  description =
		"頭の回転が速い、アイディアを出すのが得意だが、行動が伴わないことがある、決断力がある、思考・情報を扱うのが得意";
	}
	if (r == 4) {
	  view = '<img src="img/queen_s.jpeg" class="card">';
	  description =
		"情報を分かりやすく整理する、コミュニケーション能力が高い、浅く広くになりやすい、感情より論理で動く";
	}
	if (r == 5) {
	  view = '<img src="img/king_c.jpeg" class="card">';
	  description =
		"暖かい人柄、配慮しすぎて優柔不断になることがある、創造力があり芸術に理解がある";
	}
	if (r == 6) {
	  view = '<img src="img/queen_c.jpeg" class="card">';
	  description =
		"他者の感情を理解するのが得意、直感力がある、養育的な役割が得意、傷つきやすい";
	}
	if (r == 7) {
	  view = '<img src="img/king_w.jpeg" class="card">';
	  description =
		"言葉より行動で示す、熱意がある、実直だが単純、情報やトレンドに乗り遅れがちになることがある";
	}
	if (r == 8) {
	  view = '<img src="img/queen_w.jpeg" class="card">';
	  description =
		"裏表がなく動物にも好かれる、天然、あまりトレンドなどに興味がない";
	}

	$("#echo").html(view);
	$("#description1").html(description);
	const element = document.querySelector('#description1');
	element.classList.add('active');
	

    // パートナー
	 $("#partner").on("click", function () {
    let remainingOptions = [1, 2, 3].filter(function (option) {
      return option !== r;
    }); // r以外の選択肢を取得

    const secondR =
      remainingOptions[Math.floor(Math.random() * remainingOptions.length)]; // 残りの選択肢からランダムで1つを選ぶ

    let partnerView = "";
    let partnerDescription = "";
    if (secondR == 1) {
      partnerView = '<img src="img/king_p.jpeg" class="card">';
      partnerDescription =
        "現実的、筋の通った行動を積み上げて実績にする、損得を考える、物質的な物の扱いが得意";
    }
    if (secondR == 2) {
      partnerView = '<img src="./img/queen_p.jpeg" class="card">';
      partnerDescription =
        "地に足がついている、話を聞いてどう現実化するか考える、有能な右腕、無駄が嫌い";
    }
    if (secondR == 3) {
      partnerView = '<img src="./img/king_s.jpeg" class="card">';
      partnerDescription = "頭の回転が速い、アイディアを出すのが得意だが、行動が伴わないことがある、決断力がある、思考・情報を扱うのが得意";
    }
    if (secondR == 4) {
      partnerView = '<img src=/img/queen_s.jpeg class="card">';
      partnerDescription = "情報を分かりやすく整理する、コミュニケーション能力が高い、浅く広くになりやすい、感情より論理で動く";
    }
    if (secondR == 5) {
      partnerView = '<img src=/img/king_c.jpeg class="card".jpeg>';
      partnerDescription = "暖かい人柄、配慮しすぎて優柔不断になることがある、創造力があり芸術に理解がある";
    }
    if (secondR == 6) {
      partnerView = '<img src=/img/queen_c.jpeg class="card">';
      partnerDescription = "他者の感情を理解するのが得意、直感力がある、養育的な役割が得意、傷つきやすい";
    }
    if (secondR == 7) {
      partnerView = '<img src=/img/king_w.jpeg class="card">';
      partnerDescription = "言葉より行動で示す、熱意がある、実直だが単純、情報やトレンドに乗り遅れがちになることがある";
    }
    if (secondR == 8) {
      partnerView = '<img src=/img/queen_w.jpeg class="card">';
      partnerDescription = "裏表がなく動物にも好かれる、天然、あまりトレンドなどに興味がない";
    }

    $("#echo2").html(partnerView);
    $("#description2").html(partnerDescription);
  });
});


// 新メンバー
$("#team").on("click", function () {
  const t = Math.ceil(Math.random() * 8);

  let view = "";
  let memberDescription = "";
  if (t == 1) {
    view = '<img src=/img/knight_p.jpeg class="card">';
    memberDescription =
    "真面目な会社員タイプ、指示に従う、正確に仕事を行う、あまりリスクを取りたくない";
  }
  if (t == 2) {
    view = '<img src=/img/page_p.jpeg class="card">';
    memberDescription =
    "学習意欲がある、得た知識を実践に適用する、応用力に欠ける";
  }
  if (t == 3) {
    view = '<img src=/img/knight_s.jpeg class="card">';
    memberDescription =
    "１聞いて１０理解するタイプ、手を動かすのがあまり好きではない、アイディアを出すのが得意、割り切りがいい";
  }
  if (t == 4) {
    view = '<img src=/img/page_s.jpeg class="card">';
    memberDescription =
    "SNSなどネットのコミュニケーションが得意、言葉が巧みだが誤解を招くことがある";
  }
  if (t == 5) {
    view = '<img src=/img/knight_c.jpeg class="card">';
    memberDescription =
    "物腰が柔らか、感情的に人を動かすのが得意、利益より社会や人のための仕事に興味を持ちがち";
  }
  if (t == 6) {
    view = '<img src=/img/page_c.jpeg class="card">';
    memberDescription =
    "デザインやアートなどクリエイティブな事が得意、心のままに生きたい、命令されてルーティーンワークをやるような仕事には向いていない";
  }
  if (t == 7) {
    view = '<img src=/img/knight_w.jpeg class="card">';
    memberDescription =
    "誰もやっていないことをやりたい、行動力がある、リスクを取る、退屈な仕事は嫌い";
  }
  if (t == 8) {
    view = '<img src=/img/page_w.jpeg class="card">';
    memberDescription =
    "物事を誠実にこなす、正直すぎて不器用、おおらか、自然が好き";
  }

  $("#echo5").html(view);
  $("#description3").html(memberDescription);
});