import NavBar from "@/components/NavBar";
import NavDrawer from "@/components/NavDrawer";
import usePageIsLoading from "@/utils/helpers/usePageIsLoading";
import { useSnackbarController } from "@/utils/helpers/useSnackbarController";
import { Progress, RootLayout, Snackbar } from "@suankularb-components/react";
import { useTranslation } from "next-i18next";
import { FC, ReactNode } from "react";

/**
 * A Root Layout with persistent components.
 *
 * @param children The content of the page.
 *
 * @returns A Root Layout.
 */
const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const { t } = useTranslation("common");

  const pageIsLoading = usePageIsLoading();
  const { snackbarOpen, setSnackbarOpen, snackbarProps } =
    useSnackbarController();

  return (
    <RootLayout>
      {/* Navigation */}
      <NavDrawer />
      <NavBar />

      {/* Page loading indicator */}
      <Progress
        appearance="linear"
        alt={t("pageIsLoading")}
        visible={pageIsLoading}
      />

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        onClose={() => setSnackbarOpen(false)}
        {...snackbarProps!}
      />

      {/* Content */}
      {children}
    </RootLayout>
  );
};

export default Layout;
