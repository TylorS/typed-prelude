import ExampleImage from './example-image.png'

export function createImage() {
  const img = document.createElement('img')

  img.src = ExampleImage

  return img
}
