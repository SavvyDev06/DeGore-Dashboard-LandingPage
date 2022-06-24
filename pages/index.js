import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Button, Spacer, Text, Card, Grid } from "@nextui-org/react";

// Use `next-themes` to change the theme
import { useTheme as useNextTheme } from "next-themes";
import { Switch, useTheme } from "@nextui-org/react";

// Import framer motion
import { motion } from "framer-motion";

// Meta tag generation courtesy of: https://metatags.io/

export default function Home() {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: [1.5, 1, 1.5, 1] }}
      transition={{ ease: [0.42, 0, 0, 1.08], duration: 3 }}
    >
      <div
        className={styles.container}
        style={{
          backgroundImage: `url(https://i.ibb.co/x2gxQT7/universe-generative-pattern.png)`,
        }}
      >
        <Head>
          <title>DeGore Dashboard</title>
          <meta name="title" content="DeGore Dashboard" />
          <meta
            name="description"
            content="Interface with DeGore using an intuitive and easy-to-use web dashboard."
          />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://degore-dashboard.unitedweco.de/"
          />
          <meta property="og:title" content="DeGore Dashboard" />
          <meta
            property="og:description"
            content="Interface with DeGore using an intuitive and easy-to-use web dashboard."
          />
          <meta
            property="og:image"
            content="https://media.discordapp.net/attachments/821847610473709599/956942175403376660/thumbnail.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://degore-dashboard.unitedweco.de/"
          />
          <meta property="twitter:title" content="DeGore Dashboard" />
          <meta
            property="twitter:description"
            content="Interface with DeGore using an intuitive and easy-to-use web dashboard."
          />
          <meta
            property="twitter:image"
            content="https://media.discordapp.net/attachments/821847610473709599/956942175403376660/thumbnail.png"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Container
          as="main"
          display="flex"
          direction="column"
          justify="center"
          alignItems="center"
          style={{ height: "100vh" }}
        >
          <Spacer />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ rotate: 360, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2 }}
          >
            <Image src="/logo.png" alt="DeGore Logo" width={200} height={200} />
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1.5, delay: 1 }}
          >
            <Text h1 className={styles.title}>
              The DeGore Dashboard is on its way.
            </Text>
          </motion.div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 1, delay: 1.5 }}
          >
            <Text h2>Check back soon!</Text>
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 2 }}
          >
            <Button shadow color="gradient" size="xl">
              <a
                className={styles.button}
                href="https://indev-degore-dashboard.unitedweco.de"
                target="_blank"
                rel="noopener noreferrer"
              >
                Check out the in-development version
              </a>
            </Button>
          </motion.div>
          &nbsp;
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 2.5 }}
          >
            <Button color="gradient" size="lg">
              <a
                className={styles.button}
                href="https://discord.com/invite/NnsFt6xKsc"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join our support server
              </a>
            </Button>
          </motion.div>
          <Spacer />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 0.2, y: 0 }}
            transition={{ ease: [0.42, 0, 0, 1.08], duration: 2, delay: 3 }}
          >
            <Card bordered shadow={false} css={{ mw: "90px" }}>
              <Grid.Container gap={1} justify="center">
                <Switch
                  color="primary"
                  checked={isDark}
                  onChange={(e) =>
                    setTheme(e.target.checked ? "dark" : "light")
                  }
                />
              </Grid.Container>
            </Card>
          </motion.div>
        </Container>
      </div>
    </motion.div>
  );
}
