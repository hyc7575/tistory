# AR.js 마커 예제

AR.js 마커를 사용한 간단한 예제
마커는 [AR.js 마커 생성기](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)를 사용하여 생성.

## 예제 코드

```html
<!DOCTYPE html>
<html>
<head>
  <script src="https://aframe.io/releases/1.3.0/aframe.min.js"></script>
  <script type="text/javascript" src="https://raw.githack.com/AR-js-org/AR.js/3.4.5/three.js/build/ar-threex-location-only.js"></script>
  <script type="text/javascript" src="https://raw.githack.com/AR-js-org/AR.js/3.4.5/aframe/build/aframe-ar.js"></script>
</head>
<body style="margin: 0; overflow: hidden;">
  <a-scene embedded arjs>
    <!-- 커스텀 마커 적용 -->
    <a-marker type="pattern" url="pattern-marker.patt">
      <a-box position="0 0.5 0" material="color: blue;"></a-box>
    </a-marker>
    <a-camera></a-camera>
  </a-scene>
</body>
</html>
```