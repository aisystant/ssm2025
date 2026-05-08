---
title: 'IWE — AI для каждого, у кого есть дело'
description: 'Не просто чат — постоянный коллега, который помнит тебя, твои проекты и твой опыт.'
layout: page
---

<style>
@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=JetBrains+Mono:wght@400;500&display=swap');

.iwe-page {
  --ia: #5B4FE8; --ial: #EEF2FF; --iah: #4740C9;
  --ib: #E5E7EB; --ib2: #F0F0F5;
  --ibgs: #F9FAFB; --ibgsm: #F3F4F6;
  --it: #0A0A0A; --its: #6B7280; --itb: #9CA3AF;
  font-family: var(--vp-font-family-base);
  -webkit-font-smoothing: antialiased;
}

/* HERO */
.iwe-hero { text-align:center; padding:72px 24px 64px; max-width:840px; margin:0 auto; }
.iwe-pill {
  display:inline-flex; align-items:center; gap:8px;
  background:var(--ial); color:var(--ia);
  padding:6px 16px; border-radius:100px;
  font-size:13px; font-weight:600; margin-bottom:32px;
  border:1px solid #C7D2FE;
}
.iwe-hero h1 {
  font-size:clamp(40px,6vw,72px); font-weight:800;
  line-height:1.05; letter-spacing:-2.5px; margin-bottom:24px;
  border:none; padding:0;
}
.iwe-hero h1 em { font-style:normal; color:var(--ia); }
.iwe-hero-lead {
  font-size:18px; color:var(--its);
  max-width:600px; margin:0 auto 16px; line-height:1.7;
}
.iwe-hero-lead strong { color:var(--it); }
.iwe-hero-sub {
  font-size:15px; color:var(--itb);
  max-width:540px; margin:0 auto 40px; line-height:1.7;
}
.iwe-btns { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; }
.iwe-btn-p {
  background:var(--ia); color:#fff !important;
  padding:13px 28px; border-radius:10px;
  font-size:15px; font-weight:600; text-decoration:none !important;
  box-shadow:0 4px 14px rgba(91,79,232,.3);
  transition:transform .2s,box-shadow .2s,background .2s; display:inline-block;
}
.iwe-btn-p:hover { transform:translateY(-2px); box-shadow:0 8px 22px rgba(91,79,232,.4); background:var(--iah) !important; }
.iwe-btn-s {
  background:transparent; color:var(--it) !important;
  padding:13px 28px; border-radius:10px;
  font-size:15px; font-weight:600; text-decoration:none !important;
  border:1.5px solid var(--ib); transition:border-color .2s,background .2s; display:inline-block;
}
.iwe-btn-s:hover { border-color:var(--its); background:var(--ibgs); }

/* DIVIDER */
.iwe-hr { border:none; border-top:1px solid var(--ib); margin:0; }

/* SECTIONS */
.iwe-section { padding:72px 24px; max-width:1100px; margin:0 auto; }
.iwe-section-bg { background:var(--ibgs); border-top:1px solid var(--ib); border-bottom:1px solid var(--ib); padding:72px 24px; }
.iwe-section-bg > .iwe-inner { max-width:1100px; margin:0 auto; }
.iwe-section-dark { background:var(--it); padding:72px 24px; }
.iwe-section-dark > .iwe-inner { max-width:1100px; margin:0 auto; }
.iwe-lbl { font-size:12px; font-weight:700; text-transform:uppercase; letter-spacing:1.2px; color:var(--ia); margin-bottom:12px; display:block; }
.iwe-stitle { font-size:clamp(26px,3.5vw,44px); font-weight:800; letter-spacing:-1.8px; line-height:1.08; margin-bottom:14px; border:none; padding:0; }
.iwe-sdesc { font-size:17px; color:var(--its); max-width:520px; line-height:1.68; margin-bottom:48px; }

/* WHAT IS IWE */
.iwe-desc-grid { display:grid; grid-template-columns:1fr 1fr; gap:56px; align-items:start; }
@media(max-width:800px){ .iwe-desc-grid { grid-template-columns:1fr; gap:32px; } }
.iwe-desc-text p { font-size:15px; color:var(--its); line-height:1.75; margin-bottom:14px; }
.iwe-desc-text p strong { color:var(--it); }
.iwe-desc-text ul { list-style:none; padding:0; margin:8px 0 0; display:flex; flex-direction:column; gap:9px; }
.iwe-desc-text li { font-size:14px; color:var(--its); display:flex; align-items:flex-start; gap:10px; line-height:1.55; }
.iwe-desc-text li::before { content:''; display:inline-block; width:6px; height:6px; border-radius:50%; background:var(--ia); flex-shrink:0; margin-top:7px; }
.iwe-role-cards { display:flex; flex-direction:column; gap:14px; }
.iwe-rcard { padding:24px 28px; border-radius:16px; background:#fff; border:1.5px solid var(--ib); transition:border-color .2s,transform .2s,box-shadow .2s; }
.iwe-rcard:hover { border-color:var(--ia); transform:translateY(-2px); box-shadow:0 10px 28px rgba(0,0,0,.07); }
.iwe-rcard-icon { font-size:26px; margin-bottom:10px; }
.iwe-rcard h3 { font-size:18px; font-weight:700; letter-spacing:-.4px; margin:0 0 7px; border:none; padding:0; }
.iwe-rcard p { font-size:14px; color:var(--its); line-height:1.6; margin:0; }

/* TABLE */
.iwe-table-wrap { overflow-x:auto; border-radius:14px; border:1.5px solid var(--ib); margin-bottom:16px; }
.iwe-table { width:100%; border-collapse:collapse; }
.iwe-table thead { background:var(--ibgsm); }
.iwe-table th { padding:13px 18px; text-align:left; font-size:13px; font-weight:700; color:var(--its); text-transform:uppercase; letter-spacing:.7px; border-bottom:1.5px solid var(--ib); }
.iwe-table th:not(:first-child) { text-align:center; }
.iwe-table th.hl { color:var(--ia); }
.iwe-table td { padding:13px 18px; font-size:14px; border-bottom:1px solid var(--ib2); vertical-align:middle; }
.iwe-table tr:last-child td { border-bottom:none; }
.iwe-table tr:hover td { background:var(--ibgs); }
.iwe-table td:not(:first-child) { text-align:center; }
.iwe-table td:first-child { font-weight:500; color:var(--it); }
.iwe-ch { color:var(--ia); font-size:17px; font-weight:700; }
.iwe-dash { color:var(--ib); font-size:18px; font-weight:300; }
.iwe-part { display:inline-block; font-size:11px; font-weight:600; background:#FEF3C7; color:#92400E; padding:3px 8px; border-radius:100px; }
.iwe-table-note { font-size:14px; color:var(--its); line-height:1.65; background:var(--ibgs); border:1px solid var(--ib); border-radius:10px; padding:14px 18px; }

/* TABS */
.iwe-tab-row { display:flex; gap:4px; border-bottom:2px solid var(--ib); margin-bottom:36px; }
.iwe-tab-btn {
  padding:11px 20px; border-radius:8px 8px 0 0;
  font-size:14px; font-weight:600; cursor:pointer;
  border:none; background:transparent; color:var(--its);
  border-bottom:2px solid transparent; margin-bottom:-2px;
  transition:color .15s; font-family:inherit;
}
.iwe-tab-btn:hover { color:var(--it); }
.iwe-tab-btn.active { color:var(--ia); border-bottom-color:var(--ia); }
.iwe-tab-pane { display:none; }
.iwe-tab-pane.active { display:grid; grid-template-columns:1fr 1fr; gap:44px; align-items:start; animation:iwe-fadein .2s; }
@keyframes iwe-fadein { from{opacity:0;transform:translateY(5px)} to{opacity:1;transform:none} }
@media(max-width:700px){ .iwe-tab-pane.active { grid-template-columns:1fr; } }
.iwe-tab-desc h3 { font-size:20px; font-weight:700; letter-spacing:-.4px; margin:0 0 10px; border:none; padding:0; }
.iwe-tab-desc p { font-size:14px; color:var(--its); line-height:1.7; margin:0 0 12px; }
.iwe-tip { margin-top:18px; background:#fff; border:1.5px solid var(--ib); border-radius:10px; padding:16px 18px; font-size:13px; color:var(--its); line-height:1.65; }
.iwe-tip strong { color:var(--it); }
.iwe-tip a,.iwe-step-body a { color:var(--ia); text-decoration:none; font-weight:500; }
.iwe-tip a:hover,.iwe-step-body a:hover { text-decoration:underline; }
.iwe-steps-list { list-style:none; padding:0; margin:0; display:flex; flex-direction:column; }
.iwe-step { display:flex; gap:14px; align-items:flex-start; padding:18px 0; border-bottom:1px solid var(--ib); }
.iwe-step:last-child { border-bottom:none; }
.iwe-step-n { width:30px; height:30px; border-radius:9px; background:var(--ial); color:var(--ia); display:flex; align-items:center; justify-content:center; font-size:13px; font-weight:800; flex-shrink:0; }
.iwe-step-body h4 { font-size:14px; font-weight:700; margin:0 0 4px; border:none; padding:0; }
.iwe-step-body p { font-size:13px; color:var(--its); line-height:1.6; margin:0; }
.iwe-step-body code { font-family:'JetBrains Mono',monospace; background:var(--ial); border:1px solid #C7D2FE; padding:1px 6px; border-radius:5px; font-size:.85em; color:var(--ia); }

/* PHILOSOPHY */
.iwe-phil-grid { display:grid; grid-template-columns:1fr 1fr; gap:16px; }
@media(max-width:600px){ .iwe-phil-grid { grid-template-columns:1fr; } }
.iwe-phil-card { padding:36px; border-radius:18px; background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); transition:background .2s; }
.iwe-phil-card:hover { background:rgba(255,255,255,.08); }
.iwe-phil-icon { font-size:30px; margin-bottom:16px; }
.iwe-phil-card h3 { font-size:20px; font-weight:800; letter-spacing:-.4px; color:#fff; margin:0 0 10px; border:none; padding:0; }
.iwe-phil-card p { font-size:15px; color:rgba(255,255,255,.62); line-height:1.7; margin:0; }

/* FORMATS */
.iwe-fgrid { display:grid; grid-template-columns:1fr 1fr; gap:20px; }
@media(max-width:600px){ .iwe-fgrid { grid-template-columns:1fr; } }
.iwe-fcard { padding:40px; border-radius:20px; }
.iwe-fcard.solo { background:var(--ibgs); border:1.5px solid var(--ib); }
.iwe-fcard.group { background:var(--ia); }
.iwe-fcard h3 { font-size:24px; font-weight:800; letter-spacing:-.8px; margin:0 0 10px; border:none; padding:0; }
.iwe-fcard.group h3 { color:#fff; }
.iwe-fcard > p { font-size:15px; line-height:1.7; margin-bottom:20px; }
.iwe-fcard.solo > p { color:var(--its); }
.iwe-fcard.group > p { color:rgba(255,255,255,.82); }
.iwe-fcard ul { list-style:none; padding:0; margin:0 0 24px; display:flex; flex-direction:column; gap:7px; }
.iwe-fcard li { font-size:13px; display:flex; align-items:flex-start; gap:8px; }
.iwe-fcard.solo li { color:var(--its); }
.iwe-fcard.group li { color:rgba(255,255,255,.8); }
.iwe-fcard li::before { content:'✓'; font-weight:800; flex-shrink:0; }
.iwe-fcard.solo li::before { color:var(--ia); }
.iwe-fcard.group li::before { color:rgba(255,255,255,.9); }
.iwe-fprice { font-size:34px; font-weight:800; letter-spacing:-1.5px; margin-bottom:6px; }
.iwe-fcard.solo .iwe-fprice { color:var(--it); }
.iwe-fcard.group .iwe-fprice { color:#fff; }
.iwe-fprice-note { font-size:12px; margin-bottom:24px; }
.iwe-fcard.solo .iwe-fprice-note { color:var(--itb); }
.iwe-fcard.group .iwe-fprice-note { color:rgba(255,255,255,.5); }
.iwe-btn-w { display:inline-block; background:#fff; color:var(--ia) !important; padding:12px 24px; border-radius:9px; font-size:14px; font-weight:600; text-decoration:none !important; transition:transform .2s,box-shadow .2s; }
.iwe-btn-w:hover { transform:translateY(-1px); box-shadow:0 4px 12px rgba(0,0,0,.15); }
.iwe-btn-ol { display:inline-block; border:1.5px solid var(--ib); color:var(--it) !important; padding:12px 24px; border-radius:9px; font-size:14px; font-weight:600; text-decoration:none !important; transition:border-color .2s; }
.iwe-btn-ol:hover { border-color:var(--its); }
</style>

<div class="iwe-page">

<div class="iwe-hero">
  <div class="iwe-pill">✦ Intellectual Work Environment</div>
  <h1>AI для каждого,<br>у кого есть <em>дело</em></h1>
  <p class="iwe-hero-lead">
    ИИ отлично справляется как эксперт по универсальным вопросам. Но постоянным коллегой, который помнит твой контекст, учится вместе с тобой и растёт в твоих проектах — это <strong>другой продукт и другой подход.</strong>
  </p>
  <p class="iwe-hero-sub">
    IWE — не ещё один чат с ИИ. Помнит твои проекты, замыслы и опыт. Формализует знания по структуре первых принципов. Подбирает мировой опыт под твой контекст.
  </p>
  <div class="iwe-btns">
    <a href="https://t.me/aist_me_bot" class="iwe-btn-p">Начать в Telegram</a>
    <a href="https://claude.ai" class="iwe-btn-s">Подключить в браузере</a>
  </div>
</div>

<hr class="iwe-hr" />

<div class="iwe-section-bg">
<div class="iwe-inner">
  <span class="iwe-lbl">Что такое IWE</span>
  <h2 class="iwe-stitle">Экзоскелет для ума, а не просто чатбот</h2>
  <div class="iwe-desc-grid">
    <div class="iwe-desc-text">
      <p>Со временем IWE будет знать твои дела в определённых деталях даже лучше тебя — но поможет удерживать всё вместе.</p>
      <p><strong>IWE делает четыре вещи одновременно:</strong></p>
      <ul>
        <li>Помнит твои проекты, замыслы и опыт</li>
        <li>Формализует знания по структуре первых принципов</li>
        <li>Подбирает мировой опыт под твой контекст</li>
        <li>Управляет ансамблем ИИ-агентов и людей под задачу</li>
      </ul>
    </div>
    <div class="iwe-role-cards">
      <div class="iwe-rcard">
        <div class="iwe-rcard-icon">🧭</div>
        <h3>Наставник</h3>
        <p>Знает, где ты сейчас застрял в развитии. Подбирает темп, объясняет «зачем» и предлагает следующий шаг исключительно для тебя.</p>
      </div>
      <div class="iwe-rcard">
        <div class="iwe-rcard-icon">🛠️</div>
        <h3>Мастерская</h3>
        <p>Рабочий стол с несколькими ролями под задачу. Здесь учитесь управлять ансамблем ИИ-агентов и людей — главный навык эпохи.</p>
      </div>
    </div>
  </div>
</div>
</div>

<hr class="iwe-hr" />

<div class="iwe-section">
  <span class="iwe-lbl">Доступ к IWE</span>
  <h2 class="iwe-stitle">Чем отличаются интерфейсы</h2>
  <p class="iwe-sdesc">Три самостоятельных входа. Выбирайте любой — или используйте все три.</p>
  <div class="iwe-table-wrap">
    <table class="iwe-table">
      <thead>
        <tr>
          <th>Функция</th>
          <th>💬 Бот</th>
          <th>🌐 Браузер</th>
          <th class="hl">⚡ VS Code</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Чат с ИИ</td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>База знаний МИМ</td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Подписка МИМ</td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Руководства МИМ / Марафон</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Подписка на ИИ (Claude.ai)</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-ch">✓</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Память между сессиями</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-part">частично</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Работа с личными проектами</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-part">частично</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Автономный помощник (план дня и т.п.)</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-dash">—</span></td><td><span class="iwe-ch">✓</span></td></tr>
        <tr><td>Установка на компьютер</td><td><span class="iwe-dash">—</span></td><td><span class="iwe-dash">—</span></td><td><span class="iwe-ch">✓</span></td></tr>
      </tbody>
    </table>
  </div>
  <p class="iwe-table-note">Не нужно выбирать один навсегда. Начни с бота — потом добавь браузер, потом VS Code. Каждый уровень добавляет возможности, а не отменяет предыдущий.</p>
</div>

<hr class="iwe-hr" />

<div class="iwe-section-bg">
<div class="iwe-inner">
  <span class="iwe-lbl">Инструкции подключения</span>
  <h2 class="iwe-stitle">Начните за 5 минут</h2>
  <p class="iwe-sdesc">Выберите удобный способ входа.</p>

  <div class="iwe-tab-row">
    <button class="iwe-tab-btn active" onclick="iweTab('bot',this)">💬 Telegram-бот</button>
    <button class="iwe-tab-btn" onclick="iweTab('browser',this)">🌐 Браузер</button>
    <button class="iwe-tab-btn" onclick="iweTab('vscode',this)">⚡ VS Code</button>
  </div>

  <div id="iwe-tab-bot" class="iwe-tab-pane active">
    <div class="iwe-tab-desc">
      <h3>Telegram-бот — самый простой старт</h3>
      <p>Удобно для заметок в любой момент и старта погружения в системное саморазвитие прямо в мессенджере. Не требует сложных установок. Рекомендуется также для получения платформенных сообщений и бесед с ИИ, обученным системному мышлению.</p>
      <div class="iwe-tip">
        Дальше — спроси бота дословно: <strong>«? Что нужно подключить для полного IWE?»</strong> (знак вопроса вначале). Для полного IWE потребуется подписка: оформи командой <code>/buy</code>.
      </div>
    </div>
    <ol class="iwe-steps-list">
      <li class="iwe-step"><div class="iwe-step-n">1</div><div class="iwe-step-body"><h4>Найди бота в Telegram</h4><p>Открой Telegram и найди <code>@aist_me_bot</code> или перейди по <a href="https://t.me/aist_me_bot" target="_blank">ссылке</a>.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">2</div><div class="iwe-step-body"><h4>Нажми /start</h4><p>Бот возьмёт имя из Telegram и покажет меню. Аккаунт создаётся автоматически.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">3</div><div class="iwe-step-body"><h4>Привяжи аккаунт Aisystant</h4><p>Введи команду <code>/link</code> — бот найдёт твой аккаунт автоматически или пришлёт ссылку для входа.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">4</div><div class="iwe-step-body"><h4>Запусти Марафон</h4><p>Введи <code>/learn</code> — бесплатный старт без подписки.</p></div></li>
    </ol>
  </div>

  <div id="iwe-tab-browser" class="iwe-tab-pane">
    <div class="iwe-tab-desc">
      <h3>Браузер — полная среда без установки</h3>
      <p>Удобно вне рабочего места — на телефоне, в дороге, на чужом компьютере. Стратегические сессии и общение с ИИ фиксируются в твоей базе знаний, включая личные проекты. Освоение программ МИМ через персональные руководства, которые можно сразу применять в работе.</p>
      <div class="iwe-tip">
        Дальше — спроси Claude: <strong>«Как мне развиваться дальше?»</strong> или <strong>«Создай для меня персональное руководство по личному развитию, включая IWE»</strong>. Claude запустит программу «Личное развитие» через твоё персональное руководство в Projects.
      </div>
    </div>
    <ol class="iwe-steps-list">
      <li class="iwe-step"><div class="iwe-step-n">1</div><div class="iwe-step-body"><h4>Войди на Claude.ai</h4><p>Войди или зарегистрируйся на <a href="https://claude.ai" target="_blank">claude.ai</a>.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">2</div><div class="iwe-step-body"><h4>Открой настройки коннекторов</h4><p>Перейди в <a href="https://claude.ai/settings/connectors" target="_blank">Настройки → Connectors</a> и нажми «Add custom connector».</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">3</div><div class="iwe-step-body"><h4>Введи параметры Aisystant</h4><p>Name: <code>Aisystant</code><br>Remote MCP server URL: <code>https://mcp.aisystant.com/mcp</code></p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">4</div><div class="iwe-step-body"><h4>Подключись</h4><p>Нажми Add, затем Connect и пройди верификацию. Готово.</p></div></li>
    </ol>
  </div>

  <div id="iwe-tab-vscode" class="iwe-tab-pane">
    <div class="iwe-tab-desc">
      <h3>VS Code + Claude Code — среда для серьёзной работы</h3>
      <p>Полная среда у тебя на компьютере — накопление знаний, формализация опыта, персональные руководства МИМ, автономные агенты. Лучший выбор для системного развития. Нужен аккаунт GitHub (бесплатно), в котором хранится твоя личная база знаний, включая стратегию и проекты.</p>
      <div class="iwe-tip">
        💡 Открой второй экран с <a href="https://claude.ai" target="_blank">claude.ai</a> — спрашивай там всё непонятное в процессе установки.
      </div>
    </div>
    <ol class="iwe-steps-list">
      <li class="iwe-step"><div class="iwe-step-n">1</div><div class="iwe-step-body"><h4>Создай аккаунт GitHub</h4><p>Если нет — зарегистрируйся на <a href="https://github.com" target="_blank">github.com</a> (бесплатно). Там будет храниться твоя личная база знаний.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">2</div><div class="iwe-step-body"><h4>Следуй полной инструкции</h4><p>Открой <a href="https://github.com/TserenTserenov/FMT-exocortex-template/blob/main/docs/SETUP-GUIDE.md" target="_blank">инструкцию на GitHub</a> — от установки до первого запуска. Занимает около 15 минут.</p></div></li>
      <li class="iwe-step"><div class="iwe-step-n">3</div><div class="iwe-step-body"><h4>Запусти IWE</h4><p>После установки — первый запуск и полный доступ к автономному агенту, памяти и всем возможностям IWE.</p></div></li>
    </ol>
  </div>
</div>
</div>

<hr class="iwe-hr" />

<div class="iwe-section-dark">
<div class="iwe-inner">
  <span class="iwe-lbl" style="color:rgba(255,255,255,.4)">Почему это больше, чем инструмент</span>
  <h2 class="iwe-stitle" style="color:#fff;margin-bottom:40px">Новый вид отношений с ИИ</h2>
  <div class="iwe-phil-grid">
    <div class="iwe-phil-card">
      <div class="iwe-phil-icon">🤝</div>
      <h3>Сотворец</h3>
      <p>Ты вкладываешь опыт, проекты и замыслы — IWE возвращает структуру и ясность. Растёте вместе. Со временем IWE становится частью тебя.</p>
    </div>
    <div class="iwe-phil-card">
      <div class="iwe-phil-icon">🌐</div>
      <h3>Аватар в сети</h3>
      <p>Ты не один, а в сообществе системных созидателей. IWE соединяет людей с одинаковой культурой работы и жизни в эпоху ИИ.</p>
    </div>
  </div>
</div>
</div>

<hr class="iwe-hr" />

<div class="iwe-section">
  <span class="iwe-lbl">Форматы участия</span>
  <h2 class="iwe-stitle">Освоить самому или вместе?</h2>
  <p class="iwe-sdesc">Два формата — один путь. Выберите подходящий старт.</p>
  <div class="iwe-fgrid">
    <div class="iwe-fcard solo">
      <h3>Самостоятельно</h3>
      <p>Персональное руководство, свой темп. ИИ подстраивает среду под тебя с первого дня.</p>
      <ul>
        <li>Персональное руководство по IWE</li>
        <li>Доступ в сообщество IWE (120+ чел.)</li>
        <li>Видеосеминар об IWE</li>
        <li>ИИ-наставник с первого дня</li>
      </ul>
      <div class="iwe-fprice">5 000 ₽</div>
      <p class="iwe-fprice-note">Навсегда — через покупку видеосеминара об IWE</p>
      <a href="https://t.me/aist_me_bot?start=seminar_SE-2026.2-T-sem" class="iwe-btn-ol">Купить и начать →</a>
    </div>
    <div class="iwe-fcard group">
      <h3>Группа с наставником</h3>
      <p>Встреча с наставником раз в неделю, общий чат участников, совместный темп и обратная связь.</p>
      <ul>
        <li>Еженедельные встречи с наставником</li>
        <li>Групповой чат участников</li>
        <li>Совместный темп обучения</li>
        <li>Доступ в сообщество включён</li>
      </ul>
      <div class="iwe-fprice">По запросу</div>
      <p class="iwe-fprice-note">Уточните условия и расписание</p>
      <a href="https://system-school.ru/programs/intro#schedule" class="iwe-btn-w">Узнать о группе →</a>
    </div>
  </div>
</div>

</div>

<script>
function iweTab(id, btn) {
  document.querySelectorAll('.iwe-tab-pane').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.iwe-tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('iwe-tab-' + id).classList.add('active');
  btn.classList.add('active');
}
</script>
