import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Header } from '@/components/shared';
import '../globals.css'


export default async function LocaleLayout({
    children,
    params: {locale}
}: {
    children: React.ReactNode;
    params: {locale: string};
}) {
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    const messages = await getMessages();

    return (
        <html lang={locale}>
            <body className='flex flex-col items-center bg-zinc-100'>
                <NextIntlClientProvider messages={messages}>
                    <Header />
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
