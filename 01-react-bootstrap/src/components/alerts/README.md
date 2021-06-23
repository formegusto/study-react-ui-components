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

![Alerts%2087b7aaa0bb24400c8a4d9e6c12d971e9/Untitled.png](Alerts%2087b7aaa0bb24400c8a4d9e6c12d971e9/Untitled.png)

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

![Alerts%2087b7aaa0bb24400c8a4d9e6c12d971e9/Untitled%201.png](Alerts%2087b7aaa0bb24400c8a4d9e6c12d971e9/Untitled%201.png)

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
