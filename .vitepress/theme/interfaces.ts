export interface Button {
    name: string
    link: string
    icon?: string
    style?: string
    target?: string
    rel?: string
}

export interface ButtonIcon {
    icon: string
    name: string
    link: string
    rel?: string
}

export interface Ambassador {
    name: string
    post?: string
    image: string
    social?: ButtonIcon[]
}

export interface Book {
    title: string
    text?: string
    image: string
    author?: string
    buttons?: ButtonIcon[]
}
