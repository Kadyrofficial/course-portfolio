import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Button } from "../ui";
import {useLocale, useTranslations} from 'next-intl';
import { coursesData } from "./data";


interface Props {
    className?: string
}

coursesData

export const Courses: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const locale = useLocale()

    return (
        <section id="courses" className={cn('w-full px-3 max-w-6xl', className)}>
            <p className={cn('text-xl sm:text-2xl font-medium p-2', className)}>{t('courses')}</p>
            <div className={cn('grid grid-cols-1 sm:grid-cols-2 gap-2 *:rounded-xl *:overflow-hidden *:border *:relative', className)}>
                {coursesData.map((item) => {
                    const titleKey = `title_${locale}` as keyof typeof item;
                    return (
                        <div key={item.key} className="group">
                        <Image src={item.img} alt={""} className={cn('w-full aspect-2/1 object-cover', className)} width={0} height={0} sizes="100vw" />
                            <div className={cn('group:hover:from-stone-900 absolute bg-gradient-to-t from-stone-900/40 text-white w-full bottom-0 pt-8 px-2 pb-2 gap-3 flex items-center', className)}>
                                <Button size={'sm'} variant={'apply'} className={cn('bg-white sm:bg-secondary sm:h-9 rounded-full font-bold sm:text-sm shadow-lg', className)} >{t('apply_now')}</Button>
                                <span className={cn('text-sm font-bold sm:text-base drop-shadow-md truncate')}>{item[titleKey]}</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
