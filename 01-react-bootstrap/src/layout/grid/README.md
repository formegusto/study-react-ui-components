# Grid System

- Bootstrap의 Grid System은 일련의 Container, Row, Column을 사용하여 컨텐츠를 레이아웃하고 정렬한다.
- 이는 flexbox로 제작되었고, 반응형을 지원한다.

# 1. Container

- Container Component는 중앙 정렬과 사이트의 가로 컨텐츠를 위해 사용된다.
- pixel width 를 통하여 반응형이 일어난다.

```tsx
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function GridComponent() {
  return (
    <Container>
      <Row>
        <Col>1 of 1</Col>
      </Row>
    </Container>
  );
}
```

![Untitled](https://user-images.githubusercontent.com/52296323/122961265-32d58380-d3bf-11eb-8278-1bb2908a4aa1.png)

# 2. Fluid Container

- Container Component에 Fluid 옵션을 주면 margin: 0 auto; 가 걸리지 않은 상태로 가로 전체 크기를 채운다.
- 반응형 또한 빠지기 때문에, 직접 설정해주어야 한다.

```tsx
<Container fluid>
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

![Untitled 1](https://user-images.githubusercontent.com/52296323/122961300-3a952800-d3bf-11eb-902c-5cbad6309abb.png)

- fluid에는 string 옵션으로 "sm(min-width:576px → 540px)", "md(min-width:768px → 720px)", "lg(min-width:992px → 960px)", "xl(min-width:1200px → 1140px)" 를 보내줄 수 있는데, 해당 container의 fixing정도라고 생각하면 될 것 같다.
- sm 쪽으로 갈 수록 작은 기기에 반응형을 대응할 수 있게 된다. 그 이하로 작아질 경우에는 무조건 100%로 꽉차는 옵션이 들어간다. ( eq. breakpoint from document )

```tsx
<Container fluid="sm">
  <Row>
    <Col>1 of 1</Col>
  </Row>
</Container>
```

![Untitled 2](https://user-images.githubusercontent.com/52296323/122961322-3ff27280-d3bf-11eb-8c6a-a4f21fdeac91.png)

# 3. Auto-layout columns

- 기본적으로 flex-basis: 0 옵션이 들어가 있다.

```tsx
<Container>
  <Row>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
```

![Untitled 3](https://user-images.githubusercontent.com/52296323/122961341-454fbd00-d3bf-11eb-95fa-c8c363b85940.png)

# 4. Setting one column width

- xs 옵션에 숫자를 주어 크기를 정할 수 있는데, 최대 크기는 12로 설정이 들어간다. ( flex-basis: 100% ) 이를 기준으로 들어가는 숫자의 크기가 정해진다.

```tsx
<Container>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={6}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col xs={5}>2 of 3 (wider)</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
```

![Untitled 4](https://user-images.githubusercontent.com/52296323/122961358-4a147100-d3bf-11eb-85b0-4e01942a9045.png)

# 5. Variable width content

```tsx
<Container>
  <Row className="justify-content-md-center">
    <Col xs lg="2">
      1 of 3
    </Col>
    <Col md="auto">Contents Width</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
  <Row>
    <Col>1 of 3</Col>
    <Col md="auto">Variable width content</Col>
    <Col xs lg="2">
      3 of 3
    </Col>
  </Row>
</Container>
```

- size에 관여하는 속성에 auto값을 넣어주면 컨텐츠의 크기만큼 자리를 차지하게 된다.
- 해당 예제에저는 md를 auto로 잡았다. BootStrap 에서 md 는 min-width: 768px을 나타낸다.

![Untitled 5](https://user-images.githubusercontent.com/52296323/122961376-4e408e80-d3bf-11eb-99f2-9ad0b2aacf7e.png)

- 즉, 768px 이후 부터는 auto 사이즈가 적용되어 컨텐츠 크기만큼 자리를 잡게 된다.
- 두번째로는 justify-content-md-center에 관련된 내용이다.
- 해당 className을 주게되면 안에 있는 컨텐츠들이 md 사이즈 이후에 justify-conent 속성이 걸리게 된다.

![Untitled 6](https://user-images.githubusercontent.com/52296323/122961390-51d41580-d3bf-11eb-9936-55f53b7397c6.png)

# 6. Responsive Grids

- Col Component 는 5가지의 Breakepoint를 가진다. xs, sm, md, lg, xl 해당 props 들은 우리가 해당 크기에서 해당 영역의 크기를 지정해줄 수 있다.

```tsx
<Container>
  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
```

- true 속성은 auto layout width를 지정해준다.

```tsx
<Row>
  <Col xs={12} md={8}>
    xs=12 md=8
  </Col>
  <Col xs={6} md={4}>
    xs=6 md=4
  </Col>
</Row>
```

- 첫 번째 칼럼은 모바일 사이즈에서는 전체적으로 크기를 차지하게 만들고 (xs = 12) 768px size에서는 전체 크기에서 8정도의 비율을 차지하게 해주는 속성이다.

![Untitled 7](https://user-images.githubusercontent.com/52296323/122961406-55679c80-d3bf-11eb-9f31-b18812568beb.png)

Mobile Sizing

![Untitled 8](https://user-images.githubusercontent.com/52296323/122961418-58fb2380-d3bf-11eb-94a4-2cc4c2b34a38.png)

Window Sizing

# 7. Col Component Object

- Col Component의 breakpoint props로는 {span: number, order: number, offset: number} 객체 형태를 보내줄 수도 있다.

## 1. order

- 순서를 나타낸다.
- 숫자 외에도 문자 ("first" - order: -1), ("last" - order: $columns + 1) 를 보내줄 수 있다.

```tsx
<Container>
  <Row>
    <Col xs>First, but unordered</Col>
    <Col xs={{ order: 12 }}>Second, but last</Col>
    <Col xs={{ order: 1 }}>Third, but second</Col>
  </Row>
</Container>
<Container>
  <Row>
    <Col xs={{ order: "last" }}>First, but last</Col>
    <Col xs>Second, but unordered</Col>
    <Col xs={{ order: "first" }}>Third, but first</Col>
  </Row>
</Container>
```

## 2. span, offset

- span 속성은 우리가 일반적으로 breakpoint props에 숫자 값을 넣어준것과 같게 동작한다. 해당 요소가 크기를 얼마나 차지할지.
- 여기서 offset 속성은 해당 요소의 margin-left가 차지할 공간을 말한다.

```tsx
<Row>
  <Col md={4}>md=4</Col>
  <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
</Row>
```

- 다음과 같은 구성일 때, 일반적으로 공간을 차지하고 있는 요소, margin-left를 전체 공간의 4만큼 그리고 크기를 4를 가지고 있는 요소가 하나의 Row를 차지하게 된다. 즉, 전체 12 크기를 만족한다.

![Untitled 9](https://user-images.githubusercontent.com/52296323/122961440-5d274100-d3bf-11eb-8244-326a1b014964.png)

# 8. Setting Column Widths in Row

```tsx
<Container>
  <Row xs={2} md={4} lg={6}>
    <Col>1 of 2</Col>
    <Col>2 of 2</Col>
  </Row>
  <Row xs={1} md={2}>
    <Col>1 of 3</Col>
    <Col>2 of 3</Col>
    <Col>3 of 3</Col>
  </Row>
</Container>
```

- Row 에도 breakpoint props를 보낼 수 있는데, 해당 props를 전달하게 되면 전체 칼럼들에 동일한 breakpoint props를 지정해줄 수 있다.

![Untitled 10](https://user-images.githubusercontent.com/52296323/122961461-61535e80-d3bf-11eb-9a54-1937a75b2204.png)

```tsx
<Row md={4}>
  <Col>1 of 3</Col>
  <Col xs={6}>2 of 3</Col>
  <Col>3 of 3</Col>
</Row>
```

- 다음과 같은 상황일 경우 min-width: 768px 에서 작동하는 md 속성이 override 되어서, xs에 걸어놓은 속성은 먹히지 않게 된다.

![Untitled 11](https://user-images.githubusercontent.com/52296323/122961474-64e6e580-d3bf-11eb-96e9-28cc8e50c1ee.png)

# 9. BreakPoint

- lg : Large Devices ( ≥ 992px )
- md : Medium Devices ( ≥ 768px )
- sm : Small Devices ( ≥ 576px )
- xl : Extra Large Devices ( ≥ 1200px )
- xs : Extra Small Devices ( < 576px )
