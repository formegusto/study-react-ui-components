# Cards

- 부트스트랩의 Cards는 유연하고 확장가능한 여러 가지 속성과 옵션을 지닌, 컨텐츠 컨테이너를 제공한다.

# 1. Basic Example

```tsx
<Card style={{ width: "18rem" }}>
  <Card.Img variant="top" src="holder.js/100px180" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
```

![Untitled](https://user-images.githubusercontent.com/52296323/124494920-661e0680-ddf2-11eb-9188-9cee0a23dd25.png)

- Card 안에 들어가는 컨텐츠들은 기본적으로 부모 요소의 크기를 따라가는 형식이다.

# 2. Content types

## 1. Body

- Card 컨테이너의 바디 부분을 정의한다.

```tsx
<Card>
  <Card.Body>This is some text within a card body.</Card.Body>
</Card>
```

- 아래와 같이 한번에 표현할 수도 있다.

```tsx
<Card body>This is some text within a card body.</Card>
```

## 2. Title, text, and links

```tsx
<Card style={{ width: "18rem" }}>
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link>
  </Card.Body>
</Card>
```

![Untitled 1](https://user-images.githubusercontent.com/52296323/124494945-6e764180-ddf2-11eb-935d-ed374dd0a49b.png)

- Card Title의 TextContents는 기본적으로 h5 크기를 갖는다.
- Card Subtitle의 TextContents는 기본적으로 h6 크기를 갖는다. 위에서는 text-muted class를 주어서 색도 연하게 만들었다.
- Card Text는 p태그로 생성된다.
- Card Link는 a태그로 생성된다.

## 3.List Groups

- 카드안에 리스트를 만들 수 있다.

```tsx
<Card style={{ width: "18rem" }}>
  <Card.Header>Featured</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>Cras justo odio</ListGroup.Item>
    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
  </ListGroup>
</Card>
```

![Untitled 2](https://user-images.githubusercontent.com/52296323/124494961-7504b900-ddf2-11eb-895b-d264d7f9d0aa.png)

- Card Header를 이용하여 해당 List의 헤더를 달 수 있다.

## 4. Header and Footer

- Card Header는 as props를 이용하여 헤드 요소를 변경할 수 있다.
- blockquote는 인용문을 나타낼 때, 쓰이는 태그이다.
- cite는 blockquote와 주로 쓰이는 태그로 작품의 제목을 지정한다.
- blockquote-footer 는 인용문에 대한 추가문을 작성한다.

```tsx
<Card className="text-center" style={{ width: "18rem" }}>
  <Card.Header as="h5">Header</Card.Header>
  <Card.Body>
    <blockquote className="blockquote mb-0">
      <p>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
        erat a ante.{" "}
      </p>
    </blockquote>
    <footer className="blockquote-footer mb-2">
      Someone famous in <cite title="Source Title">Source Title</cite>
    </footer>
    <Button>Go somewhere</Button>
  </Card.Body>
  <Card.Footer className="text-muted">2 Days ago</Card.Footer>
</Card>
```

# 3. Images

- Card Component는 몇가지 옵션들과 이미지를 함께 사용할 수 있다.

## 1. ImageCaps

```tsx
<>
  <Card>
    <Card.Img variant="top" src="holder.js/100px180" />
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
  </Card>
  <br />
  <Card>
    <Card.Body>
      <Card.Text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </Card.Text>
    </Card.Body>
    <Card.Img variant="bottom" src="holder.js/100px180" />
  </Card>
</>
```

- variant 옵션과 함께 이미지의 위치를 지정할 수 있다.

## 2. Image Overlays

- 카드에 오버레이로 이미지를 지정할 수 있다.
- Card.ImageOverlay Component를 이용하면 된다. 해당 컴포넌트는 Image위에 작동하는 것 외에도 Card Body로서 동작힌다.

```tsx
<Card className="bg-dark text-white">
  <Card.Img src="holder.js/100px270" alt="Card image" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text>Last updated 3 mins ago</Card.Text>
  </Card.ImgOverlay>
</Card>
```

# 4. Navigation

- Card Header 컴포넌트에는 React Bootstrap의 Nav Component를 함께 사용할 수 있다.
- 후에 Nav Component를 배울 때 나오겠지만 Nav Component의 variant는 tabs, pills를 지원한다. 이에 따라 Card Header가 Card.Body Component에 맞게 Nav를 변환해준다.

```tsx
<Card>
  <Card.Header>
    <Nav variant="tabs" defaultActiveKey="#first">
      <Nav.Item>
        <Nav.Link href="#first">Active</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#link">Link</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </Card.Header>
  <Card.Body>
    <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
```

![Untitled 3](https://user-images.githubusercontent.com/52296323/124494987-7d5cf400-ddf2-11eb-9100-50f056dc961c.png)

# 5. Card Styles

## 1. Background Color

- Card Component는 bg, text props를 통해서 해당 카드의 스타일에 변화를 줄 수가 있다.

```tsx
{
  [
    "Primary",
    "Secondary",
    "Success",
    "Danger",
    "Warning",
    "Info",
    "Light",
    "Dark",
  ].map((variant, idx) => (
    <Card
      bg={variant.toLowerCase()}
      key={idx}
      text={variant.toLowerCase() === "light" ? "dark" : "white"}
      className="mb-2"
      style={{
        width: "18rem",
      }}
    >
      <Card.Header>Header</Card.Header>
      <Card.Body>
        <Card.Title>{variant} Card Title </Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  ));
}
```

## 2. Border Color

- border props에도 react bootstrap의 8가지 테마를 넣어주면 해당 테마의 메인 컬러로 보더 컬러를 변경할 수 있다.

# 6. Card layout

## 1. Card Groups

- CardGroup Component를 사용하면, Card Component를 하나의 Row에 넣어둘 수가 있다.

```tsx
<CardGroup>
  {[0, 1, 2].map((number, idx) => (
    <Card key={idx}>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>
    </Card>
  ))}
</CardGroup>
```

![Untitled 4](https://user-images.githubusercontent.com/52296323/124495003-851c9880-ddf2-11eb-8ab9-e99bd9a5a87c.png)

## 2. Card Deck

- CardDeck Component는 약간의 마진을 주면서 카드를 배치할 수 있다.

![Untitled 5](https://user-images.githubusercontent.com/52296323/124495024-8bab1000-ddf2-11eb-9d7a-c6754826d3c1.png)

## 3. Card Columns

- CardColumnComponent는 Column Count 속성을 가지고 있다.
- Column-Count는 컬럼수를 지정하며, CardColumnComponent는 별도의 설정이 없으면, 기본적으로 3이 들어가게 된다.
- 약간 Column을 채우는 기준이, 가장 합쳤을 때, 작은 칼럼을 가지게 될 열을 우선적으로 채우며, 이를 초과할 경우 다음 열로 이동하는 특성을 가지고 있다.
- 핀터레스트와 같은 레이아웃을 만들 때, 주로 사용한다.

![Untitled 6](https://user-images.githubusercontent.com/52296323/124495043-91a0f100-ddf2-11eb-9e02-d68bfd44a958.png)
