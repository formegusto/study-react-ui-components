# Alerts

- Alerts는 사용자 작업에 대한 상황 별 피드백 메시지와 경고 메시지를 전달하기 위해 사용된다.

# 1. Example

```tsx
<>
  {[
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ))}
</>
```

- Alert Component의 variant props는 일반적으로 8개의 props를 받는다.

```tsx
export declare type Variant =
  | "primary"
  | "secondary"
  | "success"
  | "danger"
  | "warning"
  | "info"
  | "dark"
  | "light"
  | string;
```

![Untitled](https://user-images.githubusercontent.com/52296323/123119262-527fb100-d47e-11eb-9779-8d633d149b8c.png)

# 2. Links

```tsx
<>
  {[
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert with{" "}
      <Alert.Link href="#">an example link</Alert.Link>. Give it a click if you
      like.
    </Alert>
  ))}
</>
```

- Alert.Link Component는 해당 Alert 테마에 맞는 색으로 a tag를 만들어준다.

# 3. Additional Content

- Alert Component는 어떤 요소든지 포함시킬 수 있다.
- 기본적으로 color CSS Attribute 가 테마에 맞게 깔려있기 때문에, 알아서 테마에 맞춰진 색으로 컨텐츠들이 꾸며진다.

```tsx
<Alert variant="success">
  <Alert.Heading>Hey, nice to see you</Alert.Heading>
  <p></p>
  <hr />
  <p className="mb-0"></p>
</Alert>
```

![Untitled 1](https://user-images.githubusercontent.com/52296323/123119298-5ad7ec00-d47e-11eb-9089-751abe39ce28.png)

# 4. Dismissing

- Alert Component의 props 중 dismissibl은 X 버튼을 추가 해주는 속성이다.
- 해당 버튼을 누르면 onClose EventListener가 발생한다.

```tsx
const [show, setShow] = useState<boolean>(true);

if (show) {
  return (
    <Alert variant="danger" onClose={() => setShow(false)} dismissible>
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>
        Change this and that and try again. Duis mollis, est non commodo luctus,
        nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis
        consectetur purus sit amet fermentum.
      </p>
    </Alert>
  );
}
return <Button onClick={() => setShow(true)}>Show Alert</Button>;
```

# 5. Custom Button

- 하지만 물론, X가 아닌, 다른 버튼도 원한다면 추가할 수 있다.
- 또한 위와 다른점은 Alert의 show props를 활용하면 Fade Effect와 함께 Alert를 표현할 수 있다.

```tsx
const [show, setShow] = useState<boolean>(true);

return (
  <>
    <Alert variant="success" show={show}>
      <Alert.Heading>How's it going?!</Alert.Heading>
      <p>
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
        lacinia odio sem nec elit. Cras mattis consectetur purus sit amet
        fermentum.
      </p>
      <hr />
      <div className="d-flex justify-content-end">
        <Button variant="outline-success" onClick={() => setShow(false)}>
          Close me y'all!
        </Button>
      </div>
    </Alert>
    {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
  </>
);
```

- d-flex는 강제적으로 flex 효과를 줄 때 사용된다.
- justify-conent-end 는 이름 그대로 flex-end를 줄 때 사용된다.
