import { computed } from 'vue'

const modules = import.meta.glob('../../../components/books/*.md', { eager: true })

export const bookCards = computed(() =>
    Object.entries(modules)
        .map(([path, mod]: any) => {
            const id = path.match(/\/books\/(.*?)\.md$/)?.[1]
            const fm = mod.__pageData?.frontmatter ?? {}

            return {
                id,
                order: fm.order,
                title: fm.title,
                text: fm.text,
                image: fm.image,
                author: fm.author,
                buttons: fm.buttons,
            }
        })
        .filter(p => typeof p.order === 'number')
        .sort((a, b) => a.order - b.order)
)
