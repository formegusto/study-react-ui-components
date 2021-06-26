# Button Groups

- button group은 하나의 라인에 버튼을 묶어주는 역할을 한다.

# 1. Basic Example

```tsx
<ButtonGroup aria-label="Basic example">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>
```

# 2. Button toolbar

- ButtonToolbar Component를 사용하면 ButtonGroup을 더욱 복잡한 구조로 표현할 수 있다.

```tsx
<ButtonToolbar aria-label="Toolbar with button groups">
  <ButtonGroup className="mr-2" aria-label="First group">
    <Button>1</Button> <Button>2</Button> <Button>3</Button> <Button>4</Button>
  </ButtonGroup>
  <ButtonGroup className="mr-2" aria-label="Second group">
    <Button>5</Button> <Button>6</Button> <Button>7</Button>
  </ButtonGroup>
  <ButtonGroup aria-label="Third group">
    <Button>8</Button>
  </ButtonGroup>
</ButtonToolbar>
```

![Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled.png](Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled.png)

- 또한 ButtonToolbar는 InputGroup과 ButtonGroup을 조화롭게 묶어줄 수도 있다.

```tsx
<ButtonToolbar className="justify-content-between mt-2">
  <ButtonGroup className="mr-2">
    <Button variant="secondary">1</Button>
    <Button variant="secondary">2</Button>
    <Button variant="secondary">3</Button>
  </ButtonGroup>
  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>@</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl
      type="text"
      placeholder="Input group example"
      aria-label="Input group example"
      aria-describedby="btnGroupAddon"
    />
  </InputGroup>
</ButtonToolbar>
```

![Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled%201.png](Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled%201.png)

# 3. Sizing

- button 개별로 사이즈를 주는 것 대신 통째로 사이즈를 줄 수도 있다.
- size props의 type은 "lg"|"sm"으로 button과 같다.

```tsx
<ButtonGroup size="lg">
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
</ButtonGroup>
<br />
<ButtonGroup size="sm">
  <Button>1</Button>
  <Button>2</Button>
  <Button>3</Button>
</ButtonGroup>
```

# 4. Nesting

- Button Group은 기본 Button 말고도 다른 버튼 컴포넌트와도 중첩이 가능하다.

```tsx
<ButtonGroup>
  <Button>1</Button>
  <Button>2</Button>
  <DropdownButton as={ButtonGroup} title="dropdown">
    <Dropdown.Item eventKey="1">Dropdown Link</Dropdown.Item>
    <Dropdown.Item eventKey="2">Dropdown Link</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
```

# 5. Vertical Variation

- 버튼 그룹을 수직정렬 시킬 수 있는 속성이다. ButtonGroup Component에 vertical props를 보내주면 된다.
- Split button dropdowns are not supported here. (?)

```tsx
<ButtonGroup vertical>
  <Button>1</Button>
  <Button>2</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown">
    <Dropdown.Item eventKey="1">1</Dropdown.Item>
    <Dropdown.Item eventKey="2">2</Dropdown.Item>
  </DropdownButton>
  <Button>3</Button>
  <DropdownButton as={ButtonGroup} title="Dropdown">
    <Dropdown.Item eventKey="1">1</Dropdown.Item>
    <Dropdown.Item eventKey="2">2</Dropdown.Item>
  </DropdownButton>
  <DropdownButton as={ButtonGroup} title="Dropdown">
    <Dropdown.Item eventKey="1">1</Dropdown.Item>
    <Dropdown.Item eventKey="2">2</Dropdown.Item>
  </DropdownButton>
</ButtonGroup>
```

![Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled%202.png](Button%20Groups%2062f9c9121baa40d0b90d281d8d1dba2c/Untitled%202.png)
