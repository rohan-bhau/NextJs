import { Button } from "@heroui/react";

export default function Home() {
  return (
    <div>
      <h2>Homepage</h2>
      <Button>Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="danger-soft">Danger Soft</Button>
    </div>
  );
}
