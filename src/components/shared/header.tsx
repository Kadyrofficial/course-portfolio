import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Button } from "../ui";
import {useLocale, useTranslations} from 'next-intl';
import { Link } from "@/i18n/routing";
import { headerData } from "./data";
import { LanguageSwitcher } from "./language-switcher";

interface Props {
    className?: string
}

export const Header: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const locale = useLocale()

    return (
        <header className={cn('fixed w-full h-12 bg-zinc-50/80 flex flex-col items-center backdrop-blur-xl z-50', className)}>
            <div className={cn('w-full h-full px-3 flex items-center justify-between max-w-6xl', className)}>
                <Image src={"/logo.png"} alt={""} width={32} height={32} />
                <div className={cn('h-full items-center hidden sm:flex *:text-foreground', className)}> 
                    {headerData.map((item) => {
                        const titleKey = `title_${locale}` as keyof typeof item;
                        return (
                            <Link key={item.key} href={item.link}>
                                <Button variant={'link'} className={cn('text-foreground')}>{item[titleKey]}</Button>
                            </Link>
                        )
                    })}
                </div>
                <LanguageSwitcher />
                <div className={cn('sm:hidden h-full flex', className)}>
                    <button className={cn('h-full px-2 flex items-center justify-center')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in">
                            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                            <polyline points="10 17 15 12 10 7"/>
                            <line x1="15" x2="3" y1="12" y2="12"/>
                        </svg>
                    </button>
                    <button className={cn('h-full px-2 flex items-center justify-center', className)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-6 aspect-square">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    )
}
