# Media

# 1. Media Objects

- Media Object 는 해당 미디어와 함께 배치되는 복잡하고 반복적이고 둘러싸지 않는 콘텐츠(ex: Blog 댓글, Twit 등)를 만드는 데 도움을 준다.
- 또한 flexbox 를 이용하기 때문에 두 개의 필수 클래스만으로 해당 작업이 수행된다.
- 선택적으로 패딩 및 마진은 간격 유틸리티를 통해 제어할 수 있다.
  - m(margin), mr(margin-right), ml(margin-left)
  - p(padding), pr(padding-right), pl(padding-left)
    - m-1 과 같이 설정하며 최대 5까지 가능하고, .25rem, .5rem, 1rem, 1.5rem, 3rem 순으로 높아진다.

```tsx
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    <h5>Media Heading</h5>
    <p>
      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
      ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
      tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
      Donec lacinia congue felis in faucibus.
    </p>
  </Media.Body>
</Media>
```

![Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled.png](Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled.png)

# 2. Media Nesting

- Media Object들은 무한으로 중첩이 가능하다. 하지만 어느 시점에서는 중지하는 것이 좋다.

```tsx
<Media>
  <img
    width={64}
    height={64}
    className="mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    {/* (...) */}
    <Media>
      <img
        width={64}
        height={64}
        className="mr-3"
        src="holder.js/64x64"
        alt="Generic placeholder"
      />
      <Media.Body>{/* (...) */}</Media.Body>
    </Media>
  </Media.Body>
</Media>
```

![Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled%201.png](Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled%201.png)

# 3. Media Alignment

- Media Component 안에 미디어 객체는 Media.Body 컴포넌트의 크기를 기준으로 top, middle, end와 같은 flexbox 유틸리티들로 정렬을 할 수 있다.

```tsx
<Media>
  <img
    width={64}
    height={64}
    className="align-self-start mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    {/* (...) */}
  </Media.Body>
</Media>

<Media>
  <img
    width={64}
    height={64}
    className="align-self-center mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    {/* (...) */}
	</Media.Body>
</Media>

<Media>
  <img
    width={64}
    height={64}
    className="align-self-end mr-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
  <Media.Body>
    {/* (...) */}
  </Media.Body>
</Media>
```

- align-self-start|center|end 로 className을 넣어주면 된다.

# 4. Media Order

```tsx
<Media>
  <Media.Body>{/* (...) */}</Media.Body>
  <img
    width={64}
    height={64}
    className="ml-3"
    src="holder.js/64x64"
    alt="Generic placeholder"
  />
</Media>
```

- 별거 없다. Media.Body와 순서를 잘 조합하면 된다.

# 5. Media List

- Media Object에는 구조적 요구 사항이 거의 없기 때문에, 이러한 클래스를 목록 HTML Element(ul, ol) 등에 적용 시킬 수 있다.
- 브라우저의 기본 목록 스타일을 제거하려면 .list-unstyled 클래스 네이밍을 주면 된다.
- <Media as="li"> 로 태그를 지정해주면 list item으로써, 렌더링 된다.

```tsx
<ul className="list-unstyled">
  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>{/* (...) */}</Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>{/* (...) */}</Media.Body>
  </Media>

  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>{/* (...) */}</Media.Body>
  </Media>
</ul>
```

![Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled%202.png](Media%208bd459cb5ae24380ab58fea4652e48b8/Untitled%202.png)
