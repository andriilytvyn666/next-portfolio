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
  titleCourses: string
  subtitle: string
  courses: Course[]
  titleEducation: string
  educationList: Education[]
}

type ProjectGroup = {
  name: string
  projects: Project[]
}

type Projects = {
  title: string
  subtitle: string
  projectGroups: ProjectGroup[]
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type Homepage = {
  name: string
  text: any // ??
  links: link[]
}

type Skills = {
  title: string
  subtitle: string
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

type link = {
  name: string
  link: string
}