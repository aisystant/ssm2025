---
layout: products
title: 'Оплатить продукты'
description: 'Быстрая покупка всех продуктов Мастерской инженеров-менеджеров: подписка «Бесконечное развитие», программы личного, рабочего и исследовательского развития.'
subtitle: 'Мастерской инженеров‑менджеров'

products:
  -
    title: 'Подписка «Бесконечное развитие»'
    items:
      -
        name: 'Подписка 1 месяц'
        price: '{{ data.subscription.1m.price }}'
        text: ''
        link: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 3 месяца'
        price: '{{ data.subscription.3m.price }}'
        text: '({{ data.subscription.3m.month }} руб / мес)'
        link: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 6 месяцев'
        price: '{{ data.subscription.6m.price }}'
        text: '({{ data.subscription.6m.month }} руб / мес)'
        link: 'https://aisystant.system-school.ru/lk/#/buy/email'
      -
        name: 'Подписка 12 месяцев'
        price: '{{ data.subscription.12m.price }}'
        text: '({{ data.subscription.12m.month }} руб / мес)'
        link: 'https://aisystant.system-school.ru/lk/#/buy/email'
    more:
      name: 'Подробнее о подписке'
      link: '/open-endedness'

  -
    title: 'Программа «Личное развитие»'
    items:
      -
        name: '{{ data.selfdev1.name }}'
        text: '{{ data.selfdev1.date }}'
        price: '{{ data.selfdev1.price }}'
        link: '{{ data.selfdev1.paylink }}'
      -
        name: '{{ data.selfdev2.name }}'
        text: '{{ data.selfdev2.date }}'
        price: '{{ data.selfdev2.price }}'
        link: '{{ data.selfdev2.paylink }}'
      -
        name: '{{ data.selfdev3.name }}'
        text: '{{ data.selfdev3.date }}'
        price: '{{ data.selfdev3.price }}'
        link: '{{ data.selfdev3.paylink }}'
      -
        name: 'Мастерская по практикам саморазвития'
        text: ''
        price: '5000'
        link: 'https://yookassa.ru/my/i/aI75LbjLWIYS/l'
      -
        name: '{{ data.selfdev4.name }}'
        text: '{{ data.selfdev4.date }}'
        price: '{{ data.selfdev4.price }}'
        link: '{{ data.selfdev4.paylink }}'
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
        link: '{{ data.workdev1.paylink }}'
      -
        name: '{{ data.workdev2.name }}'
        text: '{{ data.workdev2.date }}'
        price: '{{ data.workdev2.price }}'
        link: '{{ data.workdev2.paylink }}'
      -
        name: '{{ data.workdev3.name }}'
        text: '{{ data.workdev3.date }}'
        price: '{{ data.workdev3.price }}'
        link: '{{ data.workdev3.paylink }}'
      -
        name: 'Разбор/review выявления систем по&nbsp;первому шагу системного промпта'
        text: ''
        price: '10000'
        link: 'https://yookassa.ru/my/i/aI75cHMCgy2U/l'
      -
        name: 'Тренировка — работа с&nbsp;типами «Абсурдная аналогия»'
        text: ''
        price: '10000'
        link: 'https://yookassa.ru/my/i/aI75k7ARv-4k/l'
      -
        name: 'Семинар «First Principles Framework»'
        text: '4 октября'
        price: '10000'
        link: 'https://yookassa.ru/my/i/aMZV6u24_bFV/l'
    more:
      name: 'Подробнее о программе'
      link: '/programs/orgdev'

  -
    title: 'Программа «Исследовательское развитие»'
    items:
      -
        name: '{{ data.research1.name }}'
        price: '{{ data.research1.price }}'
        link: '{{ data.research1.paylink }}'
    more:
      name: 'Подробнее о программе'
      link: '/programs/research'
---
