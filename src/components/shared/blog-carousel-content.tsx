import React from "react";
import {cn} from '@/lib/utils'
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "../ui";
import {useTranslations} from 'next-intl';
import Autoplay from "embla-carousel-autoplay"


interface Props {
    className?: string
}

const blogData = [
    {
        'img': '/1713903403249.jpeg',
        'title': 'This is blog'
    },
    {
        'img': '/1713903403249.jpeg',
        'title': 'This is blog'
    },
    {
        'img': '/1713903403249.jpeg',
        'title': 'This is blog'
    },
]

export const BlogsCarousel: React.FC<Props> = ({className}) => {
    const t = useTranslations('HomePage');
    const plugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    return (
        <Carousel className={cn('w-full overflow-hidden rounded-md px-2', className)} opts={{align: "start", loop: true}} plugins={[plugin.current]}>
            <CarouselContent>
                {blogData.map((item) => (
                    <CarouselItem className={cn('basis-2/3 sm:basis-2/5 md:basis-[27%]', className)}>
                        <Image src={item.img} width={1500} sizes="100vw" height={0} className={cn('w-full aspect-3/2 object-cover rounded-md overflow-hidden', className)} alt={""} />
                        <p className={cn('px-3 truncate py-2 font-medium md:text-lg', className)}>{item.title}</p>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
}
           