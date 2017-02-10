
// ------ floated "We Are" at top of page -------
const weArr = [
  'doers',
  'thinkers',
  'crafters',
  'shakers',
  'explorers',
  'seekers',
  'pioneers',
  'pathfinders',
  'shapers',
  'dreamers',
  'makers'
]

const dynamic = $('.dynamic')

let i = 0
let len = weArr.length

let weArrLoop = () => {
  dynamic.empty()  // empties div of children
  let item = weArr[i]
  i++
  if (i === len) { // resets counter to 0 once i = length of array
    i = 0
  }

  let block = `
  <p>&nbsp;${item}</p>
  `
  dynamic.append(block)

  return i
}

setInterval(weArrLoop, 2000)

// hover on let's chat
$('.contact').hover(
  function () {
    $('.contact').removeClass('fill')
  },
  function () {
    $('.contact').addClass('fill')
  }
)
