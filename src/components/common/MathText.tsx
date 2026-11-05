import React, { useMemo } from 'react';
import katex from 'katex';

interface MathTextProps {
  children?: React.ReactNode;
  text?: string;
  formula?: string;
  block?: boolean;
  className?: string;
}

export const MathText: React.FC<MathTextProps> = ({
  children,
  text: textProp,
  formula,
  block = false,
  className = ''
}) => {
  // If raw formula is provided
  if (formula) {
    try {
      const html = katex.renderToString(formula, {
        displayMode: block,
        throwOnError: false,
        output: 'html'
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

  const rawInput = typeof children === 'string' ? children : (textProp || (typeof children === 'number' ? String(children) : ''));

  // Parse embedded $...$, $$...$$, \(...\), and \[...\] with auto-recovery for raw LaTeX
  const parsedNodes = useMemo(() => {
    if (!rawInput) return null;

    let text = rawInput;

    // 1. Convert standard LaTeX delimiters: \[ ... \] to $$...$$ and \( ... \) to $...$
    text = text.replace(/\\\[([\s\S]*?)\\\]/g, (_, math) => `$$${math}$$`);
    text = text.replace(/\\\(([\s\S]*?)\\\)/g, (_, math) => `$${math}$`);

    // 2. Resilient fallback: If no $ is present but raw LaTeX syntax exists
    if (!text.includes('$') && (text.includes('\\') || text.includes('^'))) {
      const hasVietnamese = /[àáạảãâầấậẩẫăằắặẳẵèéẹẻẽêềếệểễìíịỉĩòóọỏõôồốộổỗơờớợởỡùúụủũưừứựửữỳýỵỷỹđ]/i.test(text);
      if (!hasVietnamese) {
        // Pure formula without $ -> wrap entire string
        text = `$${text.trim()}$`;
      } else {
        // Mixed text: auto-wrap any math formula block containing LaTeX commands
        text = text.replace(/((?:-)?\\(?:frac|left|right|cdot|quad|sqrt|neq|in|mathbb|implies|times|widehat|Delta)[^;\n]+(?:;|\.|$)?)/g, (_, match) => `$${match.trim()}$`);
      }
    }

    const regex = /(\$\$[\s\S]*?\$\$|\$[^\$]+?\$)/g;
    const parts = text.split(regex);

    return parts.map((part, index) => {
      if (part.startsWith('$$') && part.endsWith('$$')) {
        const raw = part.slice(2, -2);
        try {
          const html = katex.renderToString(raw, { 
            displayMode: true, 
            throwOnError: false,
            output: 'html'
          });
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
          const html = katex.renderToString(raw, { 
            displayMode: false, 
            throwOnError: false,
            output: 'html'
          });
          return (
            <span
              key={index}
              className="inline-block px-0.5 align-baseline"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={index}>{raw}</code>;
        }
      }
      return <span key={index}>{part}</span>;
    });
  }, [rawInput]);

  return <span className={className}>{parsedNodes}</span>;
};
