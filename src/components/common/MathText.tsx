import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  children?: string;
  formula?: string;
  block?: boolean;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({
  children,
  formula,
  block = false,
  className = ''
}) => {
  // If raw formula is provided
  if (formula) {
    try {
      const html = katex.renderToString(formula, {
        displayMode: block,
        throwOnError: false
      });
      return (
        <span
          className={`katex-math ${className} ${block ? 'block my-2.5 text-center overflow-x-auto' : 'inline-block'}`}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      );
    } catch {
      return <code className="bg-slate-100 text-slate-700 px-1 py-0.5 rounded text-xs">{formula}</code>;
    }
  }

  // Parse embedded $...$ and $$...$$
  const parsedNodes = useMemo(() => {
    if (!children) return null;

    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = children.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const raw = part.slice(2, -2);
        try {
          const html = katex.renderToString(raw, { displayMode: true, throwOnError: false });
          return (
            <div
              key={index}
              className="my-2.5 overflow-x-auto text-center"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <pre key={index}>{raw}</pre>;
        }
      } else if (part.startsWith('$') && part.endsWith('$')) {
        const raw = part.slice(1, -1);
        try {
          const html = katex.renderToString(raw, { displayMode: false, throwOnError: false });
          return (
            <span
              key={index}
              className="inline-block px-0.5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={index}>{raw}</code>;
        }
      }
      return <span key={index}>{part}</span>;
    });
  }, [children]);

  return <span className={className}>{parsedNodes}</span>;
};
