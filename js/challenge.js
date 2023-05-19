// 第一のチャレンジ
$("#challenge1").on("click", function () {
    const c = Math.ceil(Math.random() * 7);
    let rotation = Math.random() < 0.5 ? "0deg" : "180deg";
    let view = "";
  
    if (c == 1) {
      view =
        '<img src="/img/0.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "今までの状況から解放される、自由な発想、未知の分野へ乗り出す、旅に出る";
      } else {
        challenge1Description =
          "無計画、いきあたりばったり、どうでもよくなる、逃避";
      }
    }
    if (c == 2) {
      view =
        '<img src=/img/1.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "新しいことに着手する、テクノロジー分野、コミュニケーション分野、承認を得る";
      } else {
        challenge1Description =
          "同じ間違いを繰り返す、意図が伝わらない、ごまかし、見掛け倒し";
      }
    }
    if (c == 3) {
      view =
        '<img src=/img/2.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "学ぶ、知識の共有、人の話を聞く、１：１の人間関係、整然とした対応";
      } else {
        challenge1Description =
          "お役所仕事、融通が効かない、精神的ストレス、整理整頓がついていない";
      }
    }
    if (c == 4) {
      view =
        '<img src=/img/3.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "注目を浴びる、アートや美しいもの、豊かさを得る、余裕";
      } else {
        challenge1Description =
          "散財、自己中心的、キャッシュフロー不足、たかられる";
      }
    }
    if (c == 5) {
      view =
        '<img src=/img/4.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description = "権力を得る、管理する、組織立てる、器の大きさ";
      } else {
        challenge1Description = "権力の濫用、地位の失墜、好戦的";
      }
    }
    if (c == 6) {
      view =
        '<img src=/img/5.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "師匠について学ぶ、精神性の高さ、エバンジェリスト、世のため人のため";
      } else {
        challenge1Description = "詐欺、精神性が低い、洗脳状態";
      }
    }
    if (c == 7) {
      view =
        '<img src=/img/6.jpeg class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge1Description =
          "素晴らしい出会い、正しい選択、あうんの呼吸で通じる、人前に出る";
      } else {
        challenge1Description = "意思疎通の失敗、選択への後悔、人間関係の問題";
      }
    }
    $("#echo3").html(view);
    $("#challengeDesc1Pre").html(challenge1Description);
  });
  
  // 第二のチャレンジ
    $("#challenge2").on("click", function () {
      const c = Math.ceil(Math.random() * 7);
      let rotation = Math.random() < 0.5 ? "0deg" : "180deg";
      let view = "";  
    if (c == 1) {
      view =
        '<img src="/img/7.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "前進、営業活動、競争で優位に立つ、勢いがつく、体育会的";
      } else {
        challenge2Description =
          "勢いだけ、身体的過労、競争で劣勢になる、撤退、無理のある進め方";
      }
    }
  
    if (c == 2) {
      view =
        '<img src="/img/8.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "忍耐力で成果を出す、難しい状況を制する、精神的な強さ、高いレジリエンス";
      } else {
        challenge2Description =
          "難しいに対応できない、忍耐不足、力不足、自律心不足";
      }
    }
  
    if (c == 3) {
      view =
        '<img src="/img/9.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "蓄積された知見、慎重、堅実に動く、権威者からのサポート、深い知識を得る";
      } else {
        challenge2Description =
          "目先のことしか考えない、引きこもる、新しい考えへの拒否反応";
      }
    }
  
    if (c == 4) {
      view =
        '<img src="/img/10.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "好機を得る、時流に乗る、テクノロジーを活かす";
      } else {
        challenge2Description =
          "タイミングが悪い、変化についていけない、空回り";
      }
    }
  
    if (c == 5) {
      view =
        '<img src="/img/11.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "契約締結、信頼、バランスの取れた、ワークライフバランスがよい、訴訟に勝つ";
      } else {
        challenge2Description =
          "不正、ワークライフバランスが取れない、契約決裂、訴訟に負ける";
      }
    }
  
    if (c == 6) {
      view =
        '<img src="/img/12.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "苦難を通じた精神的成長、物事を別の視点から見る、苦労が報われる、想定外の戦略";
      } else {
        challenge2Description =
          "不毛に感じる苦労、精神的ストレス、とにかく辛い";
      }
    }
  
    if (c == 7) {
      view =
        '<img src="/img/13.jpeg" class="card" style="transform: rotate(' +
        rotation +
        ');">';
      if (rotation == "0deg") {
        challenge2Description =
          "物事が進展しない、不毛に感じる、険悪なムード、拒絶感、終了";
      } else {
        challenge2Description =
          "再生、癒し、リサイクル、もう一度やり直す";
      }
    }
  
    $("#echo4").html(view);
    $("#challengeDesc2Pre").html(challenge2Description);
  });

  //チームでのチャレンジ
$("#challenge3").on("click", function () {
    const c = Math.ceil(Math.random() * 8);
    let rotation = Math.random() < 0.5 ? "0deg" : "180deg";
    let view = "";  
  if (c == 1) {
    view =
      '<img src="/img/14.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "バランスの取れた状態、心の平穏、意思疎通がうまくいっている、人間関係のダイナミクスから新しいものが生まれる";
    } else {
      challenge3Description =
        "意思疎通が取れていない、心身のバランスを崩す";
    }
  }
  if (c == 2) {
    view =
      '<img src="/img/15.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "金銭や物質への執着、ブラックな仕事、体調を崩す、泥沼的状況";
    } else {
      challenge3Description =
        "束縛や執着から解放される、回復";
    }
  }
  if (c == 3) {
    view =
      '<img src="/img/16.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "これまで築いたものが壊れる、制裁が降る、災害";
    } else {
      challenge3Description =
        "苦しい状況をなんとか持ち堪える、考え方を変えてやり直す";
    }
  }
  if (c == 4) {
    view =
      '<img src="/img/17.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "ビジョンが見えてくる、未来への計画を立てる、創造力を活かす、芸術分野";
    } else {
      challenge3Description =
        "今後の発展が感じられない、方向性に迷う、自分の内面と繋がっていない";
    }
  }
  if (c == 5) {
    view =
      '<img src="/img/18.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "予測不可能な状態、先が見えないことへの不安、鬱っぽい気分、心の領域の問題";
    } else {
      challenge3Description =
        "霧が晴れてくる、内なる自分から答えを見出す、心の領域を扱う";
    }
  }
  if (c == 6) {
    view =
      '<img src="/img/19.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "繁栄、承認を得る、注目を浴びる、子供や動物関連の領域、肯定感、成功";
    } else {
      challenge3Description =
        "断られる、失敗、凹む、不承認、自己主張できない";
    }
  }
  if (c == 7) {
    view =
      '<img src="/img/20.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "決断する、復活、チームを鼓舞する、音楽関連、活気のある";
    } else {
      challenge3Description =
        "優柔不断、業績不振、一体感が欠けた組織、やる気のない";
    }
  }
  if (c == 8) {
    view =
      '<img src="/img/21.jpeg" class="card" style="transform: rotate(' +
      rotation +
      ');">';
    if (rotation == "0deg") {
      challenge3Description =
        "達成感、世界進出、素晴らしいパフォーマンス、一体感、統合";
    } else {
      challenge3Description =
        "不発に終わる、プロジェクトなどがローンチに辿りつかない、掴みどころのない大きな問題";
    }
  }

  $("#echo6").html(view);
  $("#challengeDesc3Pre").html(challenge3Description);

});

// 今後・洞察・結果
$("#result").on("click", function () {
    const r = Math.ceil(Math.random() * 22);
    let view = "";
    let descriptionR = "";
    if (r == 1) {
        view = '<img src=/img/0.jpeg class="card">';
        descriptionR =
        "何かまったく新しいことを始めるとしたら、何がしたいですか？過去、現在に縛られずに、自分の心に従ったら、どんな人生の旅になるか、創造的に思い描いてみましょう。";
    }
    if (r == 2) {
        view = '<img src=/img/1.jpeg class="card">';
        descriptionR =
        "アイディアや思いは、行動に移したり、語ったりすることで周囲の認知を得て、さらなる発展のきっかけとなります。小さな一歩でも行動に移してみましょう。";
    }
    if (r == 3) {
        view = '<img src=/img/2.jpeg class="card">';
        descriptionR =
        "小さい一歩一歩を、マニュアルや基本に沿って積み上げることの意味を洞察してみましょう。遠回りに感じても、新しいことを始めるときは、それが一番の近道になるかもしれません。";
    }
    if (r == 4) {
        view = '<img src=/img/3.jpeg class="card">';
        descriptionR =
        "自分の中の豊かさ、自分の持っているリソースについて、洞察してみましょう。ゆったり気持ちで、自分のリソースが、有効かつ創造的に、使われている状況を思い描いてみましょう。";
    }
    if (r == 5) {
        view = '<img src=/img/4.jpeg class="card">';
        descriptionR =
        "あたなにとってのリーダーシップとは、どんなものでしょう。組織を作り、人の上に立つということは、あなたの人生にとってどんな意味があるでしょう。";
    }
    if (r == 6) {
        view = '<img src=/img/5.jpeg class="card">';
        descriptionR =
        "心が通じあうような関係性を築くには、攻略本やHow toから一歩距離を置いて、自分自身の内面とつながり、心からの真意を持ってコミュニケーションすることを意識してみましょう。";
    }
    if (r == 7) {
        view = '<img src=/img/6.jpeg class="card">';
        descriptionR =
        "パートナーシップについて洞察してみましょう。相手に察することを強いると相手に負担をかけてしまいます。理解し合うための対話の努力と機会を忘れないようにしましょう。";
    }
    if (r == 8) {
        view = '<img src=/img/7.jpeg class="card">';
        descriptionR =
        "前進することについて洞察してみましょう。必死になりすぎて周りが見えなくなったりしていませんか。また、前進することへの不安があるなら、そのルーツはなんでしょうか。";
    }
    if (r == 9) {
        view = '<img src=/img/8.jpeg class="card">';
        descriptionR =
        "本当の強さとはどういうものでしょうか。内面の強さは、物理的には敵わないと思われる状況をも変えていくことができます。";
    }
    if (r == 10) {
        view = '<img src=/img/9.jpeg class="card">';
        descriptionR =
        "古くからある知見や経験を積んだ人々の話を再評価してみましょう。自分の深いところで共鳴するものを感じれば、それが次の一歩につながるかもしれません。";
    }
    if (r == 11) {
        view = '<img src=/img/10.jpeg class="card">';
        descriptionR =
        "世界は、予測不可能かつ、急激な変化の中にあります。世界の変化や自分自身も変わり続けることについて、洞察してみましょう。変化は、世界や自分、大切な人に何をもたらすでしょう。";
    }
    if (r == 12) {
        view = '<img src=/img/11.jpeg class="card">';
        descriptionR =
        "対等な関係やフェアであることについて、洞察してみましょう。持つ者と持たざる者、性別、年齢、国籍、その他、自分の中にバイアスや自分が感じている不平等感などが、自分の生き方や決断にどんな影響を与えているでしょう。";
    }
    if (r == 13) {
        view = '<img src=/img/12.jpeg class="card">';
        descriptionR =
        "精神的な成長は、時には苦痛を伴う体験を通して起こります。身動きが取れないように感じるとき、異なる目線から状況を見てみる、価値観について再考するなどが役に立つかもしれません。";
    }
    if (r == 14) {
        view = '<img src=/img/13.jpeg class="card">';
        descriptionR =
        "時には、何もかも終わったような気持ちになるような経験があります。しかし、それは新しいサイクルの始まりに向けた準備かもしれません。焦らずに、一旦休息の時間を取ることが、回復への鍵になるかもしれません。";
    }
    if (r == 15) {
        view = '<img src=/img/14.jpeg class="card">';
        descriptionR =
        "人間関係や組織のダイナミクスには、異なる性質のものが混ざり合うことで生まれる化学反応のようなものです。新しい環境に身を置く時、新しい人脈の輪に入る時、周囲や相手の反応を意識してみるといつもを違う関係性が築けるかもしれません。";
    }
    if (r == 16) {
        view = '<img src=/img/15.jpeg class="card">';
        descriptionR =
        "困難な状態から抜け出せないように感じるとき、一歩下がって状況を客観的に見ることで、解決策に気づくことがあります。日常的に関わらない人と話してみるなど、パターンを破る試みも助けになるかもしれません。";
    }
    if (r == 17) {
        view = '<img src=/img/16.jpeg class="card">';
        descriptionR =
        "努力して築いてきたものが崩れてしまうような経験は辛いものです。でもそれは、やり方を変える、もっと大切なものに気づくきっかけかもしれません。";
    }
    if (r == 18) {
        view = '<img src=/img/17.jpeg class="card">';
        descriptionR =
        "希望は、未来を築くことにつながります。やってみたいことやこのようにありたい自分に、自由に思いを巡らせてみましょう。";
    }
    if (r == 19) {
        view = '<img src=/img/18.jpeg class="card">';
        descriptionR =
        "先が見えない不安感やなんとなく気が滅入る、ということは誰にでもあります。無理に行動することで誤魔化すより、自分自身の不安や感情に向きあうことも大切です。";
    }     
    if (r == 20) {
        view = '<img src=/img/19.jpeg class="card">';
        descriptionR =
        "子供や動物がもつ、まっすぐな無邪気さや肯定感には、力をもらう人も多いと思います。ポジティブなエネルギーには、多くの人を動かす力があります。自分の中にあるポジティブなエネルギーとつながり、活かしているでしょうか。";
    }
    if (r == 21) {
        view = '<img src=/img/20.jpeg class="card">';
        descriptionR =
        "決断し、先に進むことには、時には勇気が必要です。人生の旅は、ひとつひとつの決断の積み重ねです。それが今のあなたを作り、これからのあなたを作ります。";
    }
    if (r == 22) {
        view = '<img src=/img/21.jpeg class="card">';
        descriptionR =
        "たとえ小さなことでも、やり遂げた、達成したというとき、自分を讃えましょう。そして次のチャレンジの準備をしましょう。大きな成功も小さな努力の積み上げの先にあるものです。";
    }                                                                                         

  $("#echo7").html(view);
  $("#descriptionPre").html(descriptionR)
});