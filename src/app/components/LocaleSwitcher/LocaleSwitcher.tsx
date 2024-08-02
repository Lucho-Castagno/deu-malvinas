import { useLocale, useTranslations } from "next-intl";
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export default function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();

  return (
    <LocaleSwitcherSelect
      defaultValue={locale}
      items={[
        {
          value: "es",
          label: t("es"),
        },
        {
          value: "en",
          label: t("en"),
        },
        {
          value: "it",
          label: t("it"),
        },
        {
          value: "pt",
          label: t("pt"),
        },
        {
          value: "fr",
          label: t("fr"),
        },
      ]}
      label={t("label")}
    />
  );
}
