import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Button } from "../ui";
import {useTranslations} from 'next-intl';


interface Props {
    className?: string
}

export const Home: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');

    return (
        <section id="home" className={cn('w-full px-1 pt-14 bg-gradient-to-b from-blue-900 via-blue-700 to-blue-300 flex flex-col sm:flex-row sm:items-center justify-center', className)}>
                <p className={cn('py-4 px-3 sm:w-2/5 text-background text-center sm:text-left flex flex-col')}>
                    <span className={cn('text-4xl lg:text-5xl font-bold', className)}>{t('heading1')}</span>
                    <span className={cn('text-2xl lg:text-3xl font-medium', className)}>{t('heading2')}</span>
                    <span className={cn('py-6 md:text-lg lg:text-xl', className)}>{t('heading3')}</span>
                    <span className={cn('gap-2 py-2 flex justify-center sm:justify-start *:rounded-full', className)}>
                        <Button className={cn('text-zinc-900 sm:bg-zinc-100 hover:bg-background bg-background lg:h-10 lg:px-8 shadow-md', className)}>{t('about_me')}</Button>
                        <Button variant={'custome_outline'} className={cn('text-background border-background hover:bg-background hover:text-foreground lg:h-10 lg:px-8 shadow-md', className)}>{t('login')}</Button>
                    </span>
                </p>
                <Image src={"/11644307566k76kcvepfc0boqlyz0p4bpjtr2l0g83e5va94hpi0x2emckuqw9meqflfgt3uywgoticf0i5benqieopseobv9b8yurls01wktwv.png"} width={0} sizes="100vw" height={0} className={cn('w-full sm:w-2/5 h-full object-cover', className)} alt={""} />
        </section>
    )
}