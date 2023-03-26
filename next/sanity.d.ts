type Project = {
  title: localeString
  subtitle: localeString
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
  name: localeString
  degree: localeString
  major: localeString
  link: string
  dateStarted: string
  dateFinished: string
  image: image
}

type CoursesEducation = {
  titleCourses: localeString
  subtitle: localeString
  courses: Course[]
  titleEducation: localeString
  educationList: Education[]
}

type ProjectGroup = {
  name: string
  projects: Project[]
}

type Projects = {
  title: localeString
  subtitle: localeString
  projectGroups: ProjectGroup[]
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type Homepage = {
  name: localeString
  text: localePortableText
}

type Skills = {
  title: localeString
  subtitle: localeString
  skillGroups: SkillGroup[]
}

type SkillGroup = {
  name: string
  skills: Skill[]
}

type Skill = {
  name: string
}

type localeString = {
  en: string
  uk: string
}

type localePortableText = {
  en: Any
  uk: Any
}

type file = {
  asset: { _ref: string }
}

type image = {
  asset: { _ref: string }
}