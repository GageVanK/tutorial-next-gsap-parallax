import {
  Image,
  Accordion,
  Grid,
  Container,
  Title,
  Text,
  Paper,
  Space,
} from "@mantine/core";
import classes from "./FAQ.module.css";
import React from "react";

export function FaqContainer() {
  return (
    <>
      <Container size="xl">
        <Paper p="md" radius={77}>
          <div className={classes.wrapper}>
            <Container size="lg">
              <Grid id="faq-grid" gutter={50}>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Image src={"/FAQs.gif"} alt="Frequently Asked Questions" />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Title order={2} ta="left" className={classes.title}>
                    Frequently Asked Questions
                  </Title>

                  <Accordion
                    chevronPosition="right"
                    defaultValue="what-to-bring"
                    variant="separated"
                    classNames={classes}
                  >
                    <Accordion.Item value="what-to-bring">
                      <Accordion.Control>
                        <Text size="lg" c="black">
                          What should I bring for a guided UTV tour?
                        </Text>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c="black">
                          We recommend wearing comfortable, weather-appropriate
                          clothing, closed-toe shoes, sunscreen, and sunglasses.
                          We provide helmets and safety gear.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="delivery">
                      <Accordion.Control>
                        <Text size="lg" c="black">
                          Where do you offer free firewood delivery, and how
                          does it work?
                        </Text>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c="black">
                          We provide free firewood delivery to campsites and
                          locations along the Arizona Peace Trail and nearby
                          areas. Simply let us know your location and preferred
                          delivery time, and we’ll bring high-quality firewood
                          directly to you—so you can relax and enjoy your
                          campfire without any extra effort!
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="cancel-policy">
                      <Text size="lg" c="black">
                        <Accordion.Control>
                          Is the Arizona Peace Trail suitable for beginners?
                        </Accordion.Control>
                      </Text>
                      <Accordion.Panel>
                        <Text c="black">
                          While portions of the trail are suitable for
                          beginners, some sections can be challenging, with
                          rough terrain and steep inclines. We recommend guided
                          tours for first-time riders or those unfamiliar with
                          the trail.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="drone-services">
                      <Accordion.Control>
                        <Text size="lg" c="black">
                          What are the benefits of using drone services for my
                          adventure?
                        </Text>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c="black">
                          Our drone services capture your Arizona Peace Trail
                          experience from a breathtaking aerial perspective.
                          With HD cameras and advanced gimbal stabilization, we
                          provide smooth, high-quality footage and stunning
                          photos. Whether you're looking to document your
                          off-road journey or capture the beauty of the
                          landscape, our professional drone services ensure you
                          get incredible visuals to relive and share your
                          adventure.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>

                    <Accordion.Item value="ebike-rentals">
                      <Accordion.Control>
                        <Text size="lg" c="black">
                          How long can I rent an e-bike for?
                        </Text>
                      </Accordion.Control>
                      <Accordion.Panel>
                        <Text c="black">
                          Our e-bikes are available for half-day, full-day, and
                          multi-day rentals. Feel free to contact us for pricing
                          details and extended rental options.
                        </Text>
                      </Accordion.Panel>
                    </Accordion.Item>
                  </Accordion>
                </Grid.Col>
              </Grid>
            </Container>
          </div>
        </Paper>
      </Container>
      <Space h={111} />
    </>
  );
}
