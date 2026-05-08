---
title: 'IWE — AI для каждого, у кого есть дело'
description: 'Не просто чат — постоянный коллега, который помнит тебя, твои проекты и твой опыт.'
---

<style>
.iwe-hero {
  text-align: center;
  padding: 3rem 1rem 2rem;
}
.iwe-hero h1 {
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
}
.iwe-hook {
  max-width: 640px;
  margin: 0 auto 2.5rem;
  font-size: 1.15rem;
  color: var(--vp-c-text-2);
  line-height: 1.7;
}
.iwe-promise {
  background: var(--vp-c-bg-soft);
  border-left: 4px solid var(--vp-c-brand);
  border-radius: 8px;
  padding: 1.5rem 2rem;
  max-width: 680px;
  margin: 0 auto 3rem;
  text-align: left;
}
.iwe-promise p {
  margin: 0;
  font-size: 1.05rem;
  line-height: 1.75;
  color: var(--vp-c-text-1);
}
.iwe-natures {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  max-width: 760px;
  margin: 0 auto 3rem;
}
@media (max-width: 600px) {
  .iwe-natures { grid-template-columns: 1fr; }
  .iwe-hero h1 { font-size: 1.8rem; }
}
.iwe-nature-card {
  background: var(--vp-c-bg-soft);
  border-radius: 12px;
  padding: 1.5rem;
}
.iwe-nature-card .icon {
  font-size: 2rem;
  margin-bottom: 0.5rem;
}
.iwe-nature-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0.25rem 0 0.5rem;
}
.iwe-nature-card p {
  font-size: 0.95rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0;
}
.iwe-choice {
  max-width: 680px;
  margin: 0 auto 3rem;
}
.iwe-choice h2 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1.5rem;
}
.iwe-paths {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.iwe-path {
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  background: var(--vp-c-bg-soft);
  border-radius: 10px;
  padding: 1.25rem 1.5rem;
}
.iwe-path .step {
  font-size: 1.4rem;
  flex-shrink: 0;
  margin-top: 0.1rem;
}
.iwe-path h4 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.25rem;
}
.iwe-path p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  margin: 0 0 0.5rem;
}
.iwe-path a,
.iwe-steps a,
.iwe-steps-hint a,
.iwe-compare a,
.iwe-promise a,
.iwe-natures a,
.iwe-format-card a:not(.btn) {
  color: #2563eb;
  text-decoration: underline;
  text-underline-offset: 2px;
}
.iwe-path a:hover,
.iwe-steps a:hover,
.iwe-steps-hint a:hover,
.iwe-compare a:hover,
.iwe-promise a:hover,
.iwe-natures a:hover,
.iwe-format-card a:not(.btn):hover { opacity: 0.8; }
.iwe-steps {
  margin: 0.75rem 0 0;
  padding-left: 1.6rem;
  list-style: decimal;
}
.iwe-steps li {
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  line-height: 1.6;
  margin-bottom: 0.7rem;
  padding-left: 0.25rem;
}
.iwe-steps li::marker {
  color: var(--vp-c-brand);
  font-weight: 700;
}
.iwe-steps code {
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  padding: 0.1rem 0.35rem;
  font-size: 0.82rem;
  font-family: var(--vp-font-family-mono);
}
.iwe-steps code.iwe-cmd {
  display: block;
  padding: 0.45rem 0.75rem;
  margin: 0.35rem 0 0;
  font-size: 0.82rem;
  white-space: pre-wrap;
  word-break: break-all;
  border-radius: 6px;
}
.iwe-intro {
  text-align: center;
  max-width: 680px;
  margin: 0 auto 1.5rem;
  color: var(--vp-c-text-2);
  font-size: 1rem;
  line-height: 1.7;
}
.iwe-path-body {
  flex: 1;
}
.iwe-compare {
  max-width: 780px;
  margin: 0 auto 2.5rem;
}
.iwe-compare > h2 {
  text-align: center;
  font-size: 1.4rem;
  margin-bottom: 1.25rem;
}
.iwe-compare-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 0.88rem;
  line-height: 1.5;
}
.iwe-compare-table th,
.iwe-compare-table td {
  padding: 0.6rem 0.85rem;
  border: 1px solid var(--vp-c-divider);
  vertical-align: middle;
}
.iwe-compare-table thead th {
  background: var(--vp-c-bg-soft);
  font-weight: 700;
  text-align: center;
  font-size: 0.95rem;
}
.iwe-ft-col {
  background: var(--vp-c-bg-soft);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--vp-c-text-2);
}
.iwe-yes {
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: #16a34a;
}
.iwe-no {
  text-align: center;
  font-size: 1rem;
  font-weight: 700;
  color: var(--vp-c-text-3);
}
.iwe-partial {
  text-align: center;
  font-size: 0.78rem;
  font-weight: 600;
  color: #ca8a04;
}
.iwe-text {
  text-align: center;
  font-size: 0.82rem;
  color: var(--vp-c-text-1);
  line-height: 1.4;
}
.iwe-compare-legend {
  margin: 1rem 0 0;
  font-size: 0.82rem;
  color: var(--vp-c-text-3);
  line-height: 1.7;
}
@media (max-width: 600px) {
  .iwe-compare-table { font-size: 0.78rem; }
  .iwe-compare-table th, .iwe-compare-table td { padding: 0.45rem 0.55rem; }
}
.iwe-combine-note {
  margin: 1.25rem 0 0;
  font-size: 0.92rem;
  color: var(--vp-c-text-2);
  text-align: center;
  line-height: 1.7;
}
details.iwe-steps-wrap {
  margin: 0.6rem 0 0.8rem;
}
details.iwe-steps-wrap > summary {
  cursor: pointer;
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  list-style: none;
  padding: 0.3rem 0;
  user-select: none;
}
details.iwe-steps-wrap > summary::-webkit-details-marker { display: none; }
details.iwe-steps-wrap > summary::before { content: '▶ '; font-size: 0.7rem; }
details.iwe-steps-wrap[open] > summary::before { content: '▼ '; }
details.iwe-steps-wrap > summary:hover { opacity: 0.75; }
.iwe-steps-hint {
  margin: 0.85rem 0 0;
  padding: 0.85rem 1rem;
  background: var(--vp-c-bg-soft);
  border-left: 3px solid var(--vp-c-brand);
  border-radius: 0 6px 6px 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  line-height: 1.7;
}
.iwe-steps-hint b {
  color: var(--vp-c-text-1);
}
.iwe-steps-hint code {
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  padding: 0.1rem 0.35rem;
  font-size: 0.82rem;
  font-family: var(--vp-font-family-mono);
}
.iwe-section-label {
  text-align: center;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--vp-c-text-3);
  margin-bottom: 0.75rem;
}
.iwe-divider {
  border: none;
  border-top: 1px solid var(--vp-c-divider);
  max-width: 480px;
  margin: 3rem auto;
}
.iwe-cta {
  text-align: center;
  padding: 2.5rem 1rem;
  max-width: 640px;
  margin: 0 auto;
}
.iwe-cta h2 {
  font-size: 1.5rem;
  margin-bottom: 0.75rem;
}
.iwe-cta p {
  color: var(--vp-c-text-2);
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.7;
}
.iwe-formats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem;
  text-align: left;
}
@media (max-width: 500px) {
  .iwe-formats { grid-template-columns: 1fr; }
}
.iwe-format-card {
  border: 1.5px solid var(--vp-c-divider);
  border-radius: 12px;
  padding: 1.5rem;
}
.iwe-format-card.featured {
  border-color: var(--vp-c-brand);
  background: var(--vp-c-bg-soft);
}
.iwe-format-card h3 {
  font-size: 1rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}
.iwe-format-card p {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
  margin: 0 0 1rem;
}
.btn {
  display: inline-block;
  padding: 0.55rem 1.25rem;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-decoration: none;
  transition: opacity 0.15s;
}
.btn:hover { opacity: 0.85; text-decoration: none; }
.btn-primary {
  background: #16a34a;
  color: #fff;
  border: 1.5px solid #16a34a;
}
.btn-outline {
  border: 1.5px solid #16a34a;
  color: #16a34a;
}
</style>

<div class="iwe-hero">
  <h1>AI для каждого,<br>у кого есть дело</h1>
  <div class="iwe-hook">
    ИИ отлично справляется как эксперт по универсальным вопросам.<br>
    Но постоянным коллегой, который помнит твой контекст, учится вместе с тобой
    и растёт в твоих проектах — это другой продукт и другой подход.
  </div>
</div>

<div class="iwe-promise">
  <p>
    <strong>IWE (Intellectual Work Environment) — не ещё один чат с ИИ.</strong><br>
    Помнит твои проекты, замыслы и опыт.
    Формализует знания по структуре первых принципов.
    Подбирает мировой опыт под твой контекст.
    Со временем будет знать твои дела в определённых деталях даже лучше тебя — но поможет удерживать всё вместе.
  </p>
</div>

<div class="iwe-section-label">Что такое IWE</div>

<div class="iwe-natures">
  <div class="iwe-nature-card">
    <div class="icon">🧭</div>
    <h3>Наставник</h3>
    <p>Знает, где ты сейчас застрял в развитии. Подбирает темп, объясняет «зачем» и предлагает следующий шаг исключительно для тебя.</p>
  </div>
  <div class="iwe-nature-card">
    <div class="icon">🛠️</div>
    <h3>Мастерская</h3>
    <p>Рабочий стол с несколькими ролями под задачу. Здесь учитесь управлять ансамблем ИИ-агентов и людей — главный навык эпохи.</p>
  </div>
</div>

<hr class="iwe-divider" />

<div class="iwe-compare">
  <h2>Чем отличаются интерфейсы</h2>
  <p class="iwe-intro">Доступ к IWE — через несколько интерфейсов: Бот, Браузер или VS Code. Каждый — самостоятельный вход.</p>
  <table class="iwe-compare-table">
    <thead>
      <tr>
        <th></th>
        <th>💬 Бот</th>
        <th>🌐 Браузер</th>
        <th>⚡ VS Code</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="iwe-ft-col">Чат с ИИ</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Руководства МИМ</td>
        <td class="iwe-text">Марафон для начинающих</td>
        <td class="iwe-text">Личное развитие</td>
        <td class="iwe-text">Личное развитие</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">База знаний МИМ</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Память между сессиями</td>
        <td class="iwe-no">—</td>
        <td class="iwe-partial">частично</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Работа с личными проектами</td>
        <td class="iwe-no">—</td>
        <td class="iwe-partial">частично</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Автономный помощник (план дня и т.п.)</td>
        <td class="iwe-no">—</td>
        <td class="iwe-no">—</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Подписка МИМ</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Подписка на ИИ (claude.ai)</td>
        <td class="iwe-no">—</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Установка на компьютер</td>
        <td class="iwe-no">—</td>
        <td class="iwe-no">—</td>
        <td class="iwe-yes">✓</td>
      </tr>
    </tbody>
  </table>
  <p class="iwe-combine-note">Не нужно выбирать один навсегда. Начни с бота — потом добавь браузер, потом VS Code.<br>Каждый уровень добавляет возможности, а не отменяет предыдущий.</p>
</div>

<div class="iwe-choice">
<h2>Инструкции для подключения IWE</h2>
<div class="iwe-paths">
<div class="iwe-path">
<div class="step">💬</div>
<div class="iwe-path-body">
<h4>Бот Telegram — самый простой старт</h4>
<p>Удобно для заметок в любой момент и старта погружения в системное саморазвитие прямо в мессенджере. Не требует сложных установок, рекомендуется также для получения платформенных сообщений и бесед с ИИ, обученным системному мышлению.</p>
<details class="iwe-steps-wrap">
<summary>Инструкция</summary>
<ol class="iwe-steps">
<li>Найди в Telegram бота <a href="https://t.me/aist_me_bot" target="_blank"><code>@aist_me_bot</code></a></li>
<li>Нажми <code>/start</code> — бот возьмёт имя из Telegram и покажет меню</li>
<li>Привяжи аккаунт Aisystant командой <code>/link</code> — бот найдёт твой аккаунт автоматически или пришлёт ссылку для входа</li>
<li>Запусти Марафон командой <code>/learn</code> — бесплатный старт без подписки</li>
</ol>
<div class="iwe-steps-hint">Дальше — спроси бота дословно: <b>«? Что нужно подключить для полного IWE?»</b> (знак вопроса вначале). Для полного IWE потребуется подписка: оформи командой <code>/buy</code>.</div>
</details>
</div>
</div>
<div class="iwe-path">
<div class="step">🌐</div>
<div class="iwe-path-body">
<h4>Браузер — полная среда без установки</h4>
<p>Удобно вне рабочего места — на телефоне, в дороге, на чужом компьютере. Стратегические сессии и общение с ИИ, которые фиксируются в твоей базе знаний, включая твои личные проекты. Освоение программ МИМ через персональные руководства, которые можно сразу применять в работе и в своих проектах.</p>
<details class="iwe-steps-wrap">
<summary>Инструкция</summary>
<ol class="iwe-steps">
<li>Войди или зарегистрируйся на <a href="https://claude.ai" target="_blank">claude.ai</a></li>
<li>Открой <a href="https://claude.ai/settings/connectors" target="_blank">Настройки → Connectors</a> → нажми «Add custom connector»</li>
<li>В форме введи: Name — <code>Aisystant</code>, Remote MCP server URL — <code class="iwe-cmd">https://mcp.aisystant.com/mcp</code>. Нажми Add, затем Connect и пройди верификацию.</li>
</ol>
<div class="iwe-steps-hint">Дальше — спроси Claude: <b>«Как мне развиваться дальше?»</b> или <b>«Создай для меня персональное руководство по личному развитию, включая IWE»</b>. Claude запустит программу «Личное развитие» через твоё персональное руководство в Projects. Каждую следующую сессию начинай словом «открывай», заканчивай «закрывай».</div>
</details>
</div>
</div>
<div class="iwe-path">
<div class="step">⚡</div>
<div class="iwe-path-body">
<h4>VS Code + Claude Code — среда для серьёзной работы</h4>
<p>Полная среда у тебя на компьютере — накопление знаний, формализация опыта общения с ИИ в процессе реализации проектов, персональные руководства МИМ, автономные агенты. Лучший выбор для системного развития. Нужен аккаунт GitHub (бесплатно), в котором хранится и развивается твоя личная база знаний, включая стратегию, проекты и т.п.</p>
<details class="iwe-steps-wrap">
<summary>Инструкция</summary>
<ol class="iwe-steps">
<li>Нужны Git, Node.js, GitHub CLI и Claude Code CLI. Уже установлены — переходи к следующему шагу. Нет — <a href="https://github.com/TserenTserenov/FMT-exocortex-template/blob/main/docs/SETUP-GUIDE.md" target="_blank">установи по инструкции</a> (15 мин). 💡 Открой второй экран с <a href="https://claude.ai" target="_blank">claude.ai</a> — копируй туда любые непонятные сообщения из терминала и спрашивай, что делать.</li>
<li>Скопируй шаблон IWE и запусти установку — три команды в терминале по очереди:<code class="iwe-cmd">mkdir -p ~/IWE &amp;&amp; cd ~/IWE</code><code class="iwe-cmd">gh repo fork TserenTserenov/FMT-exocortex-template --clone</code><code class="iwe-cmd">cd FMT-exocortex-template &amp;&amp; bash setup.sh</code></li>
<li>Подключи Aisystant MCP в <a href="https://claude.ai/settings/connectors" target="_blank">claude.ai → Настройки → Connectors</a>: имя <code>Aisystant</code>, URL <code class="iwe-cmd">https://mcp.aisystant.com/mcp</code>. Если уже подключал в браузерном варианте — пропусти этот шаг.</li>
<li>Запусти Claude Code в терминале:<code class="iwe-cmd">cd ~/IWE</code><code class="iwe-cmd">claude</code></li>
</ol>
<div class="iwe-steps-hint">Дальше — спроси Claude: <b>«Проверь все мои подключения IWE и помоги настроить его»</b> или <b>«Создай для меня персональное руководство по личному развитию, включая IWE»</b>. Claude проверит окружение, MCP-подключения, а затем проведёт по программе «Личное развитие». Ежедневный ритм: «открывай» → работа → «закрывай».</div>
</details>
</div>
</div>
</div>
</div>

<hr class="iwe-divider" />

<div class="iwe-section-label">Почему это больше, чем инструмент</div>

<div class="iwe-natures">
  <div class="iwe-nature-card">
    <div class="icon">🤝</div>
    <h3>Сотворец</h3>
    <p>Ты вкладываешь опыт, проекты и замыслы — IWE возвращает структуру и ясность. Растёте вместе. Со временем IWE становится частью тебя.</p>
  </div>
  <div class="iwe-nature-card">
    <div class="icon">🌐</div>
    <h3>Аватар в сети</h3>
    <p>Ты не один, а в сообществе системных созидателей. IWE соединяет людей с одинаковой культурой работы и жизни в эпоху ИИ.</p>
  </div>
</div>

<div class="iwe-cta">
  <h2>Освоить самому или вместе?</h2>
  <p>Два формата — один путь.</p>
  <div class="iwe-formats">
    <div class="iwe-format-card">
      <h3>Самостоятельно</h3>
      <p>Персональное руководство, свой темп. ИИ подстраивает среду под тебя с первого дня.</p>
      <p style="font-size:0.85rem;color:var(--vp-c-text-2);margin:0 0 1rem;">Доступ в сообщество 100+ человек, которые осваивают IWE, — отдельно: <a href="https://system-school.ru/programs/intro" target="_blank">семинар об IWE</a>, 5 000 ₽ навсегда.</p>
      <a href="https://system-school.ru/pricing" class="btn btn-primary">Купить подписку</a>
    </div>
    <div class="iwe-format-card featured">
      <h3>Группа с наставником</h3>
      <p>Встреча с наставником раз в неделю, общий чат участников, совместный темп и обратная связь.<br>Доступ в сообщество включён.</p>
      <a href="https://system-school.ru/programs/intro#schedule" class="btn btn-outline">Узнать о группе</a>
    </div>
  </div>
</div>
