# Breadcrumbs

- CSS를 통해 구분 기호를 자동으로 추가하는 탐색 계층 구조 내에서 현재 페이지의 위치를 나타낸다.
- href 속성을 주면, textContents가 a 태그로 렌더링되고, active 속성을 주면 일반 text로 렌더링된다.

```tsx
<Breadcrumb>
  <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Library
  </Breadcrumb.Item>
  <Breadcrumb.Item active>Data</Breadcrumb.Item>
</Breadcrumb>
```

![Breadcrumbs%2048e54c1565e54b27a41ef60d41cbb9cb/Untitled.png](Breadcrumbs%2048e54c1565e54b27a41ef60d41cbb9cb/Untitled.png)
