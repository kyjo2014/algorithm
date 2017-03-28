(function () {


    function Zebra(ctx, amount) {
        this.n = amount
        this.ctx = ctx
    }
    //画出一条斑马线
    Zebra.prototype.paintOne = function (top, left, width) {

        with(this.ctx) {
            save()
            transform(1, 0, Math.tan(Math.PI / 180 * -30), 1, 0, 0)
            fillRect(left, top, width, 3 * width)
            stroke()
            restore()
        }

    }
    //画出所有斑马线
    Zebra.prototype.paintAll = function (opt) {
        var n = this.n
        var top = opt.top || 100
        var left = opt.left || 100
        var width = opt.width || 30
        var space = opt.space || 30
        for (var i = 0; i < n; i++, left += (space + width)) {

            this.paintOne(top, left, width)
        }
    }

    //红绿灯
    function Redlight(ctx, top, left, radius) {
        this.ctx = ctx
        this.lightPos = []
        this.radius = radius
        this.top = top
        this.left = left
    }

    //画出整体外形
    Redlight.prototype.paint = function (top, left, width, radius) {
        radius = radius || this.radius
        with(this.ctx) {
            save()
            beginPath()
            translate(this.left || left, this.top || top)
            //左边半圆
            arc(50, 50, 50, Math.PI / 180 * 90, Math.PI * 1.5)
            lineTo(50 + width, 0)
            //右边半圆
            arc(50 + width, 50, 50, Math.PI * 1.5, Math.PI * 2.5)
            lineTo(50, 100)


            strokeStyle = '3px black'
            stroke()

            for (var i = 1, pos = 50; i <= 3; i++) {
                beginPath()
                arc(width / 3 * i, 50, radius, 0, 2 * Math.PI)
                stroke()

                this.lightPos.push({
                    x: width / 3 * i,
                    y: 50
                })
            }

            restore()

        }

    }
    //清除所有的灯状态
    Redlight.prototype.clearStatus = function () {
        with(this.ctx) {
            save()
            translate(this.left, this.top)
            for (var i = 0, pG = this.lightPos, rad = this.radius; i < 3; i++) {
                fillStyle = 'white'
                beginPath()
                arc(pG[i].x, pG[i].y, rad, 0, 2 * Math.PI)
                fill()

            }
            restore()
        }
    }
    //转变为红灯
    Redlight.prototype.turnRed = function () {
        var pG = this.lightPos,
            rad = this.radius
        this.clearStatus();
        with(this.ctx) {
            save()
            translate(this.left, this.top)
            fillStyle = 'red'
            beginPath()
            arc(pG[0].x, pG[0].y, rad, 0, 2 * Math.PI)
            clip()
            fill()
            restore()
        }
    }




    //转变为绿灯
    Redlight.prototype.turnGreen = function () {
        var pG = this.lightPos,
            rad = this.radius
        this.clearStatus();
        with(this.ctx) {
            save()
            translate(this.left, this.top)
            fillStyle = 'green'
            beginPath()
            arc(pG[2].x, pG[2].y, rad, 0, 2 * Math.PI)
            clip()
            fill()
            restore()
        }
    }
    //转变为黄灯
    Redlight.prototype.turnYellow = function () {
        var pG = this.lightPos,
            rad = this.radius
        this.clearStatus();
        with(this.ctx) {
            save()
            translate(this.left, this.top)
            fillStyle = 'yellow'
            beginPath()
            arc(pG[1].x, pG[1].y, rad, 0, 2 * Math.PI)
            clip()
            fill()
            restore()
        }
    }

    //转变状态
    Redlight.prototype.turn = function (type) {
        switch (type) {
            case 'red':
                this.turnRed()
                break;
            case 'green':
                this.turnGreen()
                break;
            case 'yellow':
                this.turnYellow()
                break;
            default:
                this.turnRed()
        }
    }
    //画灯柱
    Redlight.prototype.drawColumn = function () {
        with(this.ctx) {
            save()
            translate(this.left, this.top)
            fillRect(-30, 0, 30, 200)
            restore()
        }
    }

    var cav = document.getElementById('redlight')
    var context = cav.getContext("2d")
    context.fillStyle = 'black';
    var zebra = new Zebra(context, 6);
    zebra.paintAll({
        top: 200,
        left: 300,
        width: 30,
        space: 30
    })
    var redlight = new Redlight(context, 00, 200, 30)

    var a = 0
    var i = -100
    var status = 'green'
    var run = people(context)

    function animate() {
        context.clearRect(0, 0, 900, 900)
        redlight.paint(00, 200, 300)
        zebra.paintAll({
            top: 200,
            left: 300,
            width: 30,
            space: 30
        })
        redlight.drawColumn()
        redlight.turn(status)
        a++;

        if (a == 6) {
            a = 0
        }

        if (i < 100) {
            if (status == 'green') {
                i++
                run(a, i)
            }

        } else if (i < 200) {
            run(a, i)
            i++;
            status = 'yellow'
        } else {
            run(1,300)
            status = 'red'
        }


        window.requestAnimationFrame(animate)

    }
    window.requestAnimationFrame(animate)


    /**
     * 创建行人
     * 
     * @param {context} cxt 
     * @returns painter
     */
    function people(cxt) {
        var m, height, width, radius, st = [];
        st[0] = {
            head: [530, 290],
            Body: [530, 290, 454, 384],
            arm: [404, 310, 458, 298, 516, 314, 560, 342, 620, 328],
            leg: [320, 456, 400, 428, 454, 384, 520, 406, 522, 480]
        };
        st[1] = {
            head: [565, 294],
            Body: [565, 294, 480, 380],
            arm: [430, 294, 494, 294, 543, 315, 596, 334, 646, 306],
            leg: [340, 426, 416, 420, 480, 380, 548, 396, 562, 470]
        };
        st[2] = {
            head: [576, 300],
            Body: [576, 300, 490, 386],
            arm: [444, 290, 502, 296, 550, 320, 600, 344, 646, 306],
            leg: [354, 416, 426, 426, 490, 386, 556, 406, 590, 472]
        };
        st[3] = {
            head: [576, 305],
            Body: [576, 305, 484, 390],
            arm: [440, 298, 498, 310, 552, 325, 596, 360, 640, 322],
            leg: [368, 420, 438, 444, 484, 390, 528, 440, 560, 510]
        };
        st[4] = {
            head: [544, 300],
            Body: [544, 300, 454, 384],
            arm: [410, 360, 464, 336, 520, 320, 502, 374, 560, 360],
            leg: [392, 426, 458, 455, 454, 384, 458, 455, 415, 515]
        };
        st[5] = {
            head: [523, 300],
            Body: [523, 300, 440, 384],
            arm: [428, 406, 450, 350, 502, 318, 452, 348, 445, 420],
            leg: [358, 514, 402, 450, 440, 384, 498, 420, 435, 460]
        };




        var a = 0;
        var f1;
        // f1(st[a]);

        return function f1(a, z) {
            s = st[a]
            var str = {
                head: [""],
                Body: [""],
                arm: [""],
                leg: [""]
            };
            for (x in s) {
                for (var i = 0; i < s[x].length; i++) {
                    if (i % 2 == 0) {
                        str[x][i] = Math.floor(s[x][i] / 2048 * 1024)
                    }
                    if (i % 2 !== 0) {
                        str[x][i] = Math.floor(s[x][i] / 1440 * 768)
                    }
                }
            }

            cxt.save()
            cxt.translate(z, 0)
            // cxt.beginPath()
            cxt.strokeStyle = "#000";
            cxt.fillStyle = "#000";
            cxt.lineWidth = 20;
            radius = 28;
            cxt.lineJoin = "round";

            //头
            cxt.beginPath();
            cxt.strokeStyle = "black";
            cxt.fillStyle = "black";
            cxt.lineWidth = 20;
            cxt.arc(str.head[0], str.head[1], radius, 0, Math.PI * 2, true);
            cxt.fill();

            //身
            cxt.beginPath();
            cxt.moveTo(str.Body[0], str.Body[1]);
            x1 = str.Body[2] + (str.head[0] - str.Body[2]) / 2 - 14;
            y1 = str.Body[3] + (str.head[1] - str.Body[3]) / 2 + 4;
            cxt.lineTo(x1, y1);
            cxt.lineTo(str.Body[2], str.Body[3]);
            cxt.stroke();

            //腿
            cxt.beginPath();
            cxt.moveTo(str.leg[0], str.leg[1]);
            cxt.lineTo(str.leg[2], str.leg[3]);
            cxt.lineTo(str.leg[4], str.leg[5]);
            cxt.lineTo(str.leg[6], str.leg[7]);
            cxt.lineTo(str.leg[8], str.leg[9]);
            cxt.stroke();

            //手臂
            cxt.beginPath();
            cxt.moveTo(str.arm[0], str.arm[1]);
            cxt.lineTo(str.arm[2], str.arm[3]);
            cxt.lineTo(str.arm[4], str.arm[5]);
            cxt.lineTo(str.arm[6], str.arm[7]);
            cxt.lineTo(str.arm[8], str.arm[9]);
            cxt.stroke();
            cxt.restore()
        }
    }
})()