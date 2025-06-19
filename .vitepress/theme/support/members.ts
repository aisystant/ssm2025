import { computed } from 'vue'

const modules = import.meta.glob('/team/*.md', { eager: true })

export const teamPages = computed(() =>
    Object.entries(modules)
        .map(([path, mod]: any) => {
            const id = path.match(/\/team\/(.*?)\.md$/)?.[1]
            const fm = mod.__pageData?.frontmatter ?? {}

            return {
                id,
                order: fm.order,
                image: fm.image,
                name: fm.name,
                surname: fm.surname,
                post: fm.post,
                description: fm.description,
            }
        })
        .filter(p => typeof p.order === 'number')
        .sort((a, b) => a.order - b.order)
)
