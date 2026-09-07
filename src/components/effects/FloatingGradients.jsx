import React from 'react'

/**
 * FloatingGradients — fixed, full-viewport ambient background blobs.
 * Purely decorative, pointer-events disabled, sits behind all content.
 */
export default function FloatingGradients() {
  return (
    <div className="floating-gradients" aria-hidden="true">
      <span className="fg-blob fg-blob-1" />
      <span className="fg-blob fg-blob-2" />
      <span className="fg-blob fg-blob-3" />
      <div className="grid-bg absolute inset-0 opacity-60" />
    </div>
  )
}
