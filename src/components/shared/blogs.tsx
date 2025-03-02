import React from "react";
import {cn} from '@/lib/utils'
import {useTranslations} from 'next-intl';
import { BlogsCarousel } from "./blogs-carousel";
import { blogData } from "./data";


interface Props {
    className?: string
}

export const Blogs: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');

    return (
        <section id="blogs" className={cn('w-full py-4 flex flex-col items-center', className)}>
            <p className={cn('text-xl sm:text-2xl font-medium p-4 w-full max-w-6xl', className)}>{t('blogs')}</p>
            <BlogsCarousel data={blogData} />
        </section>
    )
}
