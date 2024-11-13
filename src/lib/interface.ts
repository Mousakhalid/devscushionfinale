
export interface appDevelopment {
    title: string;
    overview: string;
    content?: any;
    _id: string;
    slug: {
        current: string;
    };
    date: Date;
    _createdAt: string;
    mainImage?: string;
}
export interface webDevelopment {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: [
        current: 'string'
    ];
    _createdAt: string;
    mainImage: any
}

export interface businessTip {
    title: string;
    overview: string;
    content: any;
    _id: string;
    slug: [
        current: 'string'
    ];
    _createdAt: string;
    mainImage: any
}