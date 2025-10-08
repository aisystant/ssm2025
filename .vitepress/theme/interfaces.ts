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

export interface Quiz {
    invites: QuizInvites
    questions: QuizQuestion[]
    footer?: string
    conclude: QuizConclude
    intro: string
    form: string
    final: string
}

export interface QuizInvites {
    title: string
    text?: string
    image: string
    button?: string
}

export interface QuizIntro {
    title: string
    image: string
    button: string
}

export interface QuizQuestion {
    title: string
    type: string
    help?: string
    required?: boolean
    message?: string
    answers: QuizAnswer[]
}

export interface QuizAnswer {
    text: string
    score: number
    checked?: boolean
}

export interface QuizConclude {
    image: string
    mode?: string
    results: QuizResult[]
    action?: QuizAction
    subscribe?: QuizAction
    error: QuizError
}

export interface QuizResult {
    score: number
    name: string
    text: string[]
}

export interface QuizError {
    title: string
    text: string
    button: string
}

export interface QuizAction {
    name: string
    text?: string
    button: string
    link?: string
}

export interface QuizForm {
    title: string
    image: string
    name: string
    email: string
    submit: string
    note?: string
}

export interface QuizFinal {
    title: string
    image: string
    button?: string
}
