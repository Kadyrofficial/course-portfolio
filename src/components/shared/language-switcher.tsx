"use client";

import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";

const locales = [
    { code: "tm", label: "Türkmen" },
    { code: "en", label: "English" },
    { code: "ru", label: "Русский" },
];

interface Props {
    className?: string
}

export const LanguageSwitcher: React.FC<Props> = ({className}) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newLocale = event.target.value;
        const pathSegments = pathname.split("/");
        pathSegments[1] = newLocale;
        router.push(pathSegments.join("/"));
    };

  return (
    <select onChange={handleChange} defaultValue={pathname.split("/")[1]} className="px-3 h-9 bg-zinc-50/90 border rounded-md font-medium focus:outline-none cursor-pointer transition duration-200 appearance-none">
        {locales.map(({ code, label }) => (
            <option key={code} value={code} className={cn('bg-zinc-50/90', className)}>
                {label}
            </option>
        ))}
    </select>
  );
}
