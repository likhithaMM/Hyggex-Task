import React from "react";

const Breadcrumb = ({ segments }) => {
  return (
    <nav className="flex items-center text-gray-500 text-sm cursor-pointer">
      {segments.map((segment, index) => (
        <React.Fragment key={index}>
          {/* Check if the segment is an object with label and icon */}
          {typeof segment === "object" ? (
            <span className="flex items-center">
              {segment.icon && <img src={segment.icon} alt={segment.label} className="w-4 h-4 mr-1" />}
              {segment.label && <span>{segment.label}</span>}
            </span>
          ) : (
            // If it's a string, simply render the text
            <span>{segment}</span>
          )}
          {/* Render ">" separator if not the last segment */}
          {index < segments.length - 1 && (
            <span className="mx-2">&gt;</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumb;
