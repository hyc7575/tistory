# AR.js 예제

마커 없는 버전

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
  <a-scene embedded arjs='sourceType: webcam;'>
    <a-box position="0 0.5 -2" material="color: red;"></a-box>
    <a-camera></a-camera>
  </a-scene>
</body>
</html>
```