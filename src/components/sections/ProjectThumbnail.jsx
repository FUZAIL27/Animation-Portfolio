import React, { useState } from 'react'

/**
 * ProjectThumbnail
 * -----------------
 * Renders the real project screenshot from /public/projects/*.
 * If the image file hasn't been added yet, it falls back to a
 * custom-built "browser frame" mockup (project icon + gradient +
 * name) so the layout never shows a broken image or a generic
 * stock placeholder. Drop your real screenshots into
 * `public/projects/` using the filenames referenced in
 * `src/data/mockData.js` (project.screenshot) to replace the mockup.
 */
export default function ProjectThumbnail({ project }) {
  const [errored, setErrored] = useState(false)
  const showImage = project.screenshot && !errored

  return (
    <div className="thumb-frame">
      {/* fake browser chrome */}
      <div className="thumb-chrome">
        <span className="thumb-dot" style={{ background: '#ff5f57' }} />
        <span className="thumb-dot" style={{ background: '#febc2e' }} />
        <span className="thumb-dot" style={{ background: '#28c840' }} />
        <div className="thumb-url">
          {project.live ? project.live.replace(/^https?:\/\//, '') : `${project.name.toLowerCase().replace(/\s+/g, '-')}.dev`}
        </div>
      </div>

      <div className="thumb-body">
        {showImage ? (
          <img
            src={project.screenshot}
            alt={`${project.name} — live screenshot`}
            loading="lazy"
            onError={() => setErrored(true)}
            className="thumb-img"
          />
        ) : (
          <div
            className="thumb-fallback"
            style={{ background: `linear-gradient(135deg, ${project.color}25, transparent 60%), radial-gradient(circle at 30% 20%, ${project.color}35, transparent 55%)` }}
          >
            <div className="thumb-fallback-icon" style={{ background: `${project.color}18`, border: `1px solid ${project.color}40`, boxShadow: `0 0 40px ${project.color}30` }}>
              {project.icon}
            </div>
            <p className="thumb-fallback-name">{project.name}</p>
            <span className="thumb-fallback-hint">Screenshot coming soon</span>
          </div>
        )}
      </div>
    </div>
  )
}
