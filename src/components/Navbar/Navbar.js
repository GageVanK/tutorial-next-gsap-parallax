import React from "react";
import { UnstyledButton, Group, Text } from "@mantine/core";
import styles from "./Navbar.module.css";
import Link from "next/link";

function Navbar() {
  return (
    <Group className={styles.navbar} p="md" justify="center">
      <Group justify="space-between" gap={100}>
        <Text fz={30} fw={700} ta="left">
          UTV Pit Stop
        </Text>

        <Group visibleFrom="lg">
          <UnstyledButton component={Link} href={"/"}>
            <Text className={styles.navItem} fs="italic" size="lg">
              Home
            </Text>
          </UnstyledButton>

          <UnstyledButton component={Link} href={"/Contact"}>
            <Text className={styles.navItem} fs="italic" size="lg">
              Contact
            </Text>
          </UnstyledButton>

          <UnstyledButton component={Link} href={"/FAQ"}>
            <Text className={styles.navItem} fs="italic" size="lg">
              FAQ
            </Text>
          </UnstyledButton>
        </Group>
      </Group>
    </Group>
  );
}

export default Navbar;
