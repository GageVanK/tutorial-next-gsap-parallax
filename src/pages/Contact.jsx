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
} from "@mantine/core";
import { IconPhone, IconAt, IconSun, IconMapPin } from "@tabler/icons-react";

export default function Contact() {
  return (
    <>
      <Space h={169} />

      <Container size="xl">
        <Paper p="md" radius={77}>
          <Group justify="center">
            <div>
              <Title c="black">Contact Us</Title>
              <Text c="dimmed">
                Give us a call and we will get back to you within 24 hours
              </Text>

              <Space h={33} />

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
                    <Text c="black" size="sm" fs="italic">
                      Phone
                    </Text>
                    <Text c="black" fs="italic">
                      +1 (928) 662-8897
                    </Text>
                  </div>
                </Group>
              </div>

              <Space h="lg" />

              {/* 
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
                    <Text c="black" size="sm" fs="italic">
                      Email
                    </Text>
                    <Text c="black" fs="italic">
                      Phone
                    </Text>
                  </div>
                </Group>
              </div>

                <Space h="lg" />
              */}

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
                    <Text c="black" size="sm" fs="italic">
                      Address
                    </Text>
                    <Text c="black">Arizona Peace Trail</Text>
                  </div>
                </Group>
              </div>

              <Space h="lg" />

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
                    <Text c="black" size="sm" fs="italic">
                      Working Hours
                    </Text>
                    <Text c="black">8 a.m. – 8 p.m.</Text>
                  </div>
                </Group>
              </div>

              <Button
                size="lg"
                mt="xl"
                color="#282a57"
                radius="xl"
                onClick={() => alert("Contact us via email or phone!")}
              >
                Contact Now
              </Button>
            </div>
            <Image
              src={"/Contactus.gif"}
              alt="Contact Storyset gif"
              maw={500}
              mah={500}
              radius="xl"
            />
          </Group>
        </Paper>
      </Container>
      <Space h={111} />
    </>
  );
}
