# Carousel

- Carousel Component는 여러가지 이미지 혹은 텍스트 슬라이드를 돌아가면서 보여주는 slideshow component 이다.

# 1. Basic

- Carousel은 슬라이드 크기를 자동으로 맞추지 않는다. 그래서 콘텐츠의 크기를 적절하게 조정하려면 사용자 정의 스타일을 사용해야 할 수도 있다.
- Carousel에 들어가는 prev/next control 및 indicators는 꼭 필수적인 속성이지 않다.

```tsx
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* ... */}
</Carousel>
```

- Carousel 컴포넌트의 구조는 Carousel.Item, Carousel.Caption으로 이루어져있다. Carousel.Item은 전체 Carousel Item을 나타내며 Caption은 텍스트와 같은 설명부가 들어간다.

# 2. Controlled

- Carousel에 activeIndex가 onSelect 할때 변화 시켜주면 된다. 시작점은 역시 0,1,2...

```tsx
const [idx, setIdx] = useState<number>(0);

const onSelect = useCallback((idx: number) => {
  setIdx(idx);
}, []);

return (
  <Carousel activeIndex={idx} onSelect={onSelect}>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src="holder.js/800x400?text=First slide&bg=373940"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
);
```

# 3. Crossfade

- fade props를 추가해주면, fade transition과 함께 슬라이드를 이동시킬 수 있다.

```tsx
<Carousel fade></Carousel>
```

# 4. Options

- Controls, Indications : 기본값은 True로, false 값으로 바꾸면 사용자가 직접 컨트롤 할 수 없어진다.
