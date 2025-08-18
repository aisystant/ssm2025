import { computed } from 'vue'

const modules = import.meta.glob('/articles/*.md', { eager: true })

export const articlePages = computed(() =>
    Object.entries(modules)
        .map(([path, mod]: any) => {
            const id = path.match(/\/articles\/(.*?)\.md$/)?.[1]
            const fm = mod.__pageData?.frontmatter ?? {}

            return {
                id,
                order: fm.order,
                title: fm.title,
                image: fm.image,
                author: fm.author,
            }
        })
        .filter(p => typeof p.order === 'number')
        .sort((a, b) => a.order - b.order)
)
