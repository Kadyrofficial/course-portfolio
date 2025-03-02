import React from "react";
import {cn} from '@/lib/utils'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui";
import {useLocale, useTranslations} from 'next-intl';
import { FAQData } from "./data";


interface Props {
    className?: string
}

export const FAQ: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const locale = useLocale()

    return (
        <section id="faq" className={cn('w-full px-3 max-w-6xl py-4', className)}>
            <p className={cn('text-xl sm:text-2xl font-medium p-2', className)}>{t('faq')}</p>
            <Accordion type="single" className={cn('px-2', className)} collapsible>
                {FAQData.map((item) => {
                    const titleKey = `title_${locale}` as keyof typeof item;
                    const contentKey = `content_${locale}` as keyof typeof item;
                
                    return (
                        <AccordionItem key={item.key} value={item.value}>
                            <AccordionTrigger>{item[titleKey]}</AccordionTrigger>
                            <AccordionContent>
                                {item[contentKey]}
                            </AccordionContent>
                        </AccordionItem>
                    )
                })}
            </Accordion>
        </section>
    )
}
