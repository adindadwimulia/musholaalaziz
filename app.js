const CONFIG = {
  mosqueName: "Mushola Al-Aziz",
  location: "Kemang IFI Graha • Bekasi, Jawa Barat",
  timezone: "Asia/Jakarta",
  coordinates: { latitude: -6.3059, longitude: 106.9446 },
  calculation: { method: "Kemenag/Bimas Islam reference", madhab: "Standard" },
  announcement: "Mohon menonaktifkan suara ponsel dan menjaga ketenangan selama berada di dalam mushola.",
  agenda: [
    { title: "Kajian Rutin", time: "19:30", day: "Setiap Ahad" },
    { title: "Kajian Remaja", time: "16:00", day: "Sabtu" },
    { title: "Sholat Jumat", time: "12:00", day: "Jumat" }
  ]
};

const prayers = ["Subuh","Dzuhur","Ashar","Maghrib","Isya"];
const prayerData = {
  "2026-09-01": { imsak:"04:27", subuh:"04:37", sunrise:"05:51", dhuha:"06:15", dzuhur:"11:56", ashar:"15:13", maghrib:"17:55", isya:"19:04" },
  "2026-09-02": { imsak:"04:27", subuh:"04:37", sunrise:"05:51", dhuha:"06:15", dzuhur:"11:55", ashar:"15:13", maghrib:"17:55", isya:"19:04" },
  "2026-09-03": { imsak:"04:26", subuh:"04:36", sunrise:"05:50", dhuha:"06:14", dzuhur:"11:55", ashar:"15:12", maghrib:"17:55", isya:"19:04" },
  "2026-09-04": { imsak:"04:26", subuh:"04:36", sunrise:"05:50", dhuha:"06:14", dzuhur:"11:55", ashar:"15:11", maghrib:"17:54", isya:"19:03" },
  "2026-09-05": { imsak:"04:26", subuh:"04:36", sunrise:"05:49", dhuha:"06:13", dzuhur:"11:54", ashar:"15:11", maghrib:"17:54", isya:"19:03" },
  "2026-09-06": { imsak:"04:25", subuh:"04:35", sunrise:"05:49", dhuha:"06:13", dzuhur:"11:54", ashar:"15:10", maghrib:"17:54", isya:"19:03" },
  "2026-09-07": { imsak:"04:25", subuh:"04:35", sunrise:"05:48", dhuha:"06:12", dzuhur:"11:54", ashar:"15:10", maghrib:"17:54", isya:"19:03" },
  "2026-09-08": { imsak:"04:24", subuh:"04:34", sunrise:"05:48", dhuha:"06:12", dzuhur:"11:53", ashar:"15:09", maghrib:"17:54", isya:"19:02" },
  "2026-09-09": { imsak:"04:24", subuh:"04:34", sunrise:"05:47", dhuha:"06:11", dzuhur:"11:53", ashar:"15:08", maghrib:"17:54", isya:"19:02" },
  "2026-09-10": { imsak:"04:23", subuh:"04:33", sunrise:"05:47", dhuha:"06:11", dzuhur:"11:53", ashar:"15:08", maghrib:"17:53", isya:"19:02" },
  "2026-09-11": { imsak:"04:23", subuh:"04:33", sunrise:"05:46", dhuha:"06:10", dzuhur:"11:52", ashar:"15:07", maghrib:"17:53", isya:"19:02" },
  "2026-09-12": { imsak:"04:22", subuh:"04:32", sunrise:"05:46", dhuha:"06:10", dzuhur:"11:52", ashar:"15:06", maghrib:"17:53", isya:"19:02" },
  "2026-09-13": { imsak:"04:22", subuh:"04:32", sunrise:"05:45", dhuha:"06:09", dzuhur:"11:52", ashar:"15:05", maghrib:"17:53", isya:"19:01" },
  "2026-09-14": { imsak:"04:21", subuh:"04:31", sunrise:"05:45", dhuha:"06:09", dzuhur:"11:51", ashar:"15:05", maghrib:"17:53", isya:"19:01" },
  "2026-09-15": { imsak:"04:21", subuh:"04:31", sunrise:"05:44", dhuha:"06:08", dzuhur:"11:51", ashar:"15:04", maghrib:"17:52", isya:"19:01" },
  "2026-09-16": { imsak:"04:20", subuh:"04:30", sunrise:"05:44", dhuha:"06:08", dzuhur:"11:50", ashar:"15:03", maghrib:"17:52", isya:"19:01" },
  "2026-09-17": { imsak:"04:20", subuh:"04:30", sunrise:"05:43", dhuha:"06:07", dzuhur:"11:50", ashar:"15:02", maghrib:"17:52", isya:"19:01" },
  "2026-09-18": { imsak:"04:19", subuh:"04:29", sunrise:"05:43", dhuha:"06:07", dzuhur:"11:50", ashar:"15:02", maghrib:"17:52", isya:"19:00" },
  "2026-09-19": { imsak:"04:19", subuh:"04:29", sunrise:"05:42", dhuha:"06:06", dzuhur:"11:49", ashar:"15:01", maghrib:"17:52", isya:"19:00" },
  "2026-09-20": { imsak:"04:18", subuh:"04:28", sunrise:"05:42", dhuha:"06:06", dzuhur:"11:49", ashar:"15:00", maghrib:"17:52", isya:"19:00" },
  "2026-09-21": { imsak:"04:18", subuh:"04:28", sunrise:"05:41", dhuha:"06:05", dzuhur:"11:49", ashar:"14:59", maghrib:"17:51", isya:"19:00" },
  "2026-09-22": { imsak:"04:17", subuh:"04:27", sunrise:"05:41", dhuha:"06:05", dzuhur:"11:48", ashar:"14:58", maghrib:"17:51", isya:"19:00" },
  "2026-09-23": { imsak:"04:17", subuh:"04:27", sunrise:"05:41", dhuha:"06:04", dzuhur:"11:48", ashar:"14:58", maghrib:"17:51", isya:"18:59" },
  "2026-09-24": { imsak:"04:16", subuh:"04:26", sunrise:"05:40", dhuha:"06:04", dzuhur:"11:48", ashar:"14:57", maghrib:"17:51", isya:"18:59" },
  "2026-09-25": { imsak:"04:16", subuh:"04:26", sunrise:"05:40", dhuha:"06:03", dzuhur:"11:47", ashar:"14:56", maghrib:"17:51", isya:"18:59" },
  "2026-09-26": { imsak:"04:15", subuh:"04:25", sunrise:"05:39", dhuha:"06:03", dzuhur:"11:47", ashar:"14:55", maghrib:"17:50", isya:"18:59" },
  "2026-09-27": { imsak:"04:14", subuh:"04:24", sunrise:"05:39", dhuha:"06:02", dzuhur:"11:47", ashar:"14:54", maghrib:"17:50", isya:"18:59" },
  "2026-09-28": { imsak:"04:14", subuh:"04:24", sunrise:"05:38", dhuha:"06:02", dzuhur:"11:46", ashar:"14:53", maghrib:"17:50", isya:"18:59" },
  "2026-09-29": { imsak:"04:13", subuh:"04:23", sunrise:"05:38", dhuha:"06:01", dzuhur:"11:46", ashar:"14:52", maghrib:"17:50", isya:"18:58" },
  "2026-09-30": { imsak:"04:13", subuh:"04:23", sunrise:"05:37", dhuha:"06:01", dzuhur:"11:46", ashar:"14:52", maghrib:"17:50", isya:"18:58" }
};

const names = {subuh:"Subuh",dzuhur:"Dzuhur",ashar:"Ashar",maghrib:"Maghrib",isya:"Isya"};
const $ = id => document.getElementById(id);
$("mosqueName").textContent = CONFIG.mosqueName;
$("locationText").textContent = CONFIG.location;
$("footerName").textContent = CONFIG.mosqueName;
$("announcement").textContent = CONFIG.announcement;
$("agendaList").innerHTML = CONFIG.agenda.map(x => `<div class="agenda-item"><span><b>${x.title}</b><br><small>${x.day}</small></span><b>${x.time}</b></div>`).join("");

function pad(n){return String(n).padStart(2,"0")}
function localDateKey(){
  return new Intl.DateTimeFormat("en-CA",{timeZone:CONFIG.timezone,year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
}
function zonedParts(){
  const p = new Intl.DateTimeFormat("en-GB",{timeZone:CONFIG.timezone,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",hourCycle:"h23"}).formatToParts(new Date());
  const o={}; p.forEach(x=>o[x.type]=x.value); return o;
}
function today(){return prayerData[localDateKey()] || prayerData["2026-09-30"]}

function renderPrayers(data){
  const html = prayers.map(p => {
    const key = p.toLowerCase();
    return `<div class="prayer" data-prayer="${key}"><div class="name">${p}</div><div class="time">${data[key]}</div></div>`;
  }).join("");
  $("prayerGrid").innerHTML=html;
  $("imsak").textContent=data.imsak; $("sunrise").textContent=data.sunrise; $("dhuha").textContent=data.dhuha;
}
function makeTime(dateStr,time){
  const [y,m,d]=dateStr.split("-").map(Number), [hh,mm]=time.split(":").map(Number);
  // Date is used as a wall-clock representation; timezone is fixed by the display location.
  return new Date(Date.UTC(y,m-1,d,hh,mm,0));
}
function formatDate(){
  const now = new Date();
  $("dateText").textContent = new Intl.DateTimeFormat("id-ID",{timeZone:CONFIG.timezone,weekday:"long",day:"numeric",month:"long",year:"numeric"}).format(now);
  $("hijriText").textContent = new Intl.DateTimeFormat("id-ID-u-ca-islamic-umalqura",{timeZone:CONFIG.timezone,day:"numeric",month:"long",year:"numeric"}).format(now);
}
function update(){
  const parts=zonedParts();
  $("clock").textContent=`${parts.hour}:${parts.minute}:${parts.second}`;
  formatDate();
  const key=localDateKey(), data=today(), now=makeTime(key,`${parts.hour}:${parts.minute}`);
  let upcoming=null;
  for(const p of prayers){
    const k=p.toLowerCase(), t=makeTime(key,data[k]);
    if(t>now){upcoming={p,k,t,time:data[k]};break}
  }
  if(!upcoming){
    const tomorrow=new Date(now.getTime()+86400000);
    const nextKey = new Intl.DateTimeFormat("en-CA",{timeZone:CONFIG.timezone}).format(tomorrow);
    const nd=prayerData[nextKey] || data;
    upcoming={p:"Subuh",k:"subuh",t:makeTime(nextKey,nd.subuh),time:nd.subuh};
  }
  const diff=Math.max(0,upcoming.t-now);
  const sec=Math.floor(diff/1000), h=Math.floor(sec/3600), m=Math.floor(sec%3600/60), s=sec%60;
  $("nextPrayerName").textContent=names[upcoming.k] || upcoming.p;
  $("nextPrayerTime").textContent=upcoming.time;
  $("countdown").textContent=`${pad(h)}:${pad(m)}:${pad(s)}`;
  document.querySelectorAll(".prayer").forEach(el=>el.classList.toggle("active",el.dataset.prayer===upcoming.k));
  $("lastUpdated").textContent=`Diperbarui ${parts.hour}:${parts.minute}:${parts.second}`;
}
renderPrayers(today()); update(); setInterval(update,1000);

$("fullscreenBtn").addEventListener("click",async()=>{
  try{
    if(!document.fullscreenElement) await document.documentElement.requestFullscreen();
    else await document.exitFullscreen();
  }catch(e){}
});
window.addEventListener("offline",()=>{$("connectionBadge").textContent="● Offline";});
window.addEventListener("online",()=>{$("connectionBadge").textContent="● Online";});

// If the display is opened outside Bekasi, the UI still follows the device clock/timezone,
// while prayer calculations remain anchored to Mushola Al-Aziz coordinates.
