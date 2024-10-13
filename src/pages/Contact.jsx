import {
  Space,
  Image,
  Center,
  Paper,
  Container,
  Text,
  Group,
  Title,
  rem,
  ThemeIcon,
  Button,
  SimpleGrid,
} from "@mantine/core";
import {
  IconPhone,
  IconAt,
  IconSun,
  IconMapPin,
  IconMail,
} from "@tabler/icons-react";
import { Fade } from "react-awesome-reveal";

export default function Contact() {
  return (
    <>
      <Space h={169} />

      <Container size="xl">
        <Paper p="md" radius="sm">
          <SimpleGrid
            cols={{ base: 1, sm: 1, lg: 2 }}
            align="left"
            spacing="xs"
          >
            <Fade>
              <Image
                src={"/Contactus.gif"}
                alt="Contact Storyset gif"
                maw={500}
                mah={500}
                radius="xl"
              />
            </Fade>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <Fade>
                <Title c="black">Contact Us</Title>
              </Fade>

              <Fade>
                <Text c="dimmed">
                  Give us a call or email and we will get back to you within 24
                  hours
                </Text>
              </Fade>

              <Space h="lg" />

              <Fade>
                <div>
                  <Group>
                    <ThemeIcon
                      color="#b22222"
                      variant="light"
                      size="xl"
                      aria-label="Settings"
                      p={5}
                    >
                      <IconPhone
                        style={{ width: rem(100), height: rem(77) }}
                        stroke={1.5}
                      />
                    </ThemeIcon>

                    <div>
                      <Text c="black" size="sm" fs="italic" ta="left">
                        Phone
                      </Text>
                      <Text c="black" fs="italic">
                        Company Number
                      </Text>
                    </div>
                  </Group>
                </div>
              </Fade>

              <Space h="lg" />

              <Fade>
                <div>
                  <Group>
                    <ThemeIcon
                      color="#b22222"
                      variant="light"
                      size="xl"
                      aria-label="Settings"
                      p={5}
                    >
                      <IconAt
                        style={{ width: rem(100), height: rem(77) }}
                        stroke={1.5}
                      />
                    </ThemeIcon>

                    <div>
                      <Text c="black" size="sm" fs="italic" ta="left">
                        Socials
                      </Text>
                      <Text c="black" fs="italic">
                        Company Social
                      </Text>
                    </div>
                  </Group>
                </div>
              </Fade>

              <Space h="lg" />

              <Fade>
                <div>
                  <Group>
                    <ThemeIcon
                      color="#b22222"
                      variant="light"
                      size="xl"
                      aria-label="Settings"
                      p={5}
                    >
                      <IconMail
                        style={{ width: rem(100), height: rem(77) }}
                        stroke={1.5}
                      />
                    </ThemeIcon>

                    <div>
                      <Text c="black" size="sm" fs="italic" ta="left">
                        Email
                      </Text>
                      <Text c="black" fs="italic">
                        Company Email
                      </Text>
                    </div>
                  </Group>
                </div>
              </Fade>

              <Space h="lg" />

              <Fade>
                <div>
                  <Group>
                    <ThemeIcon
                      color="#b22222"
                      variant="light"
                      size="xl"
                      aria-label="Settings"
                      p={5}
                    >
                      <IconSun
                        style={{ width: rem(100), height: rem(77) }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                    <div>
                      <Text c="black" size="sm" fs="italic" ta="left">
                        Address
                      </Text>
                      <Text c="black">Arizona Peace Trail</Text>
                    </div>
                  </Group>
                </div>
              </Fade>

              <Space h="lg" />

              <Fade>
                <div>
                  <Group>
                    <ThemeIcon
                      color="#b22222"
                      variant="light"
                      size="xl"
                      aria-label="Settings"
                      p={5}
                    >
                      <IconMapPin
                        style={{ width: rem(100), height: rem(77) }}
                        stroke={1.5}
                      />
                    </ThemeIcon>
                    <div>
                      <Text c="black" size="sm" fs="italic" ta="left">
                        Working Hours
                      </Text>
                      <Text c="black">8 a.m. – 8 p.m.</Text>
                    </div>
                  </Group>
                </div>
              </Fade>

              <Fade>
                <Button
                  size="lg"
                  mt="xl"
                  color="#b22222"
                  radius="xl"
                  onClick={() => alert("Contact us via email or phone!")}
                  fullWidth
                >
                  Contact Now
                </Button>
              </Fade>
            </div>
          </SimpleGrid>
        </Paper>
      </Container>
      <Space h={111} />
    </>
  );
}
