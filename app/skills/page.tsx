import React from "react";
import SkillGroup from "../components/SkillGroup";
import Skill from "../components/Skill";

export default function Skills() {
  return (
    <div className="flex flex-col gap-8">
      <SkillGroup title="Languages">
        <Skill name="English B2" />
        <Skill name="Ukrainian Native" />
      </SkillGroup>
      <SkillGroup title="Vue 3">
        <Skill name="Nuxt 3" />
        <Skill name="Pinia" />
        <Skill name="nuxt/i18n" />
        <Skill name="nuxt/sanity" />
        <Skill name="vueuse/motion" />
      </SkillGroup>
      <SkillGroup title="React">
        <Skill name="Next.js 13" />
      </SkillGroup>
      <SkillGroup title=".NET">
        <Skill name="C#" />
        <Skill name=".NET Core" />
        <Skill name="EF Core" />
        <Skill name="ASP.NET WebAPI" />
      </SkillGroup>
      <SkillGroup title="Databases">
        <Skill name="MsSQL" />
        <Skill name="PostgreSQL" />
        <Skill name="MySQL" />
        <Skill name="Redis" />
      </SkillGroup>
      <SkillGroup title="Python">
        <Skill name="Numpy" />
        <Skill name="Jupyter" />
      </SkillGroup>
      <SkillGroup title="Tools">
        <Skill name="Git" />
        <Skill name="Docker" />
        <Skill name="Bash" />
        <Skill name="Linux" />
      </SkillGroup>
      <SkillGroup title="Web">
        <Skill name="CSS" />
        <Skill name="SASS" />
        <Skill name="Tailwind CSS" />
        <Skill name="HTML" />
      </SkillGroup>
      <SkillGroup title="Design">
        <Skill name="Figma" />
      </SkillGroup>
    </div>
  );
}
