import React from "react";
import {cn} from '@/lib/utils'
import { Button } from "../ui";
import {useLocale, useTranslations} from 'next-intl';
import { followData, headerData } from "./data";
import { Link } from "@/i18n/routing";

interface Props {
    className?: string
}

export const Footer: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const locale = useLocale()

    return (
        <footer id="footer" className={cn('w-full bg-neutral-200 flex flex-col justify-between items-center', className)}>
            <div className={cn('w-full h-full px-3 max-w-6xl', className)}>
                <div className={cn('py-6 border-b border-zinc-500')}>
                    <p className={cn('text-center py-3 text-2xl font-medium', className)}>Okuw merkez</p>
                    <div className={cn('py-4 items-center justify-center flex flex-wrap *:text-foreground', className)}> 
                        {headerData.map((item) => {
                            const titleKey = `title_${locale}` as keyof typeof item;
                            return (
                                <Link key={item.key} href={item.link}>
                                    <Button variant={'link'} className={cn('text-foreground px-2 sm:px-4')}>{item[titleKey]}</Button>
                                </Link>
                            )
                        })}
                    </div>
                    <div className={cn(' flex *:w-8 gap-4 py-1 *:fill-foreground/80 flex items-center justify-center', className)}>
                        {followData.map((item) => (
                            <a href={item.link}>
                                <svg xmlns="http://www.w3.org/2000/svg" className={cn('hover:fill-foreground/90', className)} viewBox="0 0 448 512">
                                    {item.icon}
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
                <p className={cn('text-center py-3', className)}>Copyright © 2021-2025 All rights Reserved</p>
            </div>
        </footer>
    )
}
