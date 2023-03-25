type Project = {
  title: string
  subtitle: string
  link: string
  image: image
}

type Course = {
  name: string
  provider: string
  dateFinished: string
  certificate: file
  image: image
}

type Education = {
  name: string
  degree: string
  major: string
  link: string
  dateStarted: string
  dateFinished: string
  image: image
}

type CoursesEducation = {
  title: string,
  subtitle: string,
  courses: Course[],
  educationList: Education[]
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

type file = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}