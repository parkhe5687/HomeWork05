var canvas = document.getElementById("GameCanvasScreen");
var ctx = canvas.getContext("2d");

draw();

var rotAngle = 0;
var rotEarth = 0;
var rotSun = 0;
var rotMoon = 0;

function draw() {
    rotSun += Math.PI / 100; // 태양 공전 속도

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 태양 그리기
    ctx.save();
    ctx.fillStyle = "red";
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotSun);
    ctx.fillRect(-50, -50, 100, 100); // 태양 크기
    ctx.restore();

    // 지구 그리기
    rotEarth -= Math.PI / 200; // 지구 공전 속도 (반대 방향으로)
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(rotEarth);
    ctx.translate(200, 0); // 태양으로부터의 거리
    rotAngle += Math.PI / 150; // 지구 자전 속도
    ctx.rotate(rotAngle); // 지구 자전 적용
    ctx.fillStyle = "green";
    ctx.fillRect(-45, -45, 90, 90); // 지구 크기

    // 달 그리기
    rotMoon += Math.PI / 100; // 달 공전 속도
    ctx.translate(100, 0); // 지구로부터의 거리
    ctx.rotate(rotMoon);
    ctx.fillStyle = "grey";
    ctx.fillRect(-25, -25, 50, 50); // 달 크기
    ctx.restore();

    requestAnimationFrame(draw);
}