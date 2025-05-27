import { defineConfig } from 'vitepress'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "ru-RU",
    title: "Школа системного менеджмента",
    description: "Готовим директоров по развитию, меняющих мир к лучшему",

    themeConfig: {
        siteTitle: "Школа системного менеджмента",
        nav: [
            {
                text: "О ШСМ",
                items: [
                    { text: "Коротко о ШСМ", link: "#" },
                    { text: "Команда", link: "/team/", activeMatch: "^/team" },
                    { text: "Контакты", link: "#footer" },
                    { text: "Волонтерство", link: "#" },
                    { text: "Амбассадоры ШСМ", link: "#" },
                ],
            },
            {
                text: "Обучение",
                items: [
                    { text: "Образовательная программа", link: "#" },
                    { text: "Расписание", link: "#" },
                    { text: "Чему и как учиться", link: "#" },
                    { text: "Что получает наш студент", link: "#" },
                    { text: "Квалификация", link: "#" },
                    { text: "Литература", link: "#" },
                ],
            },
            {
                text: "Исследования",
                items: [
                    { text: "Обзор исследований", link: "#" },
                    { text: "О системном мышлении", link: "#" },
                    { text: "Интеллект-стек и стек практик саморазвития", link: "#" },
                ],
            },
            {
                text: "Клуб",
                link: "https://systemsworld.club/",
                target: "_blank",
            },
            {
                text: "Соцсети",
                link: "#footer",
                onlyDekstop: true,
            },
            {
                text: "С чего начать?",
                link: "#",
                accent: true,
            },
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
