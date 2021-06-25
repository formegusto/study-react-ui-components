# Buttons

- Button Component는 form의 action, dialogs 그리고 상태 관리 및 여러 사이즈를 지원해준다.

# 1. Basic Example

```tsx
<Button variant="primary">Primary</Button>{" "}
<Button variant="secondary">Secondary</Button>{" "}
<Button variant="success">Success</Button>{" "}
<Button variant="warning">Warning</Button>{" "}
<Button variant="danger">Danger</Button>{" "}
<Button variant="info">Info</Button>{" "}
<Button variant="light">Light</Button>{" "}
<Button variant="dark">Dark</Button>
<Button variant="link">Link</Button>
```

![Untitled](https://user-images.githubusercontent.com/52296323/123392795-67705780-d5d8-11eb-9fb3-64db50b7a3f2.png)

# 2. Outline Button

```tsx
<Button variant="outline-primary">Primary</Button>{' '}
<Button variant="outline-secondary">Secondary</Button>{' '}
<Button variant="outline-success">Success</Button>{' '}
<Button variant="outline-warning">Warning</Button>{' '}
<Button variant="outline-danger">Danger</Button>{' '}
<Button variant="outline-info">Info</Button>{' '}
<Button variant="outline-light">Light</Button>{' '}
<Button variant="outline-dark">Dark</Button>
```

![Untitled 1](https://user-images.githubusercontent.com/52296323/123392825-6f2ffc00-d5d8-11eb-899c-ce2523bdecaa.png)

# 3. Button tags

```tsx
<Button href="#">Link</Button>
<Button type="submit">Button</Button>{" "}
<Button as="input" type="button" value="Input" />{" "}
<Button as="input" type="submit" value="Submit" />{" "}
<Button as="input" type="reset" value="Reset" />
```

- Button은 링크의 용도로도 쓰일 수 있고, 일반 Button, Submit, Reset의 역할을 할 수 있다.
- React-BootStreap의 Button Component는 href속성을 넣으면 a 태그로(링크) 작동을하고, as에 input을 넣으면 input으로서(Button, Submit, Reset) 작동할 수 있다.

![Untitled 2](https://user-images.githubusercontent.com/52296323/123392842-76570a00-d5d8-11eb-8d52-536aaf134a5c.png)

# 4. Sizes

- Button에는 size props를 보낼 수 있다. lg(Large) sm(Small) 또한 block 요소를 넣어 전체 크기를 꽉채울 수도 있다.

```tsx
<Button variant="primary" size="lg">
  Large Button
</Button>
<Button variant="primary" size="sm">
  Small Button
</Button>
<Button variant="primary" block>
  Block Button
</Button>
```

![Untitled 3](https://user-images.githubusercontent.com/52296323/123392867-7f47db80-d5d8-11eb-8ef0-7766cc275890.png)

# 5. Active State

- Button 활성 상태 스타일은 active props를 통해 제어할 수 있다.
- 조금 진해진 것이 보일 것이다.

```tsx
<Button active>Active Button</Button>
<Button>Deactive Button</Button>
```

![Untitled 4](https://user-images.githubusercontent.com/52296323/123392897-866ee980-d5d8-11eb-8f57-dded0c5da62e.png)

# 6. Disabled State

- disabled props를 보내주면 버튼을 완전히 비활성화 상태로 만들 수 있다.

```tsx
<Button disabled>Disabled Button</Button>
<Button href="#" disabled>
  Disabled Button
</Button>
```

- 주의할 점은 Button tag는 disabled 효과를 주면 제대로 동작할 수 있지만 Link로서 동작하는 Button에 disabled를 걸면 몇몇 브라우저에서는 동작하지 않을 수 있다.
- 이는 a tag를 disable 시키기 위해 point-events: none CSS 속성을 주었기 때문인데, 해당 스타일은 아직 모든 브라우저에서 지원하지 않는다.
- react bootstrap 측에서는 모든 onClick handler를 막는 식으로 고쳐나가겠다고 적혀있네요.

# 7. Button Loading State

- 최고의 UX 패턴 중 하나는 사용자에게 로딩 상태를 비동기적으로 알려주는 것이다.
- 이것은 disabled props와 onClick 을 이용하여 쉽게 구현할 수 있다.

```tsx
<Button
  variant="primary"
  disabled={loading}
  onClick={loading ? () => {} : requestNetwork}
>
  {loading ? "Loading..." : "Network Simulator"}
</Button>
```

# 8. Checkbox / Radio

- 또한 Button Component는 checkbox와 radio 스타일로도 사용할 수 있다. 이것은 사용자가 원하는 토글 스타일 버튼을 form 에서 사용하기를 원할 때 사용된다.

```tsx
<ButtonGroup toggle className="mb-2">
  <ToggleButton
    type="checkbox"
    variant="secondary"
    checked={checked}
    value="1"
    onChange={(e) => setChecked(e.currentTarget.checked)}
  >
    Checked
  </ToggleButton>
</ButtonGroup>
<br />
<ButtonGroup toggle>
  {RadioGroup.map((radio, idx) => (
    <ToggleButton
      key={idx}
      type="radio"
      value={radio.value}
      name="radio"
      variant="secondary"
      checked={radio.value === radioValue}
      onChange={(e) => setRadioValue(e.currentTarget.value)}
    >
      {radio.name}
    </ToggleButton>
  ))}
</ButtonGroup>
```

![Untitled 5](https://user-images.githubusercontent.com/52296323/123392920-8e2e8e00-d5d8-11eb-9a98-7feab11641fa.png)

- 스타일링을 하고 싶다면 위의 예제와 같이 checked를 컨트롤 하면 된다.
- 최고의 방법은 ButtonGroup에 toggle을 넣기보다 ToggleButtonGroup을 사용하는 것이다. 이 그룹은 ToggleButton 들의 value를 더욱 효과적으로 관리할 수 있게해준다.

```jsx
<ToggleButtonGroup type="checkbox" defaultValue={[1, 3]} className="mb-2">
  <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
  <ToggleButton value={2}>Checkbox 2</ToggleButton>
  <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
</ToggleButtonGroup>
<ToggleButtonGroup type="radio" name="options" defaultValue={1}>
  <ToggleButton value={1}>Radio 1 (pre-checked)</ToggleButton>
  <ToggleButton value={2}>Radio 2</ToggleButton>
  <ToggleButton value={3}>Radio 3</ToggleButton>
</ToggleButtonGroup>
```

- 상태관리를 통해 직접적으로 관리할 수도 있다.

```jsx
import { useState } from "react";
import { ToggleButtonGroup, ToggleButton } from "react-bootstrap";

function ToggleGrpComponent() {
  const [value, setValue] = useState<number[]>([1, 2]);

  const handleChange = (val: number[]) => setValue(val);
  return (
    <ToggleButtonGroup
      type="checkbox"
      value={value}
      onChange={handleChange}
    >
      <ToggleButton value={1}>Checkbox 1 (pre-checked)</ToggleButton>
      <ToggleButton value={2}>Checkbox 2</ToggleButton>
      <ToggleButton value={3}>Checkbox 3 (pre-checked)</ToggleButton>
    </ToggleButtonGroup>
  );
}
```
