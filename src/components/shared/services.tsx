import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import {useLocale, useTranslations} from 'next-intl';
import { servicesData } from "./data";


interface Props {
    className?: string
}

export const Services: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const locale = useLocale()

    return (
        <section id="services" className={cn('w-full max-w-6xl px-3 pt-4', className)}>
            <p className={cn('text-xl sm:text-2xl font-medium p-2', className)}>{t('services')}</p>
            <div className={cn('*:p-2 flex flex-wrap', className)}>
                {servicesData.map((item) => {
                    const titleKey = `title_${locale}` as keyof typeof item;
                    const descriptionKey = `description_${locale}` as keyof typeof item;

                    return (
                        <div className={cn('sm:basis-1/2 lg:basis-1/3', className)}>
                            <Image src={item.img} width={0} height={0} alt={item.title_en} sizes="100vw" className={cn('w-full aspect-square rounded-xl', className)} />
                            <p className={cn('flex flex-col p-2', className)}>
                                <span className={cn('text-xl font-medium', className)}>{item[titleKey]}</span>
                                <span className={cn('text-md line-clamp-3', className)}>{item[descriptionKey]}</span>
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
