import { defineConfig } from 'vitepress'
import createSvgSpritePlugin from 'vite-plugin-svg-sprite'
import { imagetools } from 'vite-imagetools'
import { replaceFrontmatterVariables, prepareFrontmatterHead } from './theme/utils'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    srcDir: "src",
    lang: "ru-RU",
    title: "Мастерская инженеров-менеджеров",
    description: "Мастерская инженеров-менеджеров — новое образование для развития системного мышления. Личное развитие, инженерия систем, работа с ИИ. Строим новое мышление для непредсказуемого мира.",

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
                    { text: "Руководства", link: "https://docs.system-school.ru/ru/", target: "_blank" },
                    { text: "Литература", link: "/books" },
                ],
            },
            {
                text: "Исследования",
                items: [
                    { text: "Обзор исследований", link: "/research" },
                    { text: "О системном мышлении", link: "/articles/what-is-systems-thinking" },
                    { text: "Интеллект-стек и стек практик саморазвития", link: "/stack" },
                    { text: "Новости исследований", link: "https://systemsworld.club/c/issledovaniya/1020", target: "_blank" },
                ],
            },
            {
                text: "Сообщество",
                items: [
                    { text: "Клуб", link: "https://systemsworld.club/", target: "_blank" },
                    { text: "Амбассадоры", link: "/ambassador" },
                    { text: "Канал «Личного развития»", link: "https://t.me/self_development_guides", target: "_blank" },
                    { text: "Канал «Рабочего развития»", link: "https://t.me/work_development_guides", target: "_blank" },
                    { text: "Канал «Исследовательского развития»", link: "https://t.me/research_development_guides", target: "_blank" },
                ],
            },
        ],
        expandButtons: [
            { icon: "magic", name: "ИТ-платформа Aisystant", link: "https://aisystant.system-school.ru/", target: "_blank", rel: "nofollow" },
            { icon: "ruble", name: "Купить", link: "/quick-purchase" },
            { icon: "global", name: "Соцсети", link: "#footer", onlyDesktop: true },
            { icon: "club", name: "Клуб", link: "https://systemsworld.club/", target: "_blank" },
            { icon: "book", name: "Руководства", link: "https://docs.system-school.ru/ru/", target: "_blank" },
            { icon: "contacts", name: "Контакты", link: "/contacts" },
        ],
        socialLinks: [
            { icon: "youtube", name: "YouTube", link: "https://www.youtube.com/channel/UCJ0Uq_WB7GLmY-NTz2oFoUQ" },
            { icon: "telegram", name: "Telegram", link: "https://t.me/system_school" },
            { icon: "facebook", name: "Facebook", link: "https://www.facebook.com/system.school.ru" },
            { icon: "instagram", name: "Instagram", link: "https://www.instagram.com/sys.school" },
            { icon: "linkedin", name: "LinkedIn", link: "https://www.linkedin.com/school/86146919" },
            { icon: "medium", name: "Medium", link: "https://medium.com/aisystant" },
            { icon: "vk", name: "VK", link: "https://vk.com/management.school" },
        ],
        contacts: {
            address: "115054, г.&nbsp;Москва, ул.&nbsp;Земляной Вал, д.&nbsp;68/18, стр.&nbsp;5, этаж&nbsp;3, офис&nbsp;314",
            workhours: "(ежедневно c&nbsp10 до&nbsp18&nbspч.)",
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
        offer: {
            text: "Публичный договор оферты",
            link: "/oferta",
        },
    },

    vite: {
        plugins: [
            createSvgSpritePlugin({
                symbolId: 'icon-[name]-[hash]',
                include: ['**/sprite/**.svg']
            }),
            imagetools(),
        ],
    },

    markdown: {
        config: (md) => {
            md.core.ruler.after('normalize', 'replace-variables', (state) => {
                const frontmatter = state.env.frontmatter;

                if (frontmatter) {
                    replaceFrontmatterVariables(frontmatter);
                    state.env.frontmatter = frontmatter;
                }
                return;
            });
        },
    },

    head: [
        [
            'script',
            { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-2NZKWJTBVW' }
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2NZKWJTBVW');`
        ],
        [
            'script',
            { async: '' },
            `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init Ce Ds js Te Os As capture Ye calculateEventProperties Us register register_once register_for_session unregister unregister_for_session Hs getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSurveysLoaded onSessionId getSurveys getActiveMatchingSurveys renderSurvey displaySurvey canRenderSurvey canRenderSurveyAsync identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty qs Ns createPersonProfile Bs Cs Ws opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing get_explicit_consent_status is_capturing clear_opt_in_out_capturing Ls debug L zs getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
            posthog.init('phc_um8ibWF5AIbKSlEk3NdwhlCvXGTqmyg1xi1eeFMFMRC', {
                api_host: 'https://posthog.system-school.ru',
                defaults: '2025-05-24',
                person_profiles: 'always',
            })`
        ]
    ],

    transformPageData(pageData, { siteConfig }) {
        const hostname = siteConfig.site.themeConfig.share.hostname ?? 'https://system-school.ru';

        pageData.frontmatter.head ??= [];
        pageData.frontmatter.head = [
            ...pageData.frontmatter.head,
            ...prepareFrontmatterHead(pageData, siteConfig, hostname)
        ];
    },
})
