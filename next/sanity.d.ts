type Pic = {
  title: string
  image: image
}

type PixGroup = {
  title: string
  date: Date
  pix: Pic[]
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
  name: string
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
