module.exports = Queue

function Queue(name) {
  let xs = []
  let index = 0

  return {
    name,
    get length() {
      return xs.length - index
    },
    remove: (x) => {
      const index = xs.indexOf(x)
      return index === -1
        ? null
        : (xs.splice(index, 1), x)
    },
    push: (x) => (xs.push(x), x),
    shift: () => {
      const out = xs[index++]

      if (index === xs.length) {
        index = 0
        xs = []
      } else {
        xs[index - 1] = undefined
      }

      return out
    }
  }
}
