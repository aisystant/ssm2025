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

<div class="iwe-choice">
  <h2>Выбери формат для старта</h2>
  <div class="iwe-paths">
    <div class="iwe-path">
      <div class="step">💬</div>
      <div>
        <h4>Telegram — самый простой старт</h4>
        <p>Не нужно ничего устанавливать. Отправь сообщение — получи персональный маршрут за 5 минут.</p>
        <a href="https://t.me/aist_me_bot" target="_blank">Написать @aist_me_bot →</a>
      </div>
    </div>
    <div class="iwe-path">
      <div class="step">🌐</div>
      <div>
        <h4>Браузер — удобно без установки</h4>
        <p>Открой claude.ai, напиши «Стратег» — и работай с полноценной средой прямо в браузере.</p>
        <a href="https://claude.ai" target="_blank">Открыть claude.ai →</a>
      </div>
    </div>
    <div class="iwe-path">
      <div class="step">⚡</div>
      <div>
        <h4>VS Code — среда для серьёзной работы</h4>
        <p>Git, Claude Code CLI, полный контроль над своим IWE. Для тех, кто хочет максимум.</p>
        <a href="/quick-start">Инструкция по установке →</a>
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
