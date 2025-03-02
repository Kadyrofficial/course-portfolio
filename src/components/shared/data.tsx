// Blog Data

export const blogData = [
    {
        'key': 1,
        'img': '/1713903403249.jpeg',
        'title_tm': 'This is blog',
        'title_ru': 'This is blog',
        'title_en': 'This is blog'
    },
    {
        'key': 2,
        'img': '/1713903403249.jpeg',
        'title_tm': 'This is blog',
        'title_ru': 'This is blog',
        'title_en': 'This is blog'
    },
    {
        'key': 3,
        'img': '/1713903403249.jpeg',
        'title_tm': 'This is blog',
        'title_ru': 'This is blog',
        'title_en': 'This is blog'
    },
]


// Follow Data

export const followData = [
    {
        'icon': (
            <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64h98.2V334.2H109.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H255V480H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64z"/>
        ),
        "link": "https://fastapi.tiangolo.com/tutorial/"
    },
    {
        'icon': (
            <path d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z"/>
        ),
        "link": "https://fastapi.tiangolo.com/tutorial/"
    }
]


// Courses Data

type CoursesItem = {
    key: number;
    img: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
};

export const coursesData: CoursesItem[] = [
    {
        'key': 1,
        'img': '/German-Course.jpg',
        'title_tm': 'German Language for beginners',
        'title_ru': 'German Language for beginners',
        'title_en': 'German Language for beginners'
    },
    {
        'key': 2,
        'img': '/German-Course.jpg',
        'title_tm': 'German Language for beginners',
        'title_ru': 'German Language for beginners',
        'title_en': 'German Language for beginners'
    },
]


// Services Data

type ServiceItem = {
    key: number;
    img: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    description_tm: string;
    description_ru: string;
    description_en: string;
};

export const servicesData: ServiceItem[] = [
    {
        'key': 1,
        'img': '/67a1d1125a29ed49e0bf225c_Primary-thumb-p-500.webp',
        'title_tm': 'dwd',
        'title_ru': '4532',
        'title_en': 'dwd',
        'description_tm': 'IWS Online School empowers students to discover their strengths, create their future, and lead with knowledge and confidence in a dynamic world.',
        'description_ru': 'IWS Online School empowers students to discover their strengths, create their future, and lead with knowledge and confidence in a dynamic world.',
        'description_en': 'IWS Online School empowers students to discover their strengths, create their future, and lead with knowledge and confidence in a dynamic world.'
    }
]


// Header Data

type HeaderItem = {
    key: number;
    link: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
};

export const headerData: HeaderItem[] = [
    {
        'key': 1,
        'link': '#intro',
        'title_tm': 'Esasy sahypa',
        'title_ru': 'Главная страница',
        'title_en': 'Home'
    },
    {
        'key': 2,
        'link': '#courses',
        'title_tm': 'Kurslar',
        'title_ru': 'Курсы',
        'title_en': 'Courses'
    },
    {
        'key': 3,
        'link': '#services',
        'title_tm': 'Hyzmatlar',
        'title_ru': 'Услуги',
        'title_en': 'Services'
    },
    {
        'key': 4,
        'link': '#blogs',
        'title_tm': 'Bloglar',
        'title_ru': 'Блоги',
        'title_en': 'Blogs'
    },
    {
        'key': 5,
        'link': '#contact',
        'title_tm': 'Habarlaşmak',
        'title_ru': 'Связаться',
        'title_en': 'Contact'
    },
    {
        'key': 6,
        'link': '#faq',
        'title_tm': 'FAQ',
        'title_ru': 'FAQ',
        'title_en': 'FAQ'
    }
]

// FAQ Data

type FAQItem = {
    key: number;
    value: string;
    title_tm: string;
    title_ru: string;
    title_en: string;
    content_tm: string;
    content_ru: string;
    content_en: string;
};

export const FAQData: FAQItem[] = [
    {
        'key': 1,
        'value': 'item-1',
        'title_tm': 'Esasy sahypa',
        'title_ru': 'Главная страница',
        'title_en': 'Home',
        'content_tm': 'Esasy sahypa',
        'content_ru': 'Главная страница',
        'content_en': 'Home'
    },
    {
        'key': 2,
        'value': 'item-2',
        'title_tm': 'Esasy sahypa',
        'title_ru': 'Главная страница',
        'title_en': 'Home',
        'content_tm': 'Esasy sahypa',
        'content_ru': 'Главная страница',
        'content_en': 'Home'
    },
]