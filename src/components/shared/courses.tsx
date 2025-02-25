import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Button } from "../ui";
import {useTranslations} from 'next-intl';


interface Props {
    className?: string
}

export const Courses: React.FC<Props> = ({className}) => {
    const t = useTranslations('Home');

    return (
        <section className={cn('w-full px-3 max-w-5xl', className)}>
        </section>
    )
}
