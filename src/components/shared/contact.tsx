import React from "react";
import {cn} from '@/lib/utils'
import { Button, Input } from "../ui";
import {useTranslations} from 'next-intl';
import { followData } from "./data";


interface Props {
    className?: string
}

export const Contact: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');

    return (
        <section id="contact" className={cn('w-full py-3  max-w-6xl justify-center', className)}>
            <p className={cn('text-xl sm:text-2xl font-medium py-2 px-5', className)}>{t('contact')}</p>
            <div className={cn('bg-primary flex flex-col sm:flex-row gap-2 sm:items-center md:*:basis-2/5 md:py-6 items-center justify-center p-4', className)}>
                <div className={cn('bg-blue-900/40 p-4 w-full sm:p-6 rounded-lg hover:bg-blue-900/35 transition-all', className)}>
                    <p className={cn('text-background font-medium text-lg', className)}>{t('form_title')}</p>
                    <div className={cn('pt-4 flex flex-col gap-2', className)}>
                        <Input type="text" id="name" placeholder={t('name')} className={cn('bg-zinc-50/20  text-background/90 border-none placeholder:text-background/70 focus-visible:ring-0 focus-visible:ring-0', className)} />
                        <Input type="email" id="email" placeholder={t('email')} className={cn('bg-zinc-50/20  text-background/90 border-none placeholder:text-background/70 focus-visible:ring-0 focus-visible:ring-0', className)} />
                        <Input type="text" id="name" placeholder={t('phone_number')} className={cn('bg-zinc-50/20  text-background/90 border-none placeholder:text-background/70 focus-visible:ring-0 focus-visible:ring-0', className)} />
                        <Button className={cn('text-zinc-900 sm:bg-zinc-100 hover:bg-background bg-background/90 lg:h-10 lg:px-8 shadow-md', className)}>{t('send')}</Button>
                    </div>
                </div>
                <div className={cn('flex flex-col gap-2 w-full', className)}>
                    <div className={cn('bg-blue-900/40 p-4 rounded-lg hover:bg-blue-900/35 transition-all', className)}>
                        <p className={cn('text-background font-medium text-lg', className)}>{t('social_media')}</p>
                        <div className={cn('flex *:w-8 gap-2 pt-4 *:fill-background/80', className)}>
                            {followData.map((item) => (
                                <a href={item.link}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className={cn('hover:fill-background', className)} viewBox="0 0 448 512">
                                        {item.icon}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                    <div className={cn('bg-blue-900/40 p-4 rounded-lg hover:bg-blue-900/35 transition-all', className)}>
                        <p className={cn('text-background font-medium text-lg', className)}>{t('contact')}</p>
                        <a href="tel:+36707800974">
                            <div className={cn('group flex gap-3 pt-4', className)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone stroke-blue-300 group-hover:stroke-blue-200">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span className={cn('text-background font-medium text-background/90 group-hover:text-background', className)}>+36707800974</span>
                            </div>
                        </a>
                        <a href="mailto:kadyr.gullyyew@gmail.com">
                            <div className={cn('group flex gap-3 pt-4', className)}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone stroke-blue-300 group-hover:stroke-blue-200">
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span className={cn('text-background font-medium text-background/90 group-hover:text-background', className)}>kadyr.gullyyew@gmail.com</span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
