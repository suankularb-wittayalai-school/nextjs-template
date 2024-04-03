import AppStateContext from "@/contexts/AppStateContext";
import Logo from "@/public/images/logo.svg";
import useLocale from "@/utils/helpers/useLocale";
import {
  AppDrawer,
  AppDrawerItem,
  AppDrawerSegment,
  PageHeader as BasePageHeader,
  PageHeaderProps,
} from "@suankularb-components/react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import Link from "next/link";
import { FC, useContext } from "react";

/**
 * There’s exactly one Page Header on every page. It displays the title (in
 * the only `<h1>` on the page), the back Button for navigating up, and
 * the App Drawer.
 *
 * @see {@link PageHeader Page Header}
 *
 * @returns A Page Header.
 */
const PageHeader: FC<
  Pick<PageHeaderProps, "children"> & Partial<PageHeaderProps>
> = (props) => {
  const locale = useLocale();
  const { t: tx } = useTranslation("common");

  const { setNavOpen } = useContext(AppStateContext);

  return (
    <BasePageHeader
      appDrawer={
        <AppDrawer locale={locale}>
          <AppDrawerSegment title="TODO">
            {/* If this app belongs to a family of apps, add them here */}
            <AppDrawerItem
              logo={<Image src={Logo} alt="" />}
              name={tx("appName")}
              href="#"
            />
          </AppDrawerSegment>
        </AppDrawer>
      }
      locale={locale}
      buttonElement={Link}
      onNavToggle={() => setNavOpen(true)}
      {...props}
    />
  );
};

export default PageHeader;
