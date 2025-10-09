const icons = import.meta.glob('../assets/sprite/*.svg', { eager: true })

export function getIconId(name: string): string | undefined {
    return icons[`../assets/sprite/${name}.svg`]?.default;
}
