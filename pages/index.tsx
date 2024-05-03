import PageHeader from "@/components/PageHeader";
import {
  Card,
  CardContent,
  ContentLayout,
  Header,
  Section,
  Text,
} from "@suankularb-components/react";
import { NextPage } from "next";
import useTranslation from "next-translate/useTranslation";

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
                {t("welcome.desc", { date: new Date() })}
              </Text>
            </CardContent>
          </Card>
        </Section>
      </ContentLayout>
    </>
  );
};

export default IndexPage;
