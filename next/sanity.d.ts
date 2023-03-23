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

type Projects = {
  projectGroups: ProjectGroup[]
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type image = {
  asset: { _ref: string }
}

type Skills = {
  skillGroups: SkillGroup[]
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type Skill = {
  name: string
}
