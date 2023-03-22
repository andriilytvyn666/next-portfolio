import React from "react";
import Card from "../components/Card";
import PageHead from "../components/PageHead";
import ProjectGroup from "../components/ProjectGroup";

export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
      <PageHead
        title="Projects"
        className="lg:col-span-2"
        subtitle="Things I’ve been working on in my free time"
      />
      <ProjectGroup title="Vue 3">
        <Card
          title="Vasily Richter site"
          subtitle="Site for Ukrainian indie musician"
        />
      </ProjectGroup>
      <ProjectGroup title="React">
        <Card
          title="Portfolio site"
          subtitle="My portfolio build with Nuxt.js"
        />
      </ProjectGroup>
    </div>
  );
}
