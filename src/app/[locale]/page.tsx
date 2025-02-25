import {useTranslations} from 'next-intl';
import {Link} from '@/i18n/routing';
import { Courses } from '@/components/shared';


export default function Home() {
    const t = useTranslations('Home');

    return (
        <>
            <Courses />
        </>
    );
}
