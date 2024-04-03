import AppStateContext from "@/contexts/AppStateContext";
import cn from "@/utils/helpers/cn";
import { StylableFC } from "@/utils/types/common";
import {
  NavDrawer as BaseNavDrawer,
  MaterialIcon,
  NavDrawerItem,
  NavDrawerSection,
  Text,
} from "@suankularb-components/react";
import { Trans, useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

/**
 * A list of all destinations within an app.
 */
const NavDrawer: StylableFC = ({ style, className }) => {
  const { t } = useTranslation("common");

  const router = useRouter();
  const { navOpen, setNavOpen } = useContext(AppStateContext);

  return (
    <BaseNavDrawer
      open={navOpen}
      onClose={() => setNavOpen(false)}
      style={style}
      className={className}
    >
      {/* Top-level pages */}
      <NavDrawerSection
        header={
          <Text type="headline-small" className="!tracking-tighter">
            <Trans
              i18nKey="logoText"
              ns="common"
              components={[
                <span key={0} />,
                <span
                  key={1}
                  className={cn(`bg-gradient-to-r from-primary to-secondary
                bg-clip-text font-bold text-transparent`)}
                />,
              ]}
            />
          </Text>
        }
        alt={t("appName")}
      >
        <NavDrawerItem
          icon={<MaterialIcon icon="home" />}
          label={t("navigation.home")}
          selected={router.pathname === "/"}
          href="/"
          element={Link}
        />
        <NavDrawerItem
          icon={<MaterialIcon icon="login" />}
          label={t("navigation.login")}
          selected={router.pathname === "/account/login"}
          href="/account/login"
          element={Link}
        />
        <NavDrawerItem
          icon={<MaterialIcon icon="info" />}
          label={t("navigation.about")}
          selected={router.pathname === "/about"}
          href="/about"
          element={Link}
        />
      </NavDrawerSection>

      {/* Insert more Navigation Drawer Sections as your app expand. */}
    </BaseNavDrawer>
  );
};

export default NavDrawer;
