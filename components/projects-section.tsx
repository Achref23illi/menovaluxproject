"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLocale } from "@/components/locale-provider"

export function ProjectsSection() {
  const [currentProject, setCurrentProject] = useState(0)

  const { t } = useLocale()

  const projects = [
    {
      image: "/images/20200720_232213.jpg",
      titleKey: "proj1_title",
      categoryKey: "proj1_category",
      descriptionKey: "proj1_description",
      detailKeys: ["proj1_detail1","proj1_detail2","proj1_detail3","proj1_detail4","proj1_detail5","proj1_detail6","proj1_detail7"],
      duration: "5 semaines",
      surface: "32 m²"
    },
    {
      image: "/images/20200722_180958.jpg",
      titleKey: "proj2_title",
      categoryKey: "proj2_category",
      descriptionKey: "proj2_description",
      detailKeys: ["proj2_detail1","proj2_detail2","proj2_detail3","proj2_detail4","proj2_detail5","proj2_detail6"],
      duration: "3 semaines",
      surface: "15 m²"
    },
    {
      image: "/images/20180727_102008.jpg",
      titleKey: "proj3_title",
      categoryKey: "proj3_category",
      descriptionKey: "proj3_description",
      detailKeys: ["proj3_detail1","proj3_detail2","proj3_detail3","proj3_detail4","proj3_detail5"],
      duration: "6 semaines",
      surface: "65 m²"
    },
    {
      image: "/images/20190926_015906.jpg",
      titleKey: "proj4_title",
      categoryKey: "proj4_category",
      descriptionKey: "proj4_description",
      detailKeys: ["proj4_detail1","proj4_detail2","proj4_detail3","proj4_detail4","proj4_detail5","proj4_detail6"],
      duration: "1 semaine",
      surface: "10 m²"
    },
    {
      image: "/images/20190920_224235.jpg",
      titleKey: "proj5_title",
      categoryKey: "proj5_category",
      descriptionKey: "proj5_description",
      detailKeys: ["proj5_detail1","proj5_detail2","proj5_detail3","proj5_detail4","proj5_detail5"],
      duration: "1 semaine",
      surface: "10 m²"
    },
    {
      image: "/images/20200218_105304.jpg",
      titleKey: "proj6_title",
      categoryKey: "proj6_category",
      descriptionKey: "proj6_description",
      detailKeys: ["proj6_detail1","proj6_detail2","proj6_detail3","proj6_detail4","proj6_detail5","proj6_detail6"],
      duration: "1 semaine",
      surface: "10 m²"
    },
  ]

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length)
  }

  return (
    <section id="projets" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">{t('projects_title')}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {t('projects_description')}
            </p>
          </div>

          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <img
                  src={projects[currentProject].image || "/placeholder.svg"}
                  alt={t(projects[currentProject].titleKey as string)}
                  className="rounded-lg shadow-2xl w-full h-[400px] object-cover"
                />
                <div className="absolute top-4 left-4 bg-[#C9A961] text-black px-3 py-1 rounded-full text-sm font-semibold">
                  {t(projects[currentProject].categoryKey as string)}
                </div>
              </div>

              <div>
                <h3 className="text-3xl font-bold mb-4">{t(projects[currentProject].titleKey as string)}</h3>
                
                {/* Project Stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="text-sm">
                    <span className="text-gray-400">{t('project_label_duration')}: </span>
                    <span className="text-[#C9A961] font-semibold">{projects[currentProject].duration}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-gray-400">{t('project_label_surface')}: </span>
                    <span className="text-[#C9A961] font-semibold">{projects[currentProject].surface}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-300 mb-8 leading-relaxed">{t(projects[currentProject].descriptionKey as string)}</p>

                <div className="space-y-3 mb-8">
                  {(projects[currentProject].detailKeys ?? []).map((detailKey: string, index: number) => (
                    <div key={index} className="flex items-center space-x-3">
                      <span className="w-2 h-2 bg-[#C9A961] rounded-full"></span>
                      <span className="text-gray-300">{t(detailKey as string)}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevProject}
                    className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black"
                    aria-label="Projet précédent"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>

                  <div className="flex space-x-2">
                    {projects.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentProject(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          index === currentProject ? "bg-[#C9A961]" : "bg-gray-600"
                        }`}
                        aria-label={`Aller au projet ${index + 1}`}
                      />
                    ))}
                  </div>

                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextProject}
                    className="border-[#C9A961] text-[#C9A961] hover:bg-[#C9A961] hover:text-black"
                    aria-label="Projet suivant"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Button size="lg" className="bg-[#C9A961] hover:bg-[#B8975A] text-black font-semibold px-8 py-3">
              {t('projects_button_more')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
