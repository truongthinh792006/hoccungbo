import React, { useMemo } from 'react';
import katex from 'katex';

interface MathRendererProps {
  content?: string;
  math?: string;
  block?: boolean;
  className?: string;
}

export const MathRenderer: React.FC<MathRendererProps> = ({
  content,
  math,
  block = false,
  className = ''
}) => {
  // If a raw math formula string is supplied
  if (math) {
    try {
      const html = katex.renderToString(math, {
        displayMode: block,
        throwOnError: false,
      });
      return (
        <span
          className={`katex-render ${className} ${block ? 'block my-2 overflow-x-auto text-center' : 'inline-block'}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <code className="bg-slate-100 px-1 py-0.5 rounded text-sm">{math}</code>;
    }
  }

  // If text content with embedded $...$ or $$...$$ is supplied
  const renderedParts = useMemo(() => {
    if (!content) return null;

    // Split text by $...$ (inline math) or $$...$$ (block math)
    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = content.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const formula = part.slice(2, -2);
        try {
          const html = katex.renderToString(formula, { displayMode: true, throwOnError: false });
          return <div key={index} className="my-2 overflow-x-auto text-center" dangerouslySetInnerHTML={{ __html: html }} />;
        } catch {
          return <pre key={index}>{formula}</pre>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const formula = part.slice(1, -1);
        try {
          const html = katex.renderToString(formula, { displayMode: false, throwOnError: false });
          return <span key={index} className="inline-block px-0.5" dangerouslySetInnerHTML={{ __html: html }} />;
        } catch {
          return <code key={index}>{formula}</code>;
        }
      }
      return <span key={index}>{part}</span>;
    });
  }, [content]);

  return <span className={className}>{renderedParts}</span>;
};
