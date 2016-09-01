export function getReadableNumber(number) {
  const n = `${number}`
  if (n.indexOf('.') < 0) {
    return n.replace(/(\d{1,3})(?=(\d{3})+$)/g, '$1,')
  }
  return n.replace(/(\d{1,3})(?=(\d{3})+\.)/g, '$1,')
}

export function getReadablePercent(percent, option = { decimal: 2 }) {
  if (!percent && percent !== 0) return ''
  return `${(percent * 100).toFixed(option.decimal)}%`
}

export function svg2img(svg, option = {}) {
  const svg64 = btoa(unescape(encodeURIComponent(svg)))
  const b64Start = 'data:image/svg+xml;base64,'
  const image64 = b64Start + svg64

  // set it as the source of the img element
  const img = new Image()
  img.src = image64
  img.width = option.width || '100'
  img.height = option.height || '100'
  return img
}

export function svg2canvas(svg, option = {}) { // eslint-disable-line no-unused-vars
  const img = svg2img(svg, option)
  const myCanvas = document.createElement('canvas')
  myCanvas.width = img.width
  myCanvas.height = img.height
  const myCanvasContext = myCanvas.getContext('2d')
  myCanvasContext.drawImage(img, 0, 0)
  return myCanvas
}

/* eslint-disable */

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
export function debounce(func, wait, immediate) {
  let timeout
  return function(...args) {
    const context = this
    const later = function() {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
export function throttle(func, wait, options) {
  var context, args, result;
  var timeout = null;
  var previous = 0;
  if (!options) options = {};
  var later = function() {
    previous = options.leading === false ? 0 : Date.now();
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) context = args = null;
  };
  return function() {
    var now = Date.now();
    if (!previous && options.leading === false) previous = now;
    var remaining = wait - (now - previous);
    context = this;
    args = arguments;
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }
      previous = now;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining);
    }
    return result;
  };
};
