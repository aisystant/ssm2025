---
layout: products
title: 'Быстрая покупка'
description: 'Быстрая покупка всех продуктов Мастерской инженеров-менеджеров: подписка «Инженерия интеллекта», программы личного, рабочего и исследовательского развития.'
subtitle: ''

products:
  -
    title: 'Подписка «Инженерия интеллекта»'
    items:
      -
        name: 'Подписка 1 месяц'
        price: '{{ data.subscription.1m.price }}'
        text: ''
        paylink:
          rus: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 3 месяца'
        price: '{{ data.subscription.3m.price }}'
        text: '({{ data.subscription.3m.month }} руб / мес)'
        paylink:
          rus: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 6 месяцев'
        price: '{{ data.subscription.6m.price }}'
        text: '({{ data.subscription.6m.month }} руб / мес)'
        paylink:
          rus: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 12 месяцев'
        price: '{{ data.subscription.12m.price }}'
        text: '({{ data.subscription.12m.month }} руб / мес)'
        paylink:
          rus: 'https://aisystant.system-school.ru/lk/#/buy/email'
    more:
      name: 'Подробнее о подписке'
      link: '/open-endedness'

  -
    title: 'Марафон: От расфокуса к результатам за 2 недели'
    more:
      name: 'Подробнее о марафоне'
      link: '/intro-marathon'

  -
    title: 'Серия семинаров FPF + SPF'
    items:
      -
        name: 'Вся серия FPF + SPF (5 семинаров)'
        text: 'Цена с 06.07 — 60 000 ₽'
        price: '44&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
      -
        name: 'FPF-1. Минимум FPF-грамотности: как направлять рабочие ходы AI-агента в&nbsp;проекте'
        text: 'Цена с 06.07 — 14 000 ₽'
        price: '12&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
      -
        name: 'FPF-2. Какие ходы решают судьбу проекта: архитектурное мышление, когда системного уже мало'
        text: 'Цена с 06.07 — 14 000 ₽'
        price: '12&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
      -
        name: 'FPF-3. От проблемной ситуации к выполненной работе: как собрать рабочий процесс'
        text: 'Цена с 06.07 — 14 000 ₽'
        price: '12&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
      -
        name: 'FPF-4. Точность языка: как слова вроде "готово", "качество" и "согласовано" срывают планы'
        text: 'Цена с 06.07 — 14 000 ₽'
        price: '12&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
      -
        name: 'FPF-5. Свой SPF: как дать AI-агенту правила вашей работы'
        text: 'Цена с 06.07 — 14 000 ₽'
        price: '12&nbsp;000&nbsp;₽'
        paylink:
          rus: 'tg://resolve?domain=SystemsSchool_bot'
    text:
      - '5 практикумов с <a href="/team/levenchuk">Анатолием Левенчуком</a> о&nbsp;том, как использовать FPF и SPF для&nbsp;работы с&nbsp;AI-агентами: от&nbsp;минимальной FPF-грамотности до&nbsp;предметных регламентов под&nbsp;свою работу.'
      - 'Можно купить отдельный семинар или всю серию пакетом. Оплата проходит через Telegram-бот МИМ. По&nbsp;вопросам оплаты или доступа пишите <a href="tg://resolve?domain=Gelya1848">@Gelya1848</a>.'

  -
    title: 'Записи прошедших семинаров'
    more:
      name: 'Выбрать семинар'
      link: 'https://events.system-school.ru/'
      target: '_blank'

  -
    title: 'Программа «Личное развитие»'
    items:
      -
        name: '{{ data.selfdev1.name }}'
        text: '{{ data.selfdev1.date }}'
        price: '{{ data.selfdev1.price }}'
        paylink:
          rus: '{{ data.selfdev1.pay_rus }}'
          foreign: '{{ data.selfdev1.pay_foreign }}'
      -
        name: '{{ data.selfdev2.name }}'
        text: '{{ data.selfdev2.date }}'
        price: '{{ data.selfdev2.price }}'
        paylink:
          rus: '{{ data.selfdev2.pay_rus }}'
          foreign: '{{ data.selfdev2.pay_foreign }}'
      -
        name: '{{ data.selfdev3.name }}'
        text: '{{ data.selfdev3.date }}'
        price: '{{ data.selfdev3.price }}'
        paylink:
          rus: '{{ data.selfdev3.pay_rus }}'
          foreign: '{{ data.selfdev3.pay_foreign }}'
      -
        name: 'Мастерская по практикам саморазвития'
        text: ''
        price: '5000'
        paylink:
          rus: 'https://yookassa.ru/my/i/aVLkSOCQB0Yj/l'
          foreign: 'https://kassa.payanyway.ru/1764775294073991'
      -
        name: '{{ data.selfdev4.name }}'
        text: '{{ data.selfdev4.date }}'
        price: '{{ data.selfdev4.price }}'
        paylink:
          rus: '{{ data.selfdev4.pay_rus }}'
          foreign: '{{ data.selfdev4.pay_foreign }}'
    more:
      name: 'Подробнее о программе'
      link: '/programs/intro'

  -
    title: 'Программа «Рабочее развитие»'
    items:
      -
        name: '{{ data.workdev1.name }}'
        text: '{{ data.workdev1.date }}'
        price: '{{ data.workdev1.price }}'
        paylink:
          rus: '{{ data.workdev1.pay_rus }}'
          foreign: '{{ data.workdev1.pay_foreign }}'
      -
        name: '{{ data.workdev2.name }}'
        text: '{{ data.workdev2.date }}'
        price: '{{ data.workdev2.price }}'
        paylink:
          rus: '{{ data.workdev2.pay_rus }}'
          foreign: '{{ data.workdev2.pay_foreign }}'
      -
        name: '{{ data.workdev3.name }}'
        text: '{{ data.workdev3.date }}'
        price: '{{ data.workdev3.price }}'
        paylink:
          rus: '{{ data.workdev3.pay_rus }}'
          foreign: '{{ data.workdev3.pay_foreign }}'
      -
        name: '{{ data.workdev4.name }}'
        text: '{{ data.workdev4.date }}'
        price: '{{ data.workdev4.price }}'
        paylink:
          rus: '{{ data.workdev4.pay_rus }}'
          foreign: '{{ data.workdev4.pay_foreign }}'
      -
        name: '{{ data.workdev5.name }}'
        text: '{{ data.workdev5.date }}'
        price: '{{ data.workdev5.price }}'
        paylink:
          rus: '{{ data.workdev5.pay_rus }}'
          foreign: '{{ data.workdev5.pay_foreign }}'
      -
        name: '{{ data.workdev6.name }}'
        text: '{{ data.workdev6.date }}'
        price: '{{ data.workdev6.price }}'
        paylink:
          rus: '{{ data.workdev6.pay_rus }}'
          foreign: '{{ data.workdev6.pay_foreign }}'
      -
        name: '{{ data.workdev7.name }}'
        text: '{{ data.workdev7.date }}'
        price: '{{ data.workdev7.price }}'
        paylink:
          rus: '{{ data.workdev7.pay_rus }}'
          foreign: '{{ data.workdev7.pay_foreign }}'
      -
        name: '{{ data.workdev8.name }}'
        text: '{{ data.workdev8.date }}'
        price: '{{ data.workdev8.price }}'
        paylink:
          rus: '{{ data.workdev8.pay_rus }}'
          foreign: '{{ data.workdev8.pay_foreign }}'
      -
        name: '{{ data.workdev9.name }}'
        text: '{{ data.workdev9.date }}'
        price: '{{ data.workdev9.price }}'
        paylink:
          rus: '{{ data.workdev9.pay_rus }}'
          foreign: '{{ data.workdev9.pay_foreign }}'
      -
        name: '{{ data.workdev10.name }}'
        text: '{{ data.workdev10.date }}'
        price: '{{ data.workdev10.price }}'
        paylink:
          rus: '{{ data.workdev10.pay_rus }}'
          foreign: '{{ data.workdev10.pay_foreign }}'
    more:
      name: 'Подробнее о программе'
      link: '/programs/orgdev'

  -
    title: 'Программа «Исследовательское развитие»'
    items:
      -
        name: '{{ data.research1.name }}'
        price: '{{ data.research1.price }}'
        paylink:
          rus: '{{ data.research1.pay_rus }}'
          foreign: '{{ data.research1.pay_foreign }}'
    more:
      name: 'Подробнее о программе'
      link: '/programs/research'
---
