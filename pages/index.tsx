import PageHeader from "@/components/PageHeader";
import { LangCode } from "@/utils/types/common";
import {
  Card,
  CardContent,
  ContentLayout,
  Header,
  Section,
  Text,
} from "@suankularb-components/react";
import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const IndexPage: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <>
      <PageHeader>{t("title")}</PageHeader>
      <ContentLayout>
        <Section>
          <Header>{t("welcome.title")}</Header>
          <Card
            appearance="outlined"
            className="!rounded-xl !bg-surface-container"
          >
            <CardContent className="items-center">
              <Text type="body-large" className="max-w-md text-center">
                {t("welcome.desc")}
              </Text>
            </CardContent>
          </Card>
        </Section>
      </ContentLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale as LangCode, ["common", "home"])),
  },
});

export default IndexPage;
