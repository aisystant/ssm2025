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
.iwe-path a {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--vp-c-brand);
  text-decoration: none;
}
.iwe-path a:hover { text-decoration: underline; }
.iwe-steps {
  margin: 0.75rem 0 0;
  padding: 0;
  list-style: none;
  counter-reset: step-counter;
}
.iwe-steps li {
  counter-increment: step-counter;
  display: flex;
  gap: 0.6rem;
  font-size: 0.88rem;
  color: var(--vp-c-text-1);
  line-height: 1.55;
  margin-bottom: 0.5rem;
}
.iwe-steps li::before {
  content: counter(step-counter);
  flex-shrink: 0;
  width: 1.4rem;
  height: 1.4rem;
  background: var(--vp-c-brand);
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: 0.1rem;
}
.iwe-steps code {
  background: var(--vp-c-bg-mute);
  border-radius: 4px;
  padding: 0.1rem 0.35rem;
  font-size: 0.82rem;
  font-family: var(--vp-font-family-mono);
}
.iwe-steps pre {
  background: var(--vp-c-bg-mute);
  border-radius: 6px;
  padding: 0.6rem 0.9rem;
  font-size: 0.8rem;
  font-family: var(--vp-font-family-mono);
  margin: 0.25rem 0 0;
  overflow-x: auto;
  line-height: 1.5;
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
  margin: 0.75rem 0 0;
  font-size: 0.88rem;
  color: var(--vp-c-text-2);
  line-height: 1.6;
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
  background: var(--vp-c-brand);
  color: #fff;
}
.btn-outline {
  border: 1.5px solid var(--vp-c-brand);
  color: var(--vp-c-brand);
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
    <strong>IWE — не ещё один чат с ИИ.</strong><br>
    Помнит твои проекты, замыслы и опыт.
    Формализует знания по структуре первых принципов.
    Подбирает мировой опыт под твой контекст.
    Со временем будет знать твои дела лучше тебя.
  </p>
</div>

<div class="iwe-section-label">Что такое IWE</div>

<div class="iwe-natures">
  <div class="iwe-nature-card">
    <div class="icon">🧭</div>
    <h3>Наставник</h3>
    <p>Знает, где ты сейчас. Подбирает темп, объясняет «зачем» и предлагает следующий шаг — не общий, а твой.</p>
  </div>
  <div class="iwe-nature-card">
    <div class="icon">🛠️</div>
    <h3>Мастерская</h3>
    <p>Рабочий стол с несколькими исполнителями и агентами под задачу. Здесь учатся управлять ансамблем ИИ-агентов и людей — главный навык эпохи.</p>
  </div>
</div>

<hr class="iwe-divider" />

<div class="iwe-compare">
  <h2>Чем отличаются интерфейсы</h2>
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
        <td class="iwe-ft-col">Персональное руководство</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">База знаний Aisystant</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Марафон Aisystant</td>
        <td class="iwe-yes">✓</td>
        <td class="iwe-no">—</td>
        <td class="iwe-no">—</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Память между сессиями</td>
        <td class="iwe-no">—</td>
        <td class="iwe-partial">частично</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Автономный помощник (план дня)</td>
        <td class="iwe-no">—</td>
        <td class="iwe-no">—</td>
        <td class="iwe-yes">✓</td>
      </tr>
      <tr>
        <td class="iwe-ft-col">Подписка МИМ (Aisystant)</td>
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
  <div class="iwe-compare-legend">
    Подписка МИМ = программы Aisystant, сообщество, база знаний.
    Подписка на ИИ = аккаунт claude.ai (Pro или выше).
  </div>
  <p class="iwe-combine-note">Не нужно выбирать один навсегда. Начни с бота — потом добавь браузер, потом VS Code.<br>Каждый уровень добавляет возможности, а не отменяет предыдущий.</p>
</div>

<div class="iwe-choice">
  <h2>Начать с любого:</h2>
  <div class="iwe-paths">

    <div class="iwe-path">
      <div class="step">💬</div>
      <div class="iwe-path-body">
        <h4>Telegram — самый простой старт</h4>
        <p>Не нужно ничего устанавливать. Персональный маршрут за 5 минут.</p>
        <details class="iwe-steps-wrap">
          <summary>Пошаговая инструкция (6 шагов)</summary>
          <ol class="iwe-steps">
            <li>Найди в Telegram: <code>@aist_me_bot</code></li>
            <li>Нажми <code>/start</code> — бот задаст 3–4 вопроса</li>
            <li>Ответь: чем занимаешься, какая цель, сколько часов в неделю</li>
            <li>Получи персональный маршрут — что читать, как практиковать</li>
            <li>Записывай мысли в любое время: начни сообщение с точки → <code>.твоя заметка</code></li>
            <li>Подписка: <code>/subscribe</code> → выбери план</li>
          </ol>
          <div class="iwe-steps-hint">
            Дальше — всё через бота. Спроси: «Что мне изучить следующим?» — получишь следующий шаг по твоему маршруту.
          </div>
        </details>
        <a href="https://t.me/aist_me_bot" target="_blank">Написать @aist_me_bot →</a>
      </div>
    </div>

    <div class="iwe-path">
      <div class="step">🌐</div>
      <div class="iwe-path-body">
        <h4>Браузер — полная среда без установки</h4>
        <p>Подключи базу знаний IWE и работай прямо в claude.ai. Git не нужен.</p>
        <details class="iwe-steps-wrap">
          <summary>Пошаговая инструкция (5 шагов)</summary>
          <ol class="iwe-steps">
            <li>Войди или зарегистрируйся на <a href="https://claude.ai" target="_blank">claude.ai</a></li>
            <li>Подключи базу знаний Aisystant MCP: Настройки → Connectors → Add → <code>https://mcp.aisystant.com/mcp</code></li>
            <li>Создай новый чат → напиши: «Проведём первую стратегическую сессию»</li>
            <li>Claude проведёт 4 шага: цели → неудовлетворённости → план недели → память</li>
            <li>Каждую сессию: начинай «открывай», заканчивай «закрывай» — контекст сохраняется</li>
          </ol>
          <div class="iwe-steps-hint">
            Дальше — продолжай спрашивать Claude в том же чате. Или открой <a href="https://system-school.ru/quick-start">полное руководство</a> для углублённой настройки среды.
          </div>
        </details>
        <a href="https://claude.ai" target="_blank">Открыть claude.ai →</a>
      </div>
    </div>

    <div class="iwe-path">
      <div class="step">⚡</div>
      <div class="iwe-path-body">
        <h4>VS Code + Claude Code — среда для серьёзной работы</h4>
        <p>Полный контроль, накопление знаний на своём компьютере. Нужен аккаунт GitHub (бесплатно) — он хранит твой личный репозиторий стратегии.</p>
        <details class="iwe-steps-wrap">
          <summary>Пошаговая инструкция (7 шагов)</summary>
          <ol class="iwe-steps">
            <li>Установи инструменты: Git, Node.js, GitHub CLI, Claude Code CLI → <a href="https://system-school.ru/quick-start">полное руководство (15 мин)</a></li>
            <li>Скопируй шаблон IWE и запусти установку:<br>
              <code>mkdir -p ~/IWE &amp;&amp; cd ~/IWE</code><br>
              <code>gh repo fork TserenTserenov/FMT-exocortex-template --clone</code><br>
              <code>cd FMT-exocortex-template &amp;&amp; bash setup.sh</code>
            </li>
            <li>Скрипт настроит среду автоматически: CLAUDE.md, память агентов, приватный репозиторий стратегии на GitHub</li>
            <li>Подключи Aisystant MCP: <a href="https://claude.ai/settings/connectors" target="_blank">claude.ai → Настройки → Connectors</a> → Add → <code>https://mcp.aisystant.com/mcp</code></li>
            <li>Перезапусти Claude Code: <code>cd ~/IWE</code>, затем <code>claude</code></li>
            <li>Напиши: «Проведём первую стратегическую сессию»</li>
            <li>Каждый день: «открывай» → работа → «закрывай». Среда накапливает твой контекст в <code>~/IWE/DS-strategy/</code></li>
          </ol>
          <div class="iwe-steps-hint">
            Дальше — погружение через персональное руководство в твоих файлах и диалог с Claude. Полный путь: <a href="https://system-school.ru/quick-start">LEARNING-PATH</a>.
          </div>
        </details>
        <a href="https://system-school.ru/quick-start">Быстрый старт (15 мин) →</a>
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
    <p>Ты вкладываешь опыт, проекты и замыслы — IWE возвращает структуру и ясность. Оба растут вместе. Со временем это становится частью тебя.</p>
  </div>
  <div class="iwe-nature-card">
    <div class="icon">🌐</div>
    <h3>Аватар в сети</h3>
    <p>Ты не один. IWE соединяет созидателей, которые работают рядом. Твой узел — часть сети людей, меняющих мир делом.</p>
  </div>
</div>

<div class="iwe-cta">
  <h2>Освоить самому или вместе?</h2>
  <p>Два формата — один путь.</p>
  <div class="iwe-formats">
    <div class="iwe-format-card">
      <h3>Самостоятельно</h3>
      <p>Персональное руководство, свой темп. Портной подстраивает среду под тебя с первого дня.</p>
      <a href="https://t.me/aist_me_bot" class="btn btn-outline" target="_blank">Начать бесплатно</a>
    </div>
    <div class="iwe-format-card featured">
      <h3>В когорте</h3>
      <p>Встреча с наставником раз в неделю, общий чат участников, совместный темп и обратная связь.</p>
      <a href="https://t.me/aist_me_bot" class="btn btn-primary" target="_blank">Узнать о когорте</a>
    </div>
  </div>
</div>
