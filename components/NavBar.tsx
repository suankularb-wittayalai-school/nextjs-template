import AppStateContext from "@/contexts/AppStateContext";
import { StylableFC } from "@/utils/types/common";
import {
  NavBar as BaseNavBar,
  NavBarItem,
  MaterialIcon,
} from "@suankularb-components/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { useTranslation } from "react-i18next";

/**
 * Navigation Bar allows users to navigate between pages and open the Navigation
 * Drawer.
 */
const NavBar: StylableFC = ({ style, className }) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { setNavOpen } = useContext(AppStateContext);

  return (
    <BaseNavBar
      onNavToggle={() => setNavOpen(true)}
      style={style}
      className={className}
    >
      <NavBarItem
        icon={<MaterialIcon icon="home" />}
        label={t("navigation.home")}
        selected={/^\/$/.test(router.asPath)}
        href="/"
        element={Link}
      />
      <NavBarItem
        icon={<MaterialIcon icon="login" />}
        label={t("navigation.login")}
        selected={/^\/account\/login/.test(router.asPath)}
        href="/account/login"
        element={Link}
      />
      <NavBarItem
        icon={<MaterialIcon icon="info" />}
        label={t("navigation.about")}
        selected={/^\/about/.test(router.asPath)}
        href="/about"
        element={Link}
      />
    </BaseNavBar>
  );
};

export default NavBar;
