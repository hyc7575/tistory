let xrSession = null;

async function startXR() {
    if (!navigator.xr) {
        console.error("WebXR 미지원");
        return;
    }

    try {
        xrSession = await navigator.xr.requestSession('immersive-ar');
        console.log("XR 세션 시작됨", xrSession);
    } catch (error) {
        console.error("XR 세션 요청 실패:", error);
    }
}

document.getElementById("startButton").addEventListener("click", startXR);
