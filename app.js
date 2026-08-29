const decks=[
 {id:'daily',type:'vocabulary',icon:'朝',title:'Daily Life',subtitle:'Everyday routines & time',cards:[['起きる','おきる','to wake up','毎朝六時に起きます。— I wake up at six every morning.'],['間に合う','まにあう','to be in time','電車に間に合いました。— I made it in time for the train.'],['準備','じゅんび','preparation','旅行の準備をしています。— I am preparing for the trip.'],['片付ける','かたづける','to tidy up','部屋を片付けてください。— Please tidy the room.'],['留守','るす','absence / away','母は今、留守です。— My mother is away now.'],['習慣','しゅうかん','habit','早寝はいい習慣です。— Going to bed early is a good habit.']]},
 {id:'travel',type:'vocabulary',icon:'旅',title:'Travel & Directions',subtitle:'Moving around Japan',cards:[['乗り換える','のりかえる','to transfer','新宿で地下鉄に乗り換えます。— I transfer to the subway at Shinjuku.'],['到着','とうちゃく','arrival','三時に東京へ到着します。— We arrive in Tokyo at three.'],['交差点','こうさてん','intersection','次の交差点を右へ曲がります。— Turn right at the next intersection.'],['案内所','あんないじょ','information desk','案内所で地図をもらいました。— I got a map at the information desk.'],['往復','おうふく','round trip','大阪まで往復でお願いします。— A round trip to Osaka, please.'],['遅れる','おくれる','to be late','バスが十分遅れています。— The bus is ten minutes late.']]},
 {id:'patterns',type:'grammar',icon:'文',title:'N4 Grammar Patterns',subtitle:'Useful sentence structures',cards:[['〜ながら','〜ながら','while doing','音楽を聞きながら勉強します。— I study while listening to music.'],['〜そうです','〜そうです','it looks like…','雨が降りそうです。— It looks like it will rain.'],['〜てしまう','〜てしまう','finish / regrettably do','宿題を忘れてしまいました。— I unfortunately forgot my homework.'],['〜ようになる','〜ようになる','come to be able to','漢字が読めるようになりました。— I became able to read kanji.'],['〜かもしれない','〜かもしれない','might / perhaps','明日は雪かもしれません。— It might snow tomorrow.'],['〜ために','〜ために','in order to','日本で働くために勉強しています。— I study in order to work in Japan.']]},
 {id:'work',type:'vocabulary',icon:'働',title:'Work & Society',subtitle:'Office and public life',cards:[['会議','かいぎ','meeting','午後に会議があります。— There is a meeting in the afternoon.'],['受付','うけつけ','reception desk','受付で名前を書いてください。— Please write your name at reception.'],['連絡','れんらく','contact / message','後で連絡します。— I will contact you later.'],['予定','よてい','plan / schedule','週末の予定はありますか。— Do you have plans this weekend?'],['相談','そうだん','consultation','先生に相談しました。— I consulted the teacher.'],['経験','けいけん','experience','日本で働いた経験があります。— I have experience working in Japan.']]},
 {id:'feelings',type:'vocabulary',icon:'心',title:'Feelings & Opinions',subtitle:'Express what you think',cards:[['安心','あんしん','relief / peace of mind','無事だと聞いて安心しました。— I was relieved to hear they were safe.'],['残念','ざんねん','regrettable / a pity','会えなくて残念です。— It is a pity we cannot meet.'],['驚く','おどろく','to be surprised','そのニュースに驚きました。— I was surprised by the news.'],['大切','たいせつ','important / precious','家族はとても大切です。— Family is very important.'],['賛成','さんせい','agreement','私はその意見に賛成です。— I agree with that opinion.'],['心配','しんぱい','worry','試験の結果が心配です。— I worry about the exam result.']]},
 {id:'connections',type:'grammar',icon:'結',title:'Connecting Ideas',subtitle:'Explain reasons & contrast',cards:[['〜ので','〜ので','because / since','静かなので、よく眠れます。— Since it is quiet, I can sleep well.'],['〜のに','〜のに','although / despite','勉強したのに、忘れました。— Although I studied, I forgot.'],['〜し、〜し','〜し、〜し','and also / giving reasons','安いし、おいしいし、人気です。— It is cheap, delicious, and popular.'],['〜なら','〜なら','if it is / speaking of','京都なら、秋がおすすめです。— If it is Kyoto, autumn is recommended.'],['〜ても','〜ても','even if','雨が降っても行きます。— I will go even if it rains.'],['〜という','〜という','called / named','「花」という店を知っていますか。— Do you know a shop called Hana?']]}
];
const state=Object.assign({reviewed:0,mastered:[],quizCorrect:0,quizTotal:0,today:0,lastStudy:null,streak:0,xp:0,deckCompletions:0},JSON.parse(localStorage.getItem('nihongoGarden')||'null')||{});
const romaji={
 '起きる':'okiru','間に合う':'maniau','準備':'junbi','片付ける':'katazukeru','留守':'rusu','習慣':'shuukan',
 '乗り換える':'norikaeru','到着':'touchaku','交差点':'kousaten','案内所':'annaijo','往復':'oufuku','遅れる':'okureru',
 '〜ながら':'~nagara','〜そうです':'~sou desu','〜てしまう':'~te shimau','〜ようになる':'~you ni naru','〜かもしれない':'~kamo shirenai','〜ために':'~tame ni',
 '会議':'kaigi','受付':'uketsuke','連絡':'renraku','予定':'yotei','相談':'soudan','経験':'keiken',
 '安心':'anshin','残念':'zannen','驚く':'odoroku','大切':'taisetsu','賛成':'sansei','心配':'shinpai',
 '〜ので':'~node','〜のに':'~noni','〜し、〜し':'~shi, ~shi','〜なら':'~nara','〜ても':'~temo','〜という':'~to iu'
};
const lessonNotes={
 '起きる':'An intransitive verb for waking up or getting out of bed. The person who wakes is marked with は or が; use に for the waking time.',
 '間に合う':'An intransitive verb meaning to make it before a deadline. Mark the train, meeting, or deadline with に: 電車に間に合う.',
 '準備':'A noun that becomes a verb with する. Use ～の準備 for “preparation for…” and 準備ができる when something is ready.',
 '片付ける':'A transitive verb: someone puts an object or place in order. Mark what is tidied with を.',
 '留守':'Describes someone being away from home or their usual place. 留守にする means to leave a place unattended.',
 '習慣':'A regular custom or habit. Use ～習慣がある for having a habit, or 習慣になる when something becomes habitual.',
 '乗り換える':'A transitive verb for changing trains, buses, or transport. Use で for the transfer location and に for the new vehicle.',
 '到着':'A noun used with する. Mark the destination with に and the arrival time with に: 三時に東京に到着する.',
 '交差点':'A noun for the place where roads cross. Direction phrases often use 交差点を右／左に曲がる.',
 '案内所':'A staffed information counter at a station, airport, or tourist site. Use で to mark an action done there.',
 '往復':'Means both the outward and return journey. 往復切符 is a round-trip ticket; the opposite is 片道, one way.',
 '遅れる':'An intransitive verb for a person or service being late. Use に for what you are late for: 会議に遅れる.',
 '会議':'A formal meeting. Use 会議がある for one being scheduled and 会議に出る／参加する for attending.',
 '受付':'Can mean a reception counter or the act of accepting applications. 受付で identifies the physical desk.',
 '連絡':'Communication or notification, commonly used as 連絡する. Mark the person contacted with に.',
 '予定':'A plan or schedule. 予定がある means to have plans; ～予定です states what is scheduled to happen.',
 '相談':'Seeking advice through discussion. Use 人に相談する for the person consulted and ～について for the topic.',
 '経験':'Experience gained by doing something. ～たことがある is common for experiences; 経験を積む means to gain experience.',
 '安心':'A feeling of relief or security. 安心する describes becoming relieved; 安心な describes something safe or reassuring.',
 '残念':'A な-adjective expressing disappointment or regret. 残念です is polite; ～て残念です gives the disappointing reason.',
 '驚く':'An intransitive verb meaning to be surprised. Mark the surprising event or news with に.',
 '大切':'A な-adjective for something important, precious, or worthy of care. 大切にする means to value or take care of it.',
 '賛成':'Agreement with a proposal or opinion. Use ～に賛成する; the opposite is 反対する.',
 '心配':'Worry or concern, used with する. 心配する is to worry; 心配な is used before a noun.',
 '〜ながら':'Attach ながら to the verb’s ます-stem. Both actions must normally have the same subject, and the action after ながら is the main one.',
 '〜そうです':'Attach そう to a verb’s ます-stem for something that looks likely to happen. For visual impressions with adjectives, remove い from い-adjectives.',
 '〜てしまう':'Attach しまう to the て-form. It can show an action is completely finished or express regret about an unwanted result.',
 '〜ようになる':'Use dictionary-form + ようになる for a new habit, or potential-form + ようになる for a newly gained ability.',
 '〜かもしれない':'Attach directly to plain-form verbs and い-adjectives. With nouns and な-adjectives, omit だ before かもしれない. It expresses uncertain possibility.',
 '〜ために':'Use dictionary-form + ために for a purposeful action. With nouns, use noun + のために. The action should be intentional and controllable.',
 '〜ので':'Use a plain-form clause + ので to give a reason gently. With nouns and な-adjectives, use なので. It often sounds softer than から.',
 '〜のに':'Use a plain-form clause + のに for an unexpected contrast: “although…” With nouns and な-adjectives, use なのに.',
 '〜し、〜し':'Attach し to plain-form clauses to list multiple reasons or qualities. Repeating し suggests there may be additional reasons too.',
 '〜なら':'Attach なら to a noun or plain-form idea when responding to a condition or topic already raised: “if it is…” or “speaking of…”.',
 '〜ても':'Make the verb or adjective て-form and add も to mean the result stays true even under that condition: “even if…”.',
 '〜という':'Place という after a quoted name or phrase to identify what something is called. Before a noun, it can also describe the content of a statement.'
};
const extraCards={
 daily:[
  ['出かける','でかける','to go out','午後、友達と出かけます。— I am going out with a friend this afternoon.','dekakeru','An intransitive verb for leaving home to go somewhere. The destination can be marked with に or へ.'],
  ['戻る','もどる','to return','五時までに会社へ戻ります。— I will return to the office by five.','modoru','An intransitive verb for returning to a previous place or condition. Mark the place with に or へ.'],
  ['洗濯','せんたく','laundry','日曜日に洗濯をします。— I do the laundry on Sunday.','sentaku','A noun commonly used with する. 洗濯物 means laundry items or clothes to be washed.'],
  ['掃除','そうじ','cleaning','朝、台所を掃除しました。— I cleaned the kitchen this morning.','souji','Use 掃除する as a verb and mark the place being cleaned with を.'],
  ['着替える','きがえる','to change clothes','家に帰ってから着替えます。— I change clothes after returning home.','kigaeru','A transitive verb meaning to change what one is wearing. Clothes may be marked with に when changing into them.'],
  ['間','あいだ','interval / while','昼休みの間、本を読みました。— I read a book during lunch break.','aida','Use noun + の間 or verb plain form + 間 for an entire period during which something continues.']
 ],
 travel:[
  ['予約','よやく','reservation','ホテルを予約してあります。— I have reserved a hotel.','yoyaku','Use 予約する for making a booking. Mark the hotel, seat, or ticket with を.'],
  ['出発','しゅっぱつ','departure','電車は八時に出発します。— The train departs at eight.','shuppatsu','A noun used with する. Mark the starting place with を or から and time with に.'],
  ['改札','かいさつ','ticket gate','改札の前で会いましょう。— Let’s meet in front of the ticket gate.','kaisatsu','Refers to the gate area where tickets or travel cards are checked at a station.'],
  ['目的地','もくてきち','destination','目的地まであと十分です。— It is ten more minutes to the destination.','mokutekichi','A noun for the final intended destination, often used with まで or に.'],
  ['道に迷う','みちにまよう','to get lost','駅へ行く途中で道に迷いました。— I got lost on the way to the station.','michi ni mayou','A fixed expression. The particle に marks the state of uncertainty; 道を迷う is not standard.'],
  ['宿泊','しゅくはく','lodging / stay','京都に二泊宿泊します。— I will stay two nights in Kyoto.','shukuhaku','A formal noun used with する for staying overnight. In conversation, 泊まる is also common.']
 ],
 patterns:[
  ['〜ておく','〜ておく','do in advance','旅行の前にホテルを予約しておきます。— I will reserve a hotel before the trip.','~te oku','Attach おく to the て-form for preparation done in advance or for leaving something in its current state.'],
  ['〜たばかり','〜たばかり','just did','今、昼ご飯を食べたばかりです。— I have just eaten lunch.','~ta bakari','Attach ばかり to the plain past form. It means the speaker feels that little time has passed since the action.'],
  ['〜はず','〜はず','should / expected to','田中さんはもう着いたはずです。— Mr. Tanaka should have arrived already.','~hazu','Attach はず to a plain-form clause for a logical expectation based on known information.'],
  ['〜らしい','〜らしい','apparently / seems','あの店は安くておいしいらしいです。— Apparently that restaurant is cheap and delicious.','~rashii','Attach らしい to a plain form or noun to report information heard from another source.'],
  ['〜てみる','〜てみる','try doing','この靴を履いてみてもいいですか。— May I try wearing these shoes?','~te miru','Attach みる to the て-form to try an action and see the result. It is normally used for intentional actions.'],
  ['〜ことにする','〜ことにする','decide to','毎日、日本語を読むことにしました。— I decided to read Japanese every day.','~koto ni suru','Attach to a dictionary or ない-form verb to express a decision made by the speaker.']
 ],
 work:[
  ['会社員','かいしゃいん','company employee','姉は東京の会社員です。— My older sister is a company employee in Tokyo.','kaishain','A general occupation label. To name the company someone belongs to, use company name + の社員.'],
  ['上司','じょうし','supervisor','上司に報告しました。— I reported it to my supervisor.','joushi','A person above you in a workplace hierarchy. Mark the person receiving a report or question with に.'],
  ['書類','しょるい','documents','この書類に名前を書いてください。— Please write your name on this document.','shorui','A collective noun for official papers or forms. Use に for writing on a document and を for submitting it.'],
  ['提出','ていしゅつ','submission','レポートを金曜日に提出します。— I will submit the report on Friday.','teishutsu','A formal noun used with する. Mark the submitted item with を and recipient with に.'],
  ['締め切り','しめきり','deadline','申し込みの締め切りは明日です。— The application deadline is tomorrow.','shimekiri','The final time something will be accepted. 締め切りに間に合う means to meet a deadline.'],
  ['給料','きゅうりょう','salary','毎月二十五日に給料をもらいます。— I receive my salary on the 25th each month.','kyuuryou','Regular pay from employment. Use 給料をもらう for receiving salary.']
 ],
 feelings:[
  ['嬉しい','うれしい','happy / glad','プレゼントをもらって嬉しかったです。— I was happy to receive a present.','ureshii','An い-adjective for personal happiness caused by an event. It directly describes the speaker’s feeling.'],
  ['悲しい','かなしい','sad','その映画の終わりは悲しかったです。— The ending of that movie was sad.','kanashii','An い-adjective for sadness. For another person’s visible emotion, 悲しそう is often more natural.'],
  ['恥ずかしい','はずかしい','embarrassed','みんなの前で間違えて恥ずかしかったです。— I was embarrassed to make a mistake in front of everyone.','hazukashii','An い-adjective covering embarrassment, shyness, or shame depending on context.'],
  ['怒る','おこる','to get angry','父は約束を忘れて怒りました。— My father got angry because the promise was forgotten.','okoru','An intransitive verb. Mark the person or thing one is angry at with に.'],
  ['楽しみ','たのしみ','something to look forward to','来月の旅行が楽しみです。— I am looking forward to next month’s trip.','tanoshimi','Use ～が楽しみです for an anticipated event. 楽しみにする also means to look forward to it.'],
  ['自信','じしん','confidence','日本語を話す自信がありません。— I do not have confidence speaking Japanese.','jishin','Use 自信がある／ない. The skill or activity can be described before it with a dictionary-form verb.']
 ],
 connections:[
  ['〜けれども','〜けれども','although / but','この部屋は狭いけれども、明るいです。— This room is small, but bright.','~keredomo','Attach to a plain-form clause to connect contrasting ideas. けど is the common conversational form.'],
  ['〜それで','〜それで','and so / therefore','電車が止まりました。それで、遅れました。— The train stopped, so I was late.','~sorede','A conjunction introducing a natural result caused by the previous sentence. It is less suited to commands or personal requests.'],
  ['〜それに','〜それに','besides / moreover','この店は安いです。それに、駅から近いです。— This shop is cheap. Moreover, it is near the station.','~soreni','A conjunction that adds another point supporting the same idea.'],
  ['〜について','〜について','about / concerning','日本の歴史について勉強しています。— I am studying about Japanese history.','~ni tsuite','Attach to a noun to mark the topic of study, discussion, writing, or a question.'],
  ['〜によると','〜によると','according to','天気予報によると、明日は晴れです。— According to the forecast, tomorrow will be sunny.','~ni yoru to','Attach to an information source, then state what that source reports. It commonly appears with そうです.'],
  ['〜ば','〜ば','if','時間があれば、京都へ行きたいです。— If I have time, I want to go to Kyoto.','~ba','A conditional form. For verbs, change the final う sound to the matching え sound and add ば; ある becomes あれば.']
 ]
};
Object.entries(extraCards).forEach(([id,cards])=>{const deck=decks.find(d=>d.id===id);cards.forEach(card=>{deck.cards.push(card.slice(0,4));romaji[card[0]]=card[4];lessonNotes[card[0]]=card[5]})});
let currentDeck=decks[0],studyCards=[],pendingDeckId=null,cardIndex=0,quiz=[],quizIndex=0,answered=false;
const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let japaneseVoice=null;
function loadVoices(){if(!('speechSynthesis'in window))return;japaneseVoice=speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('ja'))||null}
function speakJapanese(event){event.stopPropagation();if(!('speechSynthesis'in window))return;const c=studyCards[cardIndex],text=currentDeck.type==='grammar'?c[3].split('—')[0].trim():c[0];speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(text);utterance.lang='ja-JP';utterance.rate=.82;utterance.pitch=1;if(japaneseVoice)utterance.voice=japaneseVoice;speakButton.classList.add('speaking');speakButton.setAttribute('aria-label',`Playing Japanese: ${text}`);utterance.onend=utterance.onerror=()=>{speakButton.classList.remove('speaking');speakButton.setAttribute('aria-label','Listen to Japanese pronunciation')};speechSynthesis.speak(utterance)}
function save(){localStorage.setItem('nihongoGarden',JSON.stringify(state));renderStats()}
function touchStudy(){const today=new Date().toDateString();if(state.lastStudy!==today){const y=new Date(Date.now()-86400000).toDateString();state.streak=state.lastStudy===y?state.streak+1:1;state.today=0;state.lastStudy=today}state.today++;save()}
function deckProgress(d){return Math.round(d.cards.filter(c=>state.mastered.includes(d.id+':'+c[0])).length/d.cards.length*100)}
function deckCard(d){const p=deckProgress(d);return `<button class="deck-card" data-deck="${d.id}"><span class="deck-icon">${d.icon}</span><h3>${d.title}</h3><p>${d.subtitle}</p><footer><span>${d.cards.length} cards</span><div class="mini-meter"><i style="width:${p}%"></i></div><b>${p}%</b></footer></button>`}
function renderDecks(){featuredDecks.innerHTML=decks.slice(0,3).map(deckCard).join('');const f=$('.chip.active')?.dataset.filter||'all';allDecks.innerHTML=decks.filter(d=>f==='all'||d.type===f).map(deckCard).join('');$$('[data-deck]').forEach(b=>b.onclick=()=>openSessionPicker(b.dataset.deck));renderDictionary($('#dictionarySearch').value)}
function renderDictionary(query=''){const q=query.trim().toLowerCase(),entries=decks.flatMap(d=>d.cards.map(c=>({deck:d,c}))).filter(({c})=>!q||[c[0],c[1],romaji[c[0]],c[2]].some(value=>(value||'').toLowerCase().includes(q)));dictionaryResults.innerHTML=entries.slice(0,24).map(({deck,c})=>`<button class="dictionary-entry" data-dictionary-deck="${deck.id}"><span class="dictionary-jp">${c[0]}</span><span>${c[1]} · <i>${romaji[c[0]]}</i></span><strong>${c[2]}</strong></button>`).join('');dictionaryEmpty.hidden=entries.length>0}
function navigate(id){$$('.view').forEach(v=>v.classList.toggle('active',v.id===id));$$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.nav===id));scrollTo({top:0,behavior:'smooth'});if(id==='progress')renderStats()}
function openSessionPicker(id){pendingDeckId=id;sessionDeckName.textContent=decks.find(d=>d.id===id).title;sessionPicker.hidden=false}
function startDeck(id,size=6){celebration.hidden=true;sessionPicker.hidden=true;currentDeck=decks.find(d=>d.id===id);const count=size==='all'?currentDeck.cards.length:Number(size);studyCards=currentDeck.cards.slice(0,count);cardIndex=0;studyTitle.textContent=currentDeck.title;showCard();navigate('study')}
function showCard(){const c=studyCards[cardIndex];if('speechSynthesis'in window)speechSynthesis.cancel();flashcard.classList.remove('flipped');learnMorePanel.hidden=true;learnMoreButton.setAttribute('aria-expanded','false');learnMoreButton.querySelector('span').textContent='＋';cardJapanese.textContent=c[0];cardReading.textContent=c[1];cardRomaji.textContent=romaji[c[0]]||'';cardUsage.textContent=c[3];cardMeaning.textContent=c[2];cardExample.textContent=c[3];lessonType.textContent=currentDeck.type==='grammar'?'GRAMMAR GUIDE':'VOCABULARY GUIDE';lessonHeading.textContent=currentDeck.type==='grammar'?`How to use ${c[0]}`:`Using ${c[0]} naturally`;lessonExplanation.textContent=lessonNotes[c[0]];lessonExample.textContent=c[3];lessonTip.textContent=currentDeck.type==='grammar'?'Notice the form immediately before the pattern, then make your own sentence with the same structure.':`Say the example aloud, then replace one detail to make a sentence about your own life.`;cardProgress.textContent=`${cardIndex+1} / ${studyCards.length}`;studyMeter.style.width=`${(cardIndex+1)/studyCards.length*100}%`;speakButton.disabled=!('speechSynthesis'in window);speakButton.title=speakButton.disabled?'Speech is not supported by this browser':currentDeck.type==='grammar'?'Play the example sentence':'Play Japanese pronunciation'}
function rate(known){const c=studyCards[cardIndex],key=currentDeck.id+':'+c[0],finished=cardIndex===studyCards.length-1;state.reviewed++;state.xp+=known?10:4;if(known&&!state.mastered.includes(key))state.mastered.push(key);if(finished){state.xp+=30;state.deckCompletions++;}touchStudy();renderDecks();if(finished){showCelebration()}else{cardIndex++;showCard()}}
function showCelebration(){if('speechSynthesis'in window)speechSynthesis.cancel();completedDeckName.textContent=currentDeck.title;levelUpMessage.textContent=state.xp%100<30?'New level reached!':'Deck completion reward';celebration.hidden=false}
function makeQuiz(){const pool=decks.flatMap(d=>d.cards);quiz=[...pool].sort(()=>Math.random()-.5).slice(0,5).map(c=>{const wrong=[...new Set(pool.map(x=>x[2]).filter(x=>x!==c[2]))].sort(()=>Math.random()-.5).slice(0,3);return{c,answers:[c[2],...wrong].sort(()=>Math.random()-.5)}});quizIndex=0;showQuestion();navigate('quiz')}
function showQuestion(){answered=false;nextQuestion.disabled=true;nextQuestion.textContent=quizIndex===quiz.length-1?'Finish & see progress →':'Next question →';feedback.textContent='';const q=quiz[quizIndex];quizPrompt.textContent=q.c[0];quizReading.textContent=`${q.c[1]} · ${romaji[q.c[0]]||''}`;quizProgress.textContent=`Question ${quizIndex+1} of ${quiz.length}`;quizMeter.style.width=`${(quizIndex+1)/quiz.length*100}%`;answers.innerHTML=q.answers.map(a=>`<button class="answer" data-correct="${a===q.c[2]}">${a}</button>`).join('');$$('.answer').forEach(b=>b.onclick=()=>answer(b,q.c[2]))}
function answer(button,correct){if(answered)return;answered=true;state.quizTotal++;const selected=button.textContent,ok=selected===correct,q=quiz[quizIndex];state.xp+=ok?15:5;if(ok)state.quizCorrect++;button.classList.add(ok?'correct':'wrong');$$('.answer').forEach(b=>{if(b.textContent===correct)b.classList.add('correct')});if(ok){feedback.textContent=`よくできました！ +15 XP. ${q.c[0]} (${q.c[1]} / ${romaji[q.c[0]]}) means “${correct}.” ${q.c[3]}`}else{const chosen=decks.flatMap(d=>d.cards).find(c=>c[2]===selected);feedback.textContent=`You chose “${selected},” which belongs to ${chosen[0]} (${chosen[1]} / ${romaji[chosen[0]]}). ${q.c[0]} (${q.c[1]} / ${romaji[q.c[0]]}) means “${correct}.” +5 XP for learning.`};nextQuestion.disabled=false;touchStudy()}
const rewardBadges=()=>[
 {icon:'芽',name:'First Sprout',detail:'Review your first card',unlocked:state.reviewed>=1},
 {icon:'祝',name:'Deck Finisher',detail:'Complete a full deck',unlocked:state.deckCompletions>=1},
 {icon:'知',name:'Word Keeper',detail:'Master 10 cards',unlocked:state.mastered.length>=10},
 {icon:'炎',name:'Steady Flame',detail:'Reach a 3-day streak',unlocked:state.streak>=3},
 {icon:'星',name:'Quiz Star',detail:'Answer 10 correctly',unlocked:state.quizCorrect>=10}
];
function renderStats(){const level=Math.floor(state.xp/100)+1,levelXp=state.xp%100;streakCount.textContent=state.streak;xpCount.textContent=state.xp;todayCount.textContent=Math.min(state.today,10);reviewedStat.textContent=state.reviewed;masteredStat.textContent=state.mastered.length;accuracyStat.textContent=state.quizTotal?Math.round(state.quizCorrect/state.quizTotal*100)+'%':'—';levelStat.textContent=level;xpToNext.textContent=`${100-levelXp} XP to next level`;levelMeter.style.width=`${levelXp}%`;badges.innerHTML=rewardBadges().map(b=>`<article class="badge ${b.unlocked?'unlocked':'locked'}"><span>${b.icon}</span><div><strong>${b.name}</strong><small>${b.unlocked?'Unlocked':b.detail}</small></div></article>`).join('');insightTitle.textContent=state.reviewed?`${state.streak}-day rhythm in progress`:'Begin your first session';insightText.textContent=state.reviewed?`You have reviewed ${state.reviewed} cards and mastered ${state.mastered.length}. Keep the momentum gentle and steady.`:'Review a few cards today to start building your learning rhythm.'}
$$('[data-nav]').forEach(b=>b.onclick=()=>navigate(b.dataset.nav));$$('[data-start]').forEach(b=>b.onclick=makeQuiz);$$('[data-rate]').forEach(b=>b.onclick=()=>rate(b.dataset.rate==='know'));flashcard.onclick=()=>flashcard.classList.toggle('flipped');flashcard.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flashcard.classList.toggle('flipped')}};speakButton.onclick=speakJapanese;shuffleButton.onclick=()=>{studyCards.sort(()=>Math.random()-.5);cardIndex=0;showCard()};nextQuestion.onclick=()=>{if(++quizIndex<quiz.length)showQuestion();else{navigate('progress')}};$$('.chip').forEach(b=>b.onclick=()=>{$$('.chip').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderDecks()});resetProgress.onclick=()=>{if(confirm('Reset all locally saved learning progress?')){Object.assign(state,{reviewed:0,mastered:[],quizCorrect:0,quizTotal:0,today:0,lastStudy:null,streak:0,xp:0,deckCompletions:0});save();renderDecks()}};
loadVoices();if('speechSynthesis'in window)speechSynthesis.onvoiceschanged=loadVoices;
studyAgain.onclick=()=>{celebration.hidden=true;cardIndex=0;showCard()};chooseDeck.onclick=()=>{celebration.hidden=true;navigate('decks')};closeSession.onclick=()=>sessionPicker.hidden=true;$$('[data-session]').forEach(button=>button.onclick=()=>startDeck(pendingDeckId,button.dataset.session));sessionPicker.onclick=event=>{if(event.target===sessionPicker)sessionPicker.hidden=true};dictionarySearch.oninput=event=>renderDictionary(event.target.value);dictionaryResults.onclick=event=>{const entry=event.target.closest('[data-dictionary-deck]');if(entry)openSessionPicker(entry.dataset.dictionaryDeck)};
learnMoreButton.onclick=()=>{const opening=learnMorePanel.hidden;learnMorePanel.hidden=!opening;learnMoreButton.setAttribute('aria-expanded',String(opening));learnMoreButton.querySelector('span').textContent=opening?'−':'＋';if(opening)learnMorePanel.scrollIntoView({behavior:'smooth',block:'nearest'})};
renderDecks();renderStats();
if('serviceWorker'in navigator){
 let refreshing=false;
 navigator.serviceWorker.addEventListener('controllerchange',()=>{if(!refreshing){refreshing=true;location.reload()}});
 navigator.serviceWorker.register('sw.js?v=10',{updateViaCache:'none'}).then(registration=>registration.update());
}
