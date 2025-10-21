import { computed } from 'vue'

const modules = import.meta.glob('/quiz/*.md', { eager: true })

export const quizPages = computed(() =>
    Object.entries(modules)
        .map(([path, mod]: any) => {
            const id = path.match(/\/quiz\/(.*?)\.md$/)?.[1]
            const fm = mod.__pageData?.frontmatter ?? {}

            return {
                id,
                order: fm.order,
                title: fm.title,
                image: fm.cut_image,
                text: fm.description,
            }
        })
        .filter(p => typeof p.order === 'number')
        .sort((a, b) => a.order - b.order)
)
