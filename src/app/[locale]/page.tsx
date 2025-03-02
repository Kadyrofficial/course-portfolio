import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Services, Blogs, Courses, Home, Contact, Footer } from '@/components/shared';
import { FAQ } from '@/components/shared/faq';


export default function HomePage() {
    const t = useTranslations('HomePage');

    return (
        <>
            <Home />
            <Courses />
            <Services />
            <Blogs />
            <Contact />
            <FAQ />
            <Footer />
       </>
    );
}
