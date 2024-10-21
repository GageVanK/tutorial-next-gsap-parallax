import { Group, ActionIcon, rem } from "@mantine/core";
import {
  IconHome2,
  IconMailOpened,
  IconQuestionMark,
  IconPhoneOutgoing,
} from "@tabler/icons-react"; // Ensure this import is correct
import React from "react";

export default function Footer() {
  return (
    <Group justify="center" hiddenFrom="lg">
      <ActionIcon.Group
        style={{
          position: "fixed",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 1000,
          marginBottom: "10px",
        }}
      >
        <ActionIcon
          component="a"
          href="/"
          variant="default"
          size={55}
          aria-label="Home"
          radius={100}
        >
          <IconHome2 style={{ width: rem(75), height: rem(30) }} stroke={1.5} />
        </ActionIcon>

        <ActionIcon
          component="a"
          href="/Contact"
          variant="default"
          size={55}
          aria-label="Contact"
        >
          <IconMailOpened
            style={{ width: rem(75), height: rem(30) }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon
          component="a"
          href="/FAQ"
          variant="default"
          size={55}
          aria-label="FAQs"
          radius={100}
        >
          <IconQuestionMark
            style={{ width: rem(75), height: rem(30) }}
            stroke={1.5}
          />
        </ActionIcon>

        <ActionIcon
          target="_blank"
          component="a"
          href="tel:+1 9286628897"
          variant="gradient"
          gradient={{ from: "#282a57", to: "#b22222", deg: 45 }}
          size={55}
          aria-label="Contact"
          radius={100}
        >
          <IconPhoneOutgoing
            style={{ width: rem(75), height: rem(30) }}
            stroke={1.5}
          />
        </ActionIcon>
      </ActionIcon.Group>
    </Group>
  );
}
