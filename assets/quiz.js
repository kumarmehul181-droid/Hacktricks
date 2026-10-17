/* SDSA-style quiz engine for Hacktricks — cybersecurity awareness */
// 20 awareness questions (educational, India-relevant)
const QUESTIONS = [
 {q:"Tumhe ek SMS milta hai: 'Aapka bank account block hoga, link par click karke PAN update karo.' Pehla sahi kadam kya hai?",
  o:["Link kholo aur details bharo","Bank ke official number/app se khud verify karo","OTP reply me bhej do","Link ko 10 doston ko forward karo"],a:1,
  why:"Banks kabhi OTP/PAN update ke liye link nahi bhejte. Hamesha official app ya branch se khud verify karo — ye classic phishing hai."},
 {q:"Kisi ne phone pe bola: 'Main bank se bol raha hun, aapka OTP batao warna account freeze ho jayega.' Kya karoge?",
  o:["OTP bata do, bank hai na","OTP kabhi nahi bataunga, call kaat ke bank ko khud call karunga","OTP ka last digit bata do","OTP WhatsApp pe bhej do"],a:1,
  why:"Bank/government kabhi OTP nahi maangti. OTP kisi ko dena = account khaali. Call kaato, official number pe khud verify karo."},
 {q:"Public Wi-Fi (station/cafe) pe kya sabse safe hai?",
  o:["Banking app chalana theek hai","Free Wi-Fi par sab chalega","Sensitive kaam nahi, aur zaroori ho to VPN/mobile data use karo","Sabse tez wala network chun lo"],a:2,
  why:"Public Wi-Fi par attacker tumhara traffic padh sakta hai (MITM). Sensitive kaam ke liye mobile data ya VPN best hai."},
 {q:"Strong password ka best example kya hai?",
  o:["password123","Mehul@2009","iloveyou","Th7$k!9Lm#qPz2 (long + mix, har jagah alag)"],a:3,
  why:"Lamba + random + alag-alag = strong. Birthdays/names seconds me crack ho jate hain. Password manager use karo."},
 {q:"2FA (two-factor authentication) kya hai aur kyu chahiye?",
  o:["2 alag passwords","Password + OTP/biometric — password leak hone par bhi account safe","SIM swap se bachata hai nahi","Ek anti-virus hai"],a:1,
  why:"2FA me attacker ke paas password hone par bhi dusra factor chahiye. Har important account (email, bank, social) par on karo."},
 {q:"Email me ek attachment hai: 'Salary_Hike_2026.pdf.exe'. Kya karoge?",
  o:["Kholo, salary ki baat hai",".exe hai — ye virus ho sakta hai, delete/spam karo","Reply karke puchho","Google Drive pe upload karo"],a:1,
  why:"Double extension (.pdf.exe) = malware ka classic trick. Email ki email address bhi check karo — domain thoda alag hoga."},
 {q:"Kya kisi ki marzi ke bagair unka Wi-Fi/network crack karna India me legal hai?",
  o:["Haan, seekhne ke liye theek hai","Nahi — IT Act 2000 ke under cyber crime hai, sirf apne systems ya written permission par practice karo","Sirf password simple ho to legal hai","College me to chalta hai"],a:1,
  why:"Bina permission unauthorized access = criminal offence (IT Act 2000/43, BNS cyber sections). Practice apne lab/CTF platforms par karo."},
 {q:"Cyber stalking ya online harassment ka shikan hui? Sabse pehla kadam?",
  o:["Badla lene wali hacking karo","Evidence screenshot karo, block/report karo, cybercrime.gov.in par complaint karo","Ignore karo, aise hi chala jayega","Uske doston ko bhej do"],a:1,
  why:"Revenge hacking bhi crime hai. Evidence + report (cybercrime.gov.in / helpline 1930) hi sahi rasta hai."},
 {q:"USB drive sadak par padi mili. Kya karoge?",
  o:["Computer me laga ke dekho kya hai","Nahi — BadUSB/malware ho sakta hai, use karo hi nahi","Sirf office ke PC me lagao","Photo kheencho aur social media par daalo"],a:1,
  why:"Chhoda USB bhi attack vector hai (Rubber Ducky/BadUSB). Kisi bhi apne device me mat lagao."},
 {q:"Ransomware ne files lock kar di. Sabse important pehla kadam?",
  o:["Ransom pay kar do","Backup se restore karo, system isolate karo, cybercrime report karo","Sab kuch delete kar do","Wait karo khud khul jayenge"],a:1,
  why:"Ransom dene ki guarantee nahi hoti ki data milega. Isolation se fail hone se pehle save karo, backup restore, report karo."},
 {q:"Social engineering ka matlab kya hai?",
  o:["Social media hacking","Logon ko psychologically manipulate karke jaankari nikalna","Ek type ka firewall","Programming ka error"],a:1,
  why:"85%+ breaches ka manavi factor hota hai. Attacker bolta hai 'main IT team se hun' — verify karo, bharosa nahi."},
 {q:"Aapki UPI app me 'screen share' request aa gayi kisi 'customer support' se. Kya karoge?",
  o:["Allow karo, wo help kar rahe hain","Kabhi allow nahi — screen share me OTP/balance dikh jayega, scam hai","Pehle 10 min chalne do","Screenshot leke allow karo"],a:1,
  why:"Screen-share + UPI = digital arrest/refund scams ka common rasta. Genuine support kabhi screen share nahi maangta."},
 {q:"Software ki update notification aa rahi hai (Windows/browser/phone). Best habit?",
  o:["Kabhi install nahi karte, data lagta hai","Jaldi install karo — patches security holes band karte hain","Sirf antivirus update kaafi hai","Updates offline hotे hain to nahi"],a:1,
  why:"Zyadatar attacks purane unpatched software par hote hain. Auto-update on rakho."},
 {q:"Digital arrest scam kya hai? (aaj India me bahut common)",
  o:["Naya govt service hai","Scam: video call par 'police/TRAI' ban ke darao aur paise kaato — fake hai, paisa kabhi nahi transfer karo","Ek cybersecurity course hai","Mobile ka security feature hai"],a:1,
  why:"Real police kabhi video call par paisa verification nahi maangti. Call kaato, kisi ko mat batana, cybercrime.gov.in par complaint karo."},
 {q:"Same password sab jagah use karna kya risk hai?",
  o:["Koi risk nahi","Ek site leak hui to sab accounts compromise — har jagah alag password rakho","Sirf social media ka risk hai","Email ka alag hone se bacha"],a:1,
  why:"Credential stuffing: leak hua ek password, bot usse 100 sites par try karte hain. Unique password + manager = safe."},
 {q:"Deepfake video call me 'relative' paisa maang raha hai. Kya karoge?",
  o:["Paisa bhej do, video me hai na","Known number par khud call karke verify karo — deepfake ho sakta hai","Thoda paisa test me bhej do","Voicemail chhod do"],a:1,
  why:"AI se voice+video fake ban jata hai. Paise se pehle hamesha purane known number par verify karo."},
 {q:"URL check karo: http://paytym-secure.in.net/login — ye kaisa hai?",
  o:["Theek hai, Paytm jaisa hai","Phishing — spelling galat (paytym), http hai, .in.in par hai — fake domain","Official hai kyuki 'secure' likha hai","Mobile pe safe hai"],a:1,
  why:"Domain spelling, https aur exact brand name check karo. Fake domains ek-do letter alag rakhte hain."},
 {q:"Apna phone kho gaya. Sabse pehla kadam?",
  o:["Kuch nahi, naya khareed lunga","CEIR portal (sancharsaathi.gov.in) se block karo, bank ko batao, FIR/sim block karo","Sirf WhatsApp block karo","Din bhar wait karo"],a:1,
  why:"PEHLE SIM block (bank/UPI safe) phir CEIR se phone block. Tez action se misuse roka jaa sakta hai."},
 {q:"Phishing ka sabse bada indicator kya hai email me?",
  o:["Logo achha hai","Galat/misspelled sender address + urgent deadline dar (warna account band)","Email lamba hai","Attachments hain hi nahi"],a:1,
  why:"Sender ka exact address check karo. Urgency + fear + link/attachment = phishing trinity."},
 {q:"OTC 'personal data' (Aadhaar, PAN) kisi app ko dena hai. Best practice?",
  o:["Sab ko do, badi baat nahi","Sirf zaroori — masked Aadhaar (xxxx-xxxx-1234), aur app ki privacy policy dekho","Photo social media pe bhi ok","Sab documents ek hi folder me sab ko bhejo"],a:1,
  why:"Masked Aadhaar + minimum data sharing. Ek leak = identity theft. Documents kabhi public share mat karo."}
];

// ---------- Question of the Day (har visitor ko ek awareness question) ----------
const today = new Date().toISOString().slice(0,10);
const seed = [...today].reduce((s,c)=>s+c.charCodeAt(0),0);
const qotd = QUESTIONS[seed % QUESTIONS.length];
const qotdBox = document.getElementById('qotd');
if (qotdBox) {
  document.getElementById('qotd-q').textContent = qotd.q;
  const optsBox = document.getElementById('qotd-opts');
  qotd.o.forEach((t,i)=>{
    const b=document.createElement('button');b.className='opt';b.textContent=t;
    b.onclick=()=>{
      if(optsBox.dataset.done)return;optsBox.dataset.done='1';
      [...optsBox.children].forEach((c,ci)=>{if(ci===qotd.a)c.classList.add('right');});
      if(i!==qotd.a)b.classList.add('wrong');
      document.getElementById('qotd-why').textContent=(i===qotd.a?'Sahi! ':'Galat. ')+qotd.why;
      document.getElementById('qotd-why').classList.add('show');
    };
    optsBox.appendChild(b);
  });
}

// ---------- Full Quiz (8 random questions) ----------
const pool=[...QUESTIONS];
let quiz=[],idx=0,score=0;
const qBox=document.getElementById('quiz');
function startQuiz(){
  quiz=[...pool].sort(()=>Math.random()-0.5).slice(0,8);idx=0;score=0;renderQ();
}
function renderQ(){
  const q=quiz[idx];
  qBox.innerHTML=`<div class="qbar"><i style="width:${idx/quiz.length*100}%"></i></div>
   <div class="qmeta"><span>Question ${idx+1} / ${quiz.length}</span><span>Score: ${score}</span></div>
   <div class="qtext">${q.q}</div><div class="opts two" id="qo"></div>
   <div class="why" id="qw" style="display:none"></div>
   <div style="margin-top:16px"><button class="btn btn-c" id="nextq" style="display:none">Next →</button></div>`;
  const box=document.getElementById('qo');
  q.o.forEach((t,i)=>{const b=document.createElement('button');b.className='opt';b.textContent=t;
    b.onclick=()=>{if(box.dataset.done)return;box.dataset.done='1';
      [...box.children].forEach((c,ci)=>{if(ci===q.a)c.classList.add('right');});
      if(i===q.a)score++;else b.classList.add('wrong');
      const w=document.getElementById('qw');w.textContent=(i===q.a?'Sahi! ':'Galat. ')+q.why;
      w.style.display='block';w.style.borderLeft='3px solid var(--green)';w.style.paddingLeft='12px';w.style.marginTop='12px';w.style.fontSize='.9rem';w.style.color='var(--muted)';
      const n=document.getElementById('nextq');n.style.display='inline-block';
      n.textContent=idx===quiz.length-1?'Result dekho →':'Next →';
      n.onclick=()=>{idx++;idx<quiz.length?renderQ():renderResult();};
    };box.appendChild(b);});
}
function renderResult(){
  const pct=Math.round(score/quiz.length*100);
  let verdict,color;
  if(pct>=85){verdict='Excellent! Tum apne data aur systems ke liye ek shield ho 🛡️';color='var(--green)';}
  else if(pct>=60){verdict='Achha! Thoda aur practice se top security awareness level aa jayega 💪';color='var(--cyan)';}
  else{verdict='Abhi seekhne ka time hai — har naya sawaal tumhe ek attack se bacha sakta hai 📚';color='var(--amber)';}
  qBox.innerHTML=`<div class="result"><div class="score">${score}/${quiz.length}</div>
   <div style="color:${color};font-size:1.4rem;font-weight:900;margin:4px 0">${pct}%</div>
   <div class="verdict">${verdict}</div>
   <button class="btn btn-c" onclick="startQuiz()">Phir se attempt karo</button>
   <p style="margin-top:14px;font-size:.82rem;color:var(--muted)">Naye questions har baar random aate hain — roz ek naya sawaal upar "Question of the Day" me bhi milta hai.</p></div>`;
}
if(qBox){qBox.innerHTML=`<div class="result"><div style="font-size:2.2rem">🧠</div>
  <h3 style="margin:10px 0 6px">Cybersecurity Awareness Quiz</h3>
  <p style="color:var(--muted);font-size:.92rem;margin-bottom:18px">8 sawaal · har visit me naye · apni awareness ka asli test</p>
  <button class="btn btn-c" onclick="startQuiz()">Quiz Start Karo</button></div>`;}
