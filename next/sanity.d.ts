type PixGroup = {
  title: string
  date: Date
  pix: image[]
}

type Project = {
  title: string
  subtitle: string
  link: string
  image: image
}

type ProjectGroup = {
  name: string
  projects: Project[]
}

type Homepage = {
  title: string
  pix: image[]
  text: any // TODO: Figure out type here
  links: link[]
}

type file = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}

type link = {
  title: string
  url: string
}
