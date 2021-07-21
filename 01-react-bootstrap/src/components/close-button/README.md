# Close-Button

```tsx
<>
  <CloseButton />
  <CloseButton disabled />
  <div className="bg-dark p-3">
    <CloseButton
      style={{
        color: "white",
      }}
    />
    <CloseButton
      style={{
        color: "white",
      }}
      disabled
    />
  </div>
</>
```

- 가지고 있는 속성이라곤 disabled, onClick 이 전부이다. variant 속성이 적혀있기는 하지만, 현재는 사라진 속성인 것 같다. 폰트 컬러를 건들듯이 만져주면 색 변경이 가능하다.
- 추가적으로 aria-label 속성을 이용하여 액세스 가능성을 보장할 수도 있다. ( 사용자에게 사용 예를 전달)
