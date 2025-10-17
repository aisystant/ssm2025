import { data } from '../../data/variables';
import { PageData, SiteConfig, HeadConfig } from 'vitepress';

export function replaceFrontmatterVariables(obj: any) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            let value = obj[key];

            if (typeof value === 'string') {
                const regex = /{{\s*data\.(\w+(\.\w+)*)\s*}}/g;
                obj[key] = value.replace(regex, (match, path) => {
                    const value = getNestedValue(data, path);

                    if (value === undefined) {
                        throw new Error(`Не найдено значение переменной {{ data.${path} }}`);
                    }
                    return value;
                });
            }

            if (typeof value === 'object' && value !== null) {
                replaceFrontmatterVariables(value);
            }
        }
    }
}

function getNestedValue(obj: any, path: string) {
    const keys = path.split('.');
    let result = obj;
    for (const key of keys) {
        result = result[key];
        if (result === undefined) return undefined;
    }
    return result;
}

export function prepareFrontmatterHead(pageData: PageData, siteConfig: SiteConfig, hostname: string) {
    let head = <HeadConfig[]>[];

    const canonicalUrl = `${hostname}/${pageData.relativePath}`
        .replace(/index\.md$/, '')
        .replace(/\.md$/, '');

    let title = pageData.title;
    if (!title.length) title = siteConfig.site.title;

    let description = pageData.description;
    if (!description.length) description = siteConfig.site.description;

    let image = '';
    if (pageData.frontmatter.og_image) {
        image = `${hostname}/images/${pageData.frontmatter.og_image}`;
    } 
    if (pageData.frontmatter.layout == 'article' && !image) {
        image = `${hostname}/images/${pageData.frontmatter.image}`;
    }
    if (pageData.frontmatter.layout == 'mentor' && !image) {
        image = `${hostname}/images/team/${pageData.frontmatter.image}`;
    }
    if (!image) image = `${hostname}/images/open-graph-image-system-school.png`;

    let type = 'website';
    if (pageData.frontmatter.layout == 'article') type = 'article';
    if (pageData.frontmatter.layout == 'mentor') type = 'profile';

    head.push(
        [
            'link',
            { rel: 'canonical', href: canonicalUrl }
        ],
        [
            'meta',
            { name: 'og:title', content: title }
        ],
        [
            'meta',
            { name: 'og:description', content: description }
        ],
        [
            'meta',
            { name: 'og:image', content: image }
        ],
        [
            'meta',
            { name: 'og:type', content: type }
        ],
        [
            'meta',
            { name: 'og:url', content: canonicalUrl }
        ],
        [
            'meta',
            { name: 'og:site_name', content: siteConfig.site.title }
        ]
    );

    return head;
}
