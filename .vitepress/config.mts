import { defineConfig } from 'vitepress'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "ru-RU",
    title: "Мастерская инженеров-менеджеров",
    description: "Готовим директоров по развитию, меняющих мир к лучшему",

    // Clean URLs - removes .html suffixes from URLs
    cleanUrls: true,

    // Sitemap configuration
    sitemap: {
        hostname: 'https://system-school.ru'
    },

    themeConfig: {
        siteTitle: "Мастерская инженеров-менеджеров",
        nav: [
            {
                text: "О нас",
                items: [
                    { text: "Коротко о нас", link: "/about" },
                    { text: "Квалификации", link: "/qualification" },
                    { text: "Команда", link: "/team/", activeMatch: "^/team" },
                    { text: "Контакты", link: "/contacts" },
                ],
            },
            {
                text: "Стажировки",
                items: [
                    { text: "Программы", link: "/programs/", activeMatch: "^/programs" },
                    { text: "Расписание", link: "/list" },
                    { text: "Подписка", link: "/open-endedness" },
                ],
            },
            {
                text: "Исследования",
                items: [
                    { text: "О системном мышлении", link: "/articles/what-is-systems-thinking" },
                    { text: "Интеллект-стек и стек практик саморазвития", link: "/stack" },
                    { text: "Новости исследований", link: "https://systemsworld.club/c/issledovaniya/1020", target: "_blank" },
                ],
            },
            {
                text: "Сообщество",
                items: [
                    { text: "Клуб", link: "https://systemsworld.club/", target: "_blank" },
                    { text: "Канал «Личного развития»", link: "https://t.me/self_development_guides", target: "_blank" },
                    { text: "Канал «Рабочего развития»", link: "https://t.me/work_development_guides", target: "_blank" },
                    { text: "Канал «Исследовательского развития»", link: "https://t.me/research_development_guides", target: "_blank" },
                ],
            },
        ],
        expandButtons: [
            { icon: "magic", text: "ИТ-платформа Aisystant", link: "https://aisystant.system-school.ru/", target: "_blank" },
            { icon: "ruble", text: "Купить", link: "/quick-purchase" },
            { icon: "global", text: "Соцсети", link: "#footer", onlyDesktop: true },
            { icon: "club", text: "Клуб", link: "https://systemsworld.club/", target: "_blank" },
            { icon: "contacts", text: "Контакты", link: "/contacts" },
        ],
        socialLinks: [
            { icon: "youtube", link: "https://www.youtube.com/channel/UCJ0Uq_WB7GLmY-NTz2oFoUQ" },
            { icon: "telegram", link: "https://t.me/system_school" },
            { icon: "facebook", link: "https://www.facebook.com/system.school.ru" },
            { icon: "instagram", link: "https://www.instagram.com/sys.school" },
            { icon: "linkedin", link: "https://www.linkedin.com/school/86146919" },
            { icon: "medium", link: "https://medium.com/aisystant" },
            { icon: "vk", link: "https://vk.com/management.school" },
        ],
        contacts: {
            address: "115054, г.&nbsp;Москва, ул.&nbsp;Земляной Вал, д.&nbsp;68/18, стр.&nbsp;5, этаж&nbsp;3, офис&nbsp;314",
            telegram: "https://t.me/ssm_tg",
            email: "info@system-school.ru",
        },
        extLinks: {
            aisystant: "https://aisystant.system-school.ru/",
        },
        share: {
            title: 'Поделиться:',
            services: 'telegram,vkontakte,whatsapp,linkedin,lj,blogger',
            hostname: 'https://system-school.ru',
        },
    },

    vite: {
        plugins: [
            createSvgSpritePlugin({
                symbolId: 'icon-[name]-[hash]',
                include: ['**/sprite/**.svg']
            }),
        ],
    }
})
