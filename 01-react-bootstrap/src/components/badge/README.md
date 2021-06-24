# Badge

- Badge는 부모 요소가 사용하는 폰트 사이즈를 따라간다.

# 1. Basic Example

```tsx
<h1>
  Example heading <Badge variant="secondary">New</Badge>
</h1>
<h2>
  Example heading <Badge variant="secondary">New</Badge>
</h2>
<h3>
  Example heading <Badge variant="secondary">New</Badge>
</h3>
<h4>
  Example heading <Badge variant="secondary">New</Badge>
</h4>
<h5>
  Example heading <Badge variant="secondary">New</Badge>
</h5>
<h6>
  Example heading <Badge variant="secondary">New</Badge>
</h6>
```

![Untitled](https://user-images.githubusercontent.com/52296323/123187825-dd3fca80-d4d5-11eb-8e48-ac00b8755fcb.png)

# 2. Badge Button

- Badge Component는 link 혹은 Button의 자식 요소로 사용될 수 있으며, 카운터를 제공한다.

```tsx
<Button variant="primary">
  Profile <Badge variant="light">9</Badge>
  <span className="sr-only">unread messages</span>
</Button>
```

- Badge는 사용방법에 사용자에게 혼동을 줄 수도 있다.
- Badge 스타일링의 목적은 시각적 단서를 사용자에게 제공하기 위함이다.
- 즉, 우리는 숫자나 단어를 추가적으로 넣어 주기 위해서 Badge를 사용한다. (span tag)
- 컨텍스트가 명확하지 않은 경우 위와 같이, sr-only로 숨겨진 추가 텍스트 조각과 함께 추가 컨텍스트를 포함하는 것이 좋다.

# 3. Contextual Variations

- Badge도 8가지의 Variant를 제공한다.

```tsx
<Badge variant="primary">primary</Badge>
<Badge variant="second">second</Badge>
<Badge variant="success">success</Badge>
<Badge variant="danger">danger</Badge>
<Badge variant="warning">warning</Badge>
<Badge variant="info">info</Badge>
<Badge variant="light">light</Badge>
<Badge variant="dark">dark</Badge>
```

# 4. Pill

- Badge Component의 pill props는 rounded badge를 표현해준다.

```tsx
<Badge pill variant="primary">
  primary
</Badge>
<Badge pill variant="second">
  second
</Badge>
```
