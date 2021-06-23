# Accordion

- Accordion은 카드 구성 요소를 한 번에 하나씩만 열도록 제한하는 방법을 제공한다.

# 1. Basic Example

```tsx
<Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        Click Me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        Click Me!
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
```

- Accordion Component는 eventKey를 통해 Toggle Component에서 Cllapse를 열게되며, Accordion으로 감싸진 Group은 오로지 하나의 collapse show className만을 연다.
- Accordion.Toggle Component는 as Props로 통해 해당 컴포넌트가 어떤 역할로 작동할 것인지에 대해 정의한다.

![Accordion%208179d2dc40f94da4b5a846bd670ae735/Untitled.png](Accordion%208179d2dc40f94da4b5a846bd670ae735/Untitled.png)

# 2. Fully Collapsed State

- 내가 모든 Accordion Member 들이 Collapsed 한 상태를 원한다면 defaultActiveKey Props를 지정해주지 않으면 된다.

# 3. Entire Header Clickable

- AccordionToggle의 기본 구성 요소를 CardHeader 구성 요소로 설정하면, Accordion의 각 Card 구성 요소에서 전체헤더를 클릭할 수 있다. (버튼 처럼 특정 영역을 클릭할 필요가 없다는 말이다.)
- 주의할 점은 이미 Card.Header로서 공간을 차지하기 때문에

```tsx
<Accordion>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="0">
      Click Me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="0">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Accordion.Toggle as={Card.Header} eventKey="1">
      Click Me!
    </Accordion.Toggle>
    <Accordion.Collapse eventKey="1">
      <Card.Body>Hello! I'm the body</Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
```

# 4. Custom Toggle

- Accordion Toggle 에는 useAccordionToggle이라는 Hooks가 존재하는데, 이는 toggle component를 custom 할 수 있게 해준다.

```tsx
function CustomToggle({ eventKey, children }: AtomProps) {
  const decoratedOnClick = useAccordionToggle(eventKey, () =>
    console.log("Change Toggle!")
  );

  return (
    <button
      type="button"
      style={{ backgroundColor: "pink" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function CustomToggleComponent() {
  return (
    <Accordion>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="0">Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card>
        <Card.Header>
          <CustomToggle eventKey="1">Click Me!</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>Hello! I'm the body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}
```

- useAccordionToggle Hooks를 사용하는 컴포넌트 자체만으로도 이미 Accordion.Toggle의 역할을 하게 되므로, 감쌀 필요가 없다.

# 5. Custom Toggle with Expansion Awareness

- 토글 여부에 따른 다른 스타일을 원한다면 custom toggle을 제작할 때의 기능을 이용하면 된다.

```tsx
function ContextAwareToggle({
  eventKey,
  children,
}: React.PropsWithChildren<AtomProps>) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(eventKey);

  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <button
      type="button"
      style={{ backgroundColor: isCurrentEventKey ? "pink" : "lavender" }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}
```

- 공식 문서 상에서는 다음과 같이 표현이 된다.

```tsx
function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);

  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );

  // (...)
}
```

- 하지만 핵심은 useContext(AccordionContext)에 있다. 해당 Context Store에는 현재 eventKey의 string을 담고 있다. 아무것도 안 열려 있는 경우에는 null을 반환한다.
