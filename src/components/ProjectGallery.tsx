"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { ProjectImageLightbox } from "@/components/ProjectImageLightbox";
import type { Project, ProjectImage } from "@/types";

interface ProjectGalleryProps {
  project: Project;
}

export function ProjectGallery({ project }: ProjectGalleryProps) {
  const [activeImage, setActiveImage] = useState<ProjectImage | null>(null);

  const allImages: ProjectImage[] = [
    { url: project.imageUrl, alt: `${project.title} — main preview` },
    ...(project.additionalImages ?? []),
  ];

  const openLightbox = (image: ProjectImage) => setActiveImage(image);
  const closeLightbox = useCallback(() => setActiveImage(null), []);

  return (
    <>
      <div className=" space-y-3">
        <button
          type="button"
          onClick={() => openLightbox(allImages[0])}
          className="group/thumb relative block aspect-video w-full overflow-hidden border-2 border-border text-left transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
          aria-label={`View full size: ${project.title}`}
        >
          <Image
            src={project.imageUrl}
            alt={project.title}
            fill
            className="object-contain transition-transform duration-300 group-hover/thumb:scale-105"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <span className="absolute bottom-2 right-2 border-2 border-border bg-bg-secondary px-2 py-1 font-ui text-[10px] font-semibold uppercase opacity-0 transition-opacity group-hover/thumb:opacity-100">
            Click to enlarge
          </span>
        </button>

        {project.additionalImages && project.additionalImages.length > 0 && (
          <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
            {project.additionalImages.map((image) => (
              <button
                key={image.url}
                type="button"
                onClick={() => openLightbox(image)}
                className="group/add relative aspect-square overflow-hidden border-2 border-border transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-brutal"
                aria-label={`View full size: ${image.alt}`}
              >
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover/add:scale-110"
                  sizes="120px"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {activeImage && (
        <ProjectImageLightbox
          image={activeImage}
          projectTitle={project.title}
          onClose={closeLightbox}
        />
      )}
    </>
  );
}
