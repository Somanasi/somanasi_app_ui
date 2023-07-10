import React, { lazy, Suspense, useEffect, useRef } from "react";
import 'quill/dist/quill.snow.css';
import Quill from 'quill';

const LessonTextEditor = () => {
  const quillRef = useRef(null);

  useEffect(() => {
    const initializeQuill = async () => {
      const { default: Quill } = await import("quill");

      const quillOptions = {
        theme: "snow",
        modules: {
          toolbar: [
            ["bold", "italic", "underline", "strike"], // Inline formatting buttons
            [{ header: 1 }, { header: 2 }], // Headers
            [{ list: "ordered" }, { list: "bullet" }], // Lists
            [{ script: "sub" }, { script: "super" }], // Subscript and Superscript
            [{ indent: "-1" }, { indent: "+1" }], // Indentation
            [{ align: [] }], // Alignment
            ["link", "image"], // Links and Images
            ["clean"], // Remove formatting button
          ],
        },
        formats: [
          "header",
          "bold",
          "italic",
          "underline",
          "strike",
          "list",
          "bullet",
          "script",
          "indent",
          "align",
          "link",
          "image",
        ],
      };

      if (quillRef.current) {
        const quill = new Quill(quillRef.current, quillOptions);

        // Additional customization or event handling for Quill.js can be implemented here

        return () => {
          quill.destroy(); // Clean up Quill.js instance on component unmount
        };
      }
    };

    initializeQuill();
  }, []);

  return (
      <div ref={quillRef} style={{ height: "20vh" }} />
  );
};

export default LessonTextEditor;

