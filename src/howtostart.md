---
layout: starting
title: 'Как начать путь'
pagetitle: 'Как начать путь <small>в Мастерской инженеров‑менеджеров</small>'
description: 'Выбирайте направление развития, изучайте руководства, проходите стажировки и становитесь частью сообщества инженеров-менеджеров.'
og_image: 'open-graph-image-howtostart.png'

image: 'vision.svg'
buttons:
  -
    name: 'О мастерской'
    link: '/about'
    style: 'btn-dark'

registration:
    title: 'Зарегистрируйтесь на&nbsp;платформе'
    button:
        name: 'Aisystant'
        link: 'https://aisystant.system-school.ru/lk/#/auth/signup'

    text: 'И получите доступ ко&nbsp;всем руководствам.'
    image: 'platform.png'

program:
    title: 'Выберите программу обучения'
    items:
      -
        icon: 'self-dev'
        head: 'Если вы хотите изменить себя, свою жизнь и начинать с более простого'
        text: 'Начинайте с личного развития, а потом будет легче осваивать рабочее развитие. Рекомендуется начать с руководства «Системное саморазвитие».'
        link: '/programs/intro'
      -
        icon: 'work-dev'
        head: 'Если вы хотите решать рабочие задачи эффективнее и менять окружение'
        text: 'Идите в рабочее развитие, а если будет сложно, то пройдите личное развитие. Рекомендуется начать с руководства «Рациональная работа».'
        link: '/programs/orgdev'
      -
        icon: 'search-dev'
        head: 'Если вас интересует, как устроен мир и мышление'
        text: 'Тогда вам необходимо исследовательское развитие, но сначала обязательно пройти рабочее развитие.'
        link: '/programs/research'

format:
    title: 'Выберите формат обучения'
    items:
      -
        head: 'Можно попробовать бесплатно'
        name: 'Самостоятельное обучение'
        text: 'Доступ ко всем материалам.<br> Идёшь в своём темпе.'
        price:
          -
            cost: 'от {{ data.subscription.12m.month }} ₽ в месяц'
            text: 'при подписке на год'

        button:
            name: 'Начать самостоятельно'
            link: '/open-endedness'
            style: 'btn-outline'

      -
        style: 'bg-secondary'
        head: 'Более эффективный формат!'
        name: 'Групповое обучение'
        text: 'Еженедельные разборы c наставником, обратная связь, поддержка в сообществе.'
        price:
          -
            cost: 'от 35 000 ₽'
            text: 'на программе «Личное развитие»'
          -
            cost: 'от 150 000 ₽'
            text: 'на программе «Рабочее развитие»'

        button:
            name: 'Начать с наставником'
            link: '/list'
            style: 'btn-dark'

information:
    title: 'Если все еще не понятно, то ознакомьтесь с нашими информационными ресурсами'
    items:
      -
        text: 'Зайдите в наш клуб, чтобы почитать посты участников сообщества:'
        sources:
          -
            icon: 'club'
            name: 'Клуб инженеров‑менеджеров'
            link: 'https://systemsworld.club/'
      -
        text: 'Ознакомьтесь с памятками по нашим программам:'
        sources:
          -
            icon: 'self-dev'
            name: 'Личное развитие'
            link: 'https://systemsworld.club/t/pamyatka-po-programme-lichnogo-razvitiya/25981'
          -
            icon: 'work-dev'
            name: 'Рабочее развитие'
            link: 'https://systemsworld.club/t/pamyatka-po-programme-rabochego-razvitiya-inzhenerov-menedzherov-mim/25895'
          -
            icon: 'search-dev'
            name: 'Исследовательское развитие'
            link: 'https://systemsworld.club/t/pamyatka-po-programme-issledovatelskogo-razvitiya-inzhenerov-menedzherov-mim/25978'

action:
    title: 'Первый шаг – важнейший. Сделай его прямо сейчас.'
    buttons:
      -
        name: 'Присоединиться к группе'
        link: '/list'
        style: 'btn-dark'
      -
        name: 'Начать бесплатно'
        link: '/open-endedness'
        style: 'btn-outline'

    text: 'Доступ ко всем руководствам открыт сразу после регистрации.'
---
