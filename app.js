let shapeName = $('#shapeName')
let shapeWidth = $('#shapeWidth')
let shapeHeight = $('#shapeHeight')
let shapeRadius = $('#shapeRadi')
let shapeArea = $('#shapeArea')
let shapePerimeter = $('#shapePerimeter')
let shapeID = 0;
$('#sqBtn').click(() => {
    new square($('#sqInput').val())
    console.log($('input#sqInput').val())
})
$('#rectBtn').click(() => (
    new rectangle($('#rectHInput').val(), $('#rectWInput').val())
))
$('#circleBtn').click(() => (
    new circle($('#circleInput').val())
))
$('#triBtn').click(() => (
    new triangle($('#triInput').val())
))
class shape {
    constructor(height, width) {
        shapeID++
        this.height = height;
        this.width = width;
        this.div = $(`<div class='shape' id='${shapeID}'></div>`)
        this.Construct()
        $(this.div).dblclick(() => this.Remove())
    }
    Construct() {
        $('#shapeContainer').append(this.div)
        this.div.css("position", "absolute")
        this.div.css("left", `${Math.floor(Math.random() * (600 - this.width))}px`);
        this.div.css("top", `${Math.floor(Math.random() * (600 - this.height))}px`);
    }
    Remove() {
        $(this.div).remove()
    }
}
class square extends shape {
    constructor(height) {
        super(height, height)
        this.div.addClass('sq')
        this.div.css({
            "width": `${height}px`,
            "height": `${height}px`,
            "backgroundColor": 'red'
        }) 
        $(this.div).click(() => this.Describe())
    }
    Describe() {
        shapeName.val('Square')
        shapeWidth.val(`${this.height}`)
        shapeHeight.val(`${this.height}`)
        shapeRadius.val(`------`)
        shapeArea.val(`${this.height**2}`)
        shapePerimeter.val(`${this.height * 4}`)
    }
}
class rectangle extends shape {
    constructor(height, width) {
        super(height, width)
        this.div.addClass('rect')
        this.div.css({
            "width": `${width}px`,
            "height": `${height}px`,
            "backgroundColor": 'green'
        })
        $(this.div).click(() => this.Describe())
    }
    Describe() {
        shapeName.val('Rectangle')
        shapeWidth.val(`${this.width}`)
        shapeHeight.val(`${this.height}`)
        shapeRadius.val(`------`)
        shapeArea.val(`${this.height * this.width}`)
        shapePerimeter.val(`${(this.height * 2) + (this.width * 2)}`)
    }
}
class circle extends shape {
    constructor(radius) {
        super(radius * 2, radius * 2)
        this.radius = radius
        this.div.addClass('circle')
        this.div.css({
            "width": `${radius * 2}px`,
            "height": `${radius * 2}px`,
            "backgroundColor": 'purple',
            "borderRadius": '50%'
        })
        $(this.div).click(() => this.Describe())
    }
    Describe() {
        shapeName.val('Circle')
        shapeWidth.val(`--------`)
        shapeHeight.val(`--------`)
        shapeRadius.val(`${this.radius}`)
        shapeArea.val(`${Math.PI * this.radius ** 2}`)
        shapePerimeter.val(`${2 * Math.PI * this.radius}`)
    }
}
class triangle extends shape {
    constructor(height) {
        super(height, height)
        this.div.addClass('tri')
        this.div.css({
            "border-top": `${height}px solid rgba(255, 255, 0)`,
            "border-left": `${height}px solid transparent`,
        })
        $(this.div).click(() => this.Describe())
    }
    Describe() {
        shapeName.val('Triangle')
        shapeWidth.val(`${this.height}`)
        shapeHeight.val(`${this.height}`)
        shapeRadius.val(`------`)
        shapeArea.val(`${(this.height * this.height)/2}`)
        shapePerimeter.val(`${Math.sqrt((this.height ** 2) + (this.height ** 2)) + this.height + this.height}`)
    }
}

// let shapeID = 0;
// class shape {
//     constructor(height, className) {
//         this.height = height;
//     }



// }
// class square extends shape {
//     constructor(width) {
//         shapeID++
//         super(height)
//         this.height= width
//         this.div = $(`<div class='sq' id='${shapeID}' height='${width}' width='${width}' backgroundColor= '#000000'></div>`)
//         this.create();
//     }
//     create() {
//         $('#shapeContainer').append(this.div);
//         $(this.div).css({
//             "backgroundColor": "#000000" 
//         })
//     }


// }
// let sq = new square(5,5,'')
// console.log(sq);
// $('#shapeContainer').append(this.div);
